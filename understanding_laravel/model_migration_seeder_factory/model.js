/*
In Laravel, a model represents a specific table in your database and provides an abstraction layer for interacting with that table's records. Models allow you to perform common database operations such as retrieving, creating, updating, and deleting records, as well as defining relationships between different tables.

To create a model in Laravel, you can use the Artisan command php artisan make:model. For example, let's say you have a table named users in your database. You can create a corresponding model named User by running the following command:


php artisan make:model User
This command will generate a new User model file under the app directory.

Once you have created a model, you can define its properties and methods to interact with the associated database table.

Here's an example of a User model with some common features:


<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users'; // Specify the table associated with the model

    protected $fillable = ['name', 'email', 'password']; // Specify the fields that are mass assignable

    // Define relationships with other models
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    // Define custom methods to perform operations on the User model
    public function getFullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}
Let's break down the important parts of this example:

The User model extends the base Model class provided by Laravel. This gives you access to various methods and features for interacting with the database.

The protected $table property specifies the name of the database table associated with the model. In this case, it is set to 'users'.

The protected $fillable property defines an array of fields that are mass assignable. These fields can be set using the create() or update() methods. In this example, we allow the 'name', 'email', and 'password' fields to be mass assignable.

The public function posts() method defines a relationship between the User model and another model called Post. In this case, it represents a one-to-many relationship where a user can have multiple posts. This method uses the hasMany() method provided by Laravel's Eloquent ORM.

The public function getFullName() method is a custom method defined on the User model. It can be used to perform operations specific to the user model, such as retrieving the full name of a user.

With the User model defined, you can now perform various operations on the associated users table. Here are some examples:


// Retrieve all users
$users = User::all();

// Create a new user
$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('password123'),
]);

// Update a user's name
$user = User::find(1);
$user->name = 'New Name';
$user->save();

// Delete a user
$user = User::find(1);
$user->delete();
In the examples above, we use static methods such as all(), create(), and find() provided by the User model to perform common database operations. Additionally, we can access relationships and custom methods defined on the model, such as $user->posts() or $user->getFullName().

Models in Laravel provide a powerful and convenient way to interact with your database tables.
*/ 