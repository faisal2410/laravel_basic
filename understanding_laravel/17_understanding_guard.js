/*
In Laravel, guards are used for authentication and determine how users are authenticated for different parts of your application. Guards define the sources from which authentication information should be retrieved, such as databases, API tokens, or sessions.

The most common guard used in Laravel is the web guard, which provides session-based authentication. Let's take a look at an example to understand how to use guards in Laravel.

First, let's assume you have a User model and a users table in your database.

Define the Guard Configuration:
Open the config/auth.php file in your Laravel project. You will find an array of guards defined in this file. By default, Laravel comes with the web guard pre-configured. You can add additional guards as needed. Here's an example of how you can define a guard named admin:

'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],
],
Define the Provider Configuration:
The next step is to define the provider for the guard. Providers determine how the user information should be retrieved. In our example, let's create a users provider for the web guard and an admins provider for the admin guard. Open the config/auth.php file again and define the providers:

'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],

    'admins' => [
        'driver' => 'eloquent',
        'model' => App\Models\Admin::class,
    ],
],

Protect Routes using Guards:
Now that you have defined the guards and providers, you can protect your routes using the desired guard. In your routes file (web.php or api.php), you can use the middleware method to apply the guard. Here's an example that protects a route group with the admin guard:

Route::middleware('auth:admin')->group(function () {
    // Routes that require admin authentication
    Route::get('/admin/dashboard', 'AdminController@dashboard');
    Route::get('/admin/users', 'AdminController@users');
});
In this example, the auth:admin middleware ensures that only authenticated administrators can access the routes within the group.

Logging In and Authenticating Users:
To log in users, you can use the Auth facade in Laravel. Here's an example of logging in a user using the web guard:

use Illuminate\Support\Facades\Auth;

if (Auth::guard('web')->attempt(['email' => $email, 'password' => $password])) {
    // User authentication successful
    return redirect()->intended('/dashboard');
} else {
    // User authentication failed
    return redirect()->back()->withErrors(['message' => 'Invalid credentials']);
}
In this example, we are using the attempt method on the Auth facade to attempt user authentication based on the provided email and password.

That's a basic overview of using guards in Laravel. By defining guards, providers, and protecting routes, you can control authentication and authorization within your application. Remember to customize the code examples based on your specific application requirements and user model.







*/ 