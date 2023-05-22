/*
Sanctum is a Laravel package that provides a simple, lightweight way to authenticate APIs using Laravel's built-in authentication system. It allows you to generate and manage API tokens for your users.

To get started with Sanctum in Laravel, follow these steps:

Step 1: Install Sanctum
First, you need to install the Sanctum package using Composer. Open your terminal and navigate to your Laravel project directory, then run the following command:


composer require laravel/sanctum
Step 2: Set Up the Database
Next, you need to set up the database tables for Sanctum. Run the migration command to create the necessary tables:


php artisan migrate
Step 3: Configure Middleware
To protect your API routes with Sanctum, you need to apply the EnsureFrontendRequestsAreStateful middleware. Open your app/Http/Kernel.php file and add the following to the $middlewareGroups array:


'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
Step 4: Generate API Tokens
Sanctum provides a convenient way to generate API tokens for your users. In your user model (app/Models/User.php), add the HasApiTokens trait:


use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    
    // ...
}
Step 5: Protect Your API Routes
To protect your API routes, you can use the auth:sanctum middleware. For example, let's say you have an API endpoint to retrieve a user's profile (GET /api/profile). Open your routes/api.php file and define the route like this:


Route::get('/profile', function () {
    // Your profile logic here
})->middleware('auth:sanctum');
Step 6: Authenticate Users
To authenticate users and issue API tokens, you can use Laravel's built-in authentication methods. For example, you might have a login endpoint (POST /api/login) that accepts user credentials and returns an API token. Here's an example implementation:


use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;
        
        return response()->json(['token' => $token]);
    } else {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
});
This code attempts to authenticate the user with the provided credentials. If successful, it generates an API token using createToken(), which is associated with the user. The token is then returned as a JSON response.

You can also include a logout endpoint to allow users to revoke their API tokens:


use Illuminate\Http\Request;

Route::post('/logout', function (Request $request) {
    $user = $request->user();
    $user->currentAccessToken()->delete();
    
    return response()->json(['message' => 'Logged out successfully']);
})->middleware('auth:sanctum');
In this code, the user's current access token is deleted,

*/


/*
Here's some additional information on Sanctum in Laravel:

Token-based Authentication with Sanctum
Sanctum provides a token-based authentication system, which means that each user can have multiple API tokens associated with their account. These tokens are used to authenticate API requests. To authenticate an API request using Sanctum, you need to include the API token in the request header or as a query parameter.

For example, if you have an API endpoint to retrieve a user's profile (GET /api/profile), you can authenticate the request by including the API token in the Authorization header:


GET /api/profile
Authorization: Bearer your-api-token
You can access the authenticated user in your route handler using the auth()->user() method.

Revoking Tokens
Sanctum allows you to easily revoke or delete a user's API tokens. This can be useful when a user logs out or you want to restrict their access to certain resources.

To revoke a specific token, you can use the delete() method on the PersonalAccessToken model:


use Laravel\Sanctum\PersonalAccessToken;

$token = PersonalAccessToken::findToken('your-token-id');
$token->delete();
This code retrieves the token by its ID and deletes it from the database.

To revoke all of a user's tokens, you can use the tokens()->delete() method on the user model:


use App\Models\User;

$user = User::find(1);
$user->tokens()->delete();
This code retrieves the user by their ID and deletes all of their tokens.

Using Token Abilities
Sanctum allows you to define abilities or permissions for your tokens. These abilities can be used to control access to specific actions or resources in your application.

To define abilities for a token, you can use the tokenCan method on the PersonalAccessToken model:


use Laravel\Sanctum\PersonalAccessToken;

$token = PersonalAccessToken::findToken('your-token-id');
$token->tokenCan('create-posts');
In this example, we're granting the token the ability to create posts. You can define any number of abilities as per your application's requirements.

To check if a token has a specific ability, you can use the can method on the PersonalAccessToken model:


use Laravel\Sanctum\PersonalAccessToken;

$token = PersonalAccessToken::findToken('your-token-id');
if ($token->can('create-posts')) {
    // The token can create posts
} else {
    // The token cannot create posts
}
This code checks if the token has the ability to create posts and performs an action based on the result.

These are the basic concepts and examples of using Sanctum in Laravel. Remember to explore the Laravel Sanctum documentation for more detailed information and additional features: Laravel Sanctum Documentation
*/

/*
 Here's some additional information on Sanctum in Laravel:

Stateful vs Stateless Tokens
Sanctum supports both stateful and stateless tokens. Stateful tokens require the client to send a CSRF token along with the API request for authentication. This CSRF token is typically stored in a cookie. On the other hand, stateless tokens are self-contained and do not rely on cookies or CSRF tokens.

By default, Sanctum uses stateful tokens, which provide an additional layer of security. To use stateful tokens, you need to include the CSRF token in your API requests. You can include the CSRF token in the request header or as a query parameter.

If you prefer to use stateless tokens, you can modify the Sanctum configuration. Open the config/sanctum.php file and set the stateful option to false.

Limiting Token Abilities
Sanctum allows you to limit the abilities of a token to specific models or resources. This can be useful when you want to restrict the token's access to certain parts of your application.

To limit the abilities of a token, you can use the can method on the PersonalAccessToken model and specify the abilities as an array:


use Laravel\Sanctum\PersonalAccessToken;

$token = PersonalAccessToken::findToken('your-token-id');
$token->can([
    'create-posts',
    'delete-posts',
]);
In this example, the token is limited to the abilities of creating posts and deleting posts. You can specify any number of abilities as per your application's needs.

Revoking Tokens by Ability
Sanctum allows you to revoke tokens based on their abilities. This can be useful when you want to revoke the access of tokens with specific abilities.

To revoke tokens based on their abilities, you can use the tokensCan method on the PersonalAccessToken model and pass the abilities as an array:


use Laravel\Sanctum\PersonalAccessToken;

PersonalAccessToken::tokensCan([
    'create-posts',
    'delete-posts',
]);
This code revokes all tokens that have the abilities to create posts or delete posts. Tokens that do not have these abilities will not be affected.

You can also revoke tokens based on multiple abilities by passing an array of arrays to the tokensCan method:


use Laravel\Sanctum\PersonalAccessToken;

PersonalAccessToken::tokensCan([
    ['create-posts', 'delete-posts'],
    ['edit-comments', 'delete-comments'],
]);
In this example, tokens that have the abilities to create and delete posts, or edit and delete comments, will be revoked.

These are some additional aspects and features of Sanctum in Laravel. Remember to refer to the Laravel Sanctum documentation for more detailed information and advanced usage: Laravel Sanctum Documentation

*/


/*
Here are a few more important aspects of Sanctum in Laravel:

Cross-Origin Resource Sharing (CORS)
When using Sanctum for API authentication, you might need to handle Cross-Origin Resource Sharing (CORS) to allow requests from different origins. CORS is a browser security mechanism that restricts cross-origin HTTP requests.

To enable CORS for Sanctum, you need to configure the CORS middleware in your Laravel application. Open the app/Http/Kernel.php file and add the HandleCors middleware to the $middleware array:


protected $middleware = [
    // ...
    \Fruitcake\Cors\HandleCors::class,
];
Make sure you have the fruitcake/laravel-cors package installed. You can install it using Composer:


composer require fruitcake/laravel-cors
Once the middleware is added, you can configure CORS settings in the config/cors.php file. Here you can specify allowed origins, methods, headers, and other CORS-related options.

Token Lifetimes and Expiration
Sanctum allows you to configure the lifetime and expiration of API tokens. By default, tokens have no expiration date and last indefinitely. However, you might want to set a specific lifetime for tokens to improve security.

To configure the token lifetime, you can modify the auth.php configuration file in your Laravel application. Open the config/auth.php file and specify the desired lifetime value for the Sanctum driver:


'sanctum' => [
    'driver' => 'sanctum',
    'provider' => 'users',
    'expiration' => null, // Set the desired lifetime in seconds, e.g., 3600 for 1 hour
],
In this example, the token lifetime is set to null, which means the tokens will last indefinitely. You can change it to a specific value to enforce token expiration.

Once a token reaches its expiration date, it will no longer be valid for authentication, and the user will need to generate a new token.

Disabling CSRF Protection for Specific Routes
By default, Laravel Sanctum enables Cross-Site Request Forgery (CSRF) protection for all incoming requests. However, there might be scenarios where you want to disable CSRF protection for specific routes or endpoints.

To disable CSRF protection for specific routes, you can modify the VerifyCsrfToken middleware in your Laravel application. Open the app/Http/Middleware/VerifyCsrfToken.php file and add the route URLs to the $except array:


protected $except = [
    'api/route1',
    'api/route2',
];
In this example, the api/route1 and api/route2 URLs will be exempted from CSRF protection.

Remember to use caution when disabling CSRF protection, as it can potentially introduce security vulnerabilities. Only disable CSRF protection for routes that are explicitly intended to be exempted.

These are some additional aspects and considerations for using Sanctum in Laravel. Make sure to refer to the Laravel Sanctum documentation for more details and explore the various configuration options and features available: Laravel Sanctum Documentation

*/


/*
Here are a few more aspects and features of Sanctum in Laravel:

Token Revocation and Logging Out
Sanctum provides methods to revoke or invalidate a specific token or all tokens associated with a user. This can be useful when a user wants to log out of the application or when you need to revoke access for a user.

To revoke a specific token, you can call the delete() method on the token object:


use Laravel\Sanctum\PersonalAccessToken;

$token = PersonalAccessToken::findToken('your-token-id');
$token->delete();
In this example, the token with the specified ID is retrieved and deleted from the database.

To revoke all tokens associated with a user, you can use the tokens()->delete() method on the user model:


use App\Models\User;

$user = User::find(1);
$user->tokens()->delete();
This code retrieves the user with the specified ID and deletes all their associated tokens.

Handling Token Revocation Events
Sanctum provides events that are fired when a token is revoked. You can listen for these events and perform additional actions, such as logging the token revocation.

To listen for token revocation events, you can define event listeners in your application. For example, you can create a listener class that handles the Laravel\Sanctum\Events\TokenRevoked event:


namespace App\Listeners;

use Laravel\Sanctum\Events\TokenRevoked;

class LogTokenRevocation
{
    public function handle(TokenRevoked $event)
    {
        // Log the token revocation
    }
}
Don't forget to register the listener in your EventServiceProvider:


protected $listen = [
    TokenRevoked::class => [
        LogTokenRevocation::class,
    ],
];
Now, whenever a token is revoked, the LogTokenRevocation listener's handle method will be executed, allowing you to log the token revocation or perform any other desired actions.

Protecting Routes Based on Abilities
Sanctum allows you to protect routes based on the abilities assigned to a token. You can define a policy for a particular model and authorize actions based on the token's abilities.

To define a policy for a model, you can use the createTokenUsing method on the Sanctum facade. For example, let's assume you have a Post model and want to protect the store action based on the create-posts ability:


use App\Models\Post;
use Laravel\Sanctum\Sanctum;

Sanctum::createTokenUsing(function ($request) {
    return $request->user()->can('create-posts')
        ? new Post()
        : null;
});
In this example, the createTokenUsing method is called with a closure that checks if the authenticated user has the create-posts ability. If they have the ability, a new instance of the Post model is returned. Otherwise, null is returned.

Now, you can protect the store action in your PostController using the can middleware:


namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:create-posts')->only('store');
    }

    public function store()
    {
        // Store the new post
    }
}
With this setup, only users with the create-posts ability will be authorized to access the store action of the PostController.

These are a few additional aspects and features of Sanctum in Laravel.

*/ 