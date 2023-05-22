/*
Guards in Laravel provide a way to authenticate users and protect different parts of your application based on their authentication status. Laravel ships with several guard implementations out of the box, such as the session guard, token guard, and more. Here's a step-by-step explanation of how Guards work in Laravel:

Guard Configuration:
The guard configuration in Laravel is defined in the config/auth.php file. This file contains an array of guards and their corresponding configurations. Each guard specifies the driver it uses, the provider it relies on, and other settings.


'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'api' => [
        'driver' => 'token',
        'provider' => 'users',
    ],
],
In the example above, two guards are defined: the 'web' guard and the 'api' guard. The 'web' guard uses the session driver and the 'users' provider, while the 'api' guard uses the token driver and the 'users' provider.

Authentication Process:
The authentication process in Laravel involves the following steps:

Retrieving a specific guard instance using the Auth facade or by specifying the guard's name.
Authenticating a user by calling the attempt method on the guard instance with the appropriate credentials.
Storing the authenticated user in the session or generating a token for stateless authentication.

use Illuminate\Support\Facades\Auth;

if (Auth::guard('web')->attempt(['email' => $email, 'password' => $password])) {
    // User is authenticated
}
In the code snippet above, the Auth facade is used to retrieve the 'web' guard instance. The attempt method is then called on the guard instance, passing the user's email and password for authentication.

Authentication Middleware:
Laravel provides middleware to protect routes based on authentication status. The auth middleware verifies that the user is authenticated using the default guard specified in the auth configuration. You can also specify a specific guard for a route using the guard middleware.


Route::get('/dashboard', function () {
    // Only authenticated users can access this route
})->middleware('auth');

Route::get('/api/resource', function () {
    // Only authenticated users can access this route with the 'api' guard
})->middleware('auth:api');
In the example above, the '/dashboard' route is protected by the auth middleware, which ensures that only authenticated users can access it. The '/api/resource' route is protected by the auth:api middleware, which uses the 'api' guard for authentication.

Multiple Guards:
Laravel allows you to define and use multiple guards simultaneously. This can be useful when you have different authentication methods or user types in your application.


if (Auth::guard('web')->check()) {
    // Web guard authentication
}

if (Auth::guard('api')->check()) {
    // API guard authentication
}
In the code snippet above, the check method is used to determine if a user is authenticated using a specific guard. You can switch between guards by specifying the guard's name when retrieving the guard instance.

Guards in Laravel provide a flexible and powerful way to authenticate users and protect different parts of your application. By configuring guards, authenticating users


*/ 