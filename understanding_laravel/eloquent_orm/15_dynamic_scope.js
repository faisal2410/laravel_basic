// dynamic scopes in Laravel's Eloquent ORM. Dynamic scopes are a powerful feature that allows you to define reusable query constraints in your models.

// To create a dynamic scope, you need to define a method in your Eloquent model.This method will return an instance of the query builder with the desired constraints.Let's dive into an example to illustrate how it works.

// Let's say we have a "User" model with a "status" column that represents the status of a user. We want to define a dynamic scope to retrieve only active users. Here's how you can do it:

  
//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function scopeActive($query) {
//         return $query -> where('status', 'active');
//     }
// }
// In the above code, we define a method called "scopeActive" in the "User" model.This method takes the query builder instance as a parameter and returns the modified query builder.

//     Now, let's see how we can use this dynamic scope:


// $activeUsers = User:: active() -> get();
// In the code above, we call the "active" scope on the "User" model, which applies the "where('status', 'active')" constraint to the query.The resulting query will retrieve only the active users.

// Dynamic scopes can also accept additional parameters to make them more flexible.Let's extend our example to allow filtering by a specific status:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function scopeStatus($query, $status) {
//         return $query -> where('status', $status);
//     }
// }
// Now we can use the "status" scope to filter users by any status we want:

// $activeUsers = User:: status('active') -> get();
// $inactiveUsers = User:: status('inactive') -> get();
// By passing the status as a parameter to the "status" scope, we can retrieve users with the specified status.

// Dynamic scopes can be very useful for encapsulating common query constraints and making your code more readable and maintainable.They allow you to define reusable filters that can be applied to your queries easily.

// I hope this explanation and examples help you understand dynamic scopes in Laravel's Eloquent ORM. 





