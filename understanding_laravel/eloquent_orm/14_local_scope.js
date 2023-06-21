// // local scopes in Laravel's Eloquent ORM. Local scopes allow you to define reusable query constraints on your models, making it easier to work with common query conditions. Let's dive into the concept and explore some code examples.

// // To define a local scope, you need to add a method to your model class. This method should have a naming convention of scope[ScopeName], where[ScopeName] represents the name of your scope.Within the scope method, you can chain query constraints using the Eloquent query builder.

// //     Here's an example to illustrate the concept. Let's say we have a User model with a status column, and we want to create a local scope to retrieve only active users:


// class User extends Model {
//     // ...

//     public function scopeActive($query) {
//         return $query -> where('status', 'active');
//     }
// }
// In the above code, we defined a local scope named active.The scope method receives the query builder instance as its first argument(conventionally named $query).We used the where method to add a condition to the query, filtering users with the "active" status.

//     Now, you can use this local scope in your queries like this:


// $activeUsers = User:: active() -> get();
// By calling the active scope on the User model, it applies the constraint defined in the scope, and you will receive a collection of active users.

// Local scopes can also accept additional parameters if needed.For example, let's create a scope that retrieves users based on their role:


// class User extends Model {
//     // ...

//     public function scopeByRole($query, $role) {
//         return $query -> where('role', $role);
//     }
// }
// Now you can use the byRole scope by passing the desired role as an argument:


// $admins = User:: byRole('admin') -> get();
// The byRole scope allows you to easily fetch users with a specific role.

// You can chain multiple local scopes together or combine them with other query builder methods.Here's an example that uses both the active and byRole scopes:


// $activeAdmins = User:: active() -> byRole('admin') -> get();
// In this case, you retrieve active users with the role of "admin."

// That's the basic concept of local scopes in Laravel's Eloquent ORM.They provide a convenient way to define reusable query constraints within your models, allowing you to write cleaner and more maintainable code.

// I hope this explanation helps you understand local scopes in Laravel Eloquent ORM.





