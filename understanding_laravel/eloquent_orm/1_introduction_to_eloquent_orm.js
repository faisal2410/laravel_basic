//  Eloquent is Laravel's built-in Object-Relational Mapping (ORM) tool that allows you to work with your database records using an intuitive and expressive syntax. It simplifies database interactions by providing a fluent and convenient way to query and manipulate data.

// To get started with Eloquent ORM in Laravel, follow these steps:

// Step 1: Set Up Database Configuration
// First, you need to configure your database connection in Laravel.Open the.env file in the root of your Laravel project and update the database settings according to your setup.Set the DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD values accordingly.

//     Step 2: Create a Model
// In Laravel, each table in your database typically has a corresponding model.Models represent database tables and encapsulate the logic to interact with them.To create a model, you can use the make:model Artisan command.For example, to create a model for a users table, run the following command in your terminal:


// php artisan make:model User
// This will create a User model file in the app directory.

//     Step 3: Define Model Relationships(Optional)
// If your database tables have relationships, such as one - to - one, one - to - many, or many - to - many, you can define those relationships in your models.Eloquent provides methods to define these relationships, such as hasOne, hasMany, belongsTo, belongsToMany, etc.You'll need to specify the foreign keys and other necessary details in these relationships.

// Step 4: Querying the Database
// Eloquent provides a fluent query builder that allows you to perform various database operations easily.Here are some commonly used methods:

// Retrieving All Records:

// $users = User:: all();

// Retrieving a Single Record by Primary Key:

// $user = User:: find(1);

// Querying with Conditions:


// $users = User:: where('age', '>', 18)
//     -> orderBy('name')
//     -> get();


// Creating a New Record:


// $user = new User;
// $user -> name = 'John Doe';
// $user -> email = 'john@example.com';
// $user -> save();

// Updating an Existing Record:


// $user = User:: find(1);
// $user -> name = 'Jane Doe';
// $user -> save();

// Deleting a Record:


// $user = User:: find(1);
// $user -> delete ();

// Step 5: Accessing Relationships

// Once you have defined relationships in your models, you can easily access related records.Here are some examples:

// Accessing One - to - One Relationship:


// class User extends Model {
//     public function phone() {
//         return $this -> hasOne(Phone:: class);
//     }
// }

// $user = User:: find(1);
// $phone = $user -> phone;

// Accessing One - to - Many Relationship:


// class User extends Model {
//     public function posts() {
//         return $this -> hasMany(Post:: class);
//     }
// }

// $user = User:: find(1);
// $posts = $user -> posts;

// Accessing Many - to - Many Relationship:


// class User extends Model {
//     public function roles() {
//         return $this -> belongsToMany(Role:: class);
//     }
// }

// $user = User:: find(1);
// $roles = $user -> roles;



// Step 6: Additional Eloquent Features
// Eloquent provides several additional features that can help simplify your database operations:

// Mass Assignment:
// You can use the create method to create a new record with multiple attributes at once:


// $user = User:: create([
//     'name' => 'John Doe',
//     'email' => 'john@example.com',
// ]);


// Query Scopes:
// Query scopes allow you to define reusable query constraints in your models.You can define a scope as a method in your model and chain it with other query methods:


// class User extends Model {
//     public function scopePopular($query) {
//         return $query -> where('votes', '>', 100);
//     }
// }

// $users = User:: popular() -> get();


// Accessors and Mutators:
// Accessors allow you to modify attribute values when retrieving them, while mutators allow you to modify attribute values before saving them to the database:


// class User extends Model {
//     public function getNameAttribute($value) {
//         return ucfirst($value);
//     }

//     public function setEmailAttribute($value) {
//         $this -> attributes['email'] = strtolower($value);
//     }
// }

// $user = User:: find(1);
// echo $user -> name; // Output: John
// $user -> email = 'JOHN@example.com';
// $user -> save();

// These are just a few examples of what you can do with Eloquent ORM in Laravel.It provides many more features like eager loading, pagination, events, and more.You can refer to the Laravel documentation on Eloquent ORM for more detailed information and examples: https://laravel.com/docs/eloquent











