<?php
// Middleware is a powerful feature in Laravel that allows you to intercept incoming HTTP requests and perform actions before or after the request is handled by the controller. Middleware can be used for a wide range of tasks, such as authentication, authorization, validation, and logging.

// Creating and registering middleware
// To create a middleware in Laravel, you can use the make:middleware Artisan command:

// go
// Copy code
// php artisan make:middleware MyMiddleware
// This will create a new middleware class named MyMiddleware in the app/Http/Middleware directory. The middleware class will contain two methods: handle and terminate.

// The handle method is where you can perform actions before the request is handled by the controller. The terminate method is where you can perform actions after the response is sent to the client.

// Here's an example of a simple middleware that adds a custom header to the response:

// php
// Copy code
// namespace App\Http\Middleware;

// use Closure;

// class MyMiddleware
// {
//     public function handle($request, Closure $next)
//     {
//         $response = $next($request);

//         $response->header('X-My-Header', 'Hello, world!');

//         return $response;
//     }

//     public function terminate($request, $response)
//     {
//         // Perform any cleanup tasks here
//     }
// }
// Once you've created your middleware, you need to register it with Laravel. You can do this in the app/Http/Kernel.php file by adding your middleware to the $middleware property:

// php
// Copy code
// protected $middleware = [
//     \App\Http\Middleware\MyMiddleware::class,
// ];
// Alternatively, you can register your middleware as a named middleware by adding it to the $routeMiddleware property:

// php
// Copy code
// protected $routeMiddleware = [
//     'my-middleware' => \App\Http\Middleware\MyMiddleware::class,
// ];
// You can then apply the middleware to a route or a group of routes using the middleware method:

// php
// Copy code
// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// })->middleware('my-middleware');
// Middleware groups
// Middleware groups are a useful feature in Laravel that allows you to group related middleware together and apply them to routes or groups of routes. This can make your code more organized and easier to maintain.

// To define a middleware group, you can use the $middlewareGroups property in the app/Http/Kernel.php file:

// php
// Copy code
// protected $middlewareGroups = [
//     'web' => [
//         \App\Http\Middleware\EncryptCookies::class,
//         \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
//         \Illuminate\Session\Middleware\StartSession::class,
//         \Illuminate\View\Middleware\ShareErrorsFromSession::class,
//         \App\Http\Middleware\VerifyCsrfToken::class,
//         \Illuminate\Routing\Middleware\SubstituteBindings::class,
//     ],

//     'api' => [
//         'throttle:60,1',
//         \Illuminate\Routing\Middleware\SubstituteBindings::class,
//     ],
// ];
// In this example, we define two middleware groups: web and api. The web group contains middleware that is typically used for web applications, such as cookie encryption, session handling, CSRF protection, and route model binding. The api group contains middleware that is typically used for API applications, such as rate limiting and route model binding.

// You can then apply the middleware group to a route or a group of routes using the middleware method:


// use Illuminate\Support\Facades\Route;

// Route::group(['middleware' => 'web'], function () {
//     Route::get('/dashboard', function () {
//         return view('dashboard');
//     });
// });
// In this example, we define a route group with a middleware of web. The web middleware group is a predefined group in Laravel that includes middleware for web applications, such as session handling and CSRF protection.

// Within the group, we define a route that responds to the /dashboard URL and returns the dashboard view.

// When a request is made to the /dashboard URL, Laravel will apply the web middleware to the request before passing it to the route handler. This means that the session and CSRF protection middleware will be applied before the request is handled by the controller.

// You can define your own middleware and add it to the web middleware group to extend the functionality of your application. You can also create your own middleware groups and apply them to routes or groups of routes as needed.

// Middleware parameters are also a powerful feature in Laravel. You can pass parameters to your middleware when you register it, which allows you to configure the behavior of the middleware on a per-route or per-group basis. Here's an example:


// use App\Http\Middleware\MyMiddleware;
// use Illuminate\Support\Facades\Route;

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(MyMiddleware::class . ':param1,param2');
// In this example, we define a route that applies the MyMiddleware middleware with two parameters: param1 and param2. When the middleware is executed, it will receive these parameters as arguments to the handle method.

// You can then use these parameters to configure the behavior of the middleware as needed. This can be useful when you have multiple routes that require slightly different behavior from the same middleware.
