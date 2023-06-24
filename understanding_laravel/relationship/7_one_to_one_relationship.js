// 👉 One to One Relationship

// In Laravel, a one - to - one relationship is a type of database relationship where one record in a table is associated with exactly one record in another table.It is commonly used when you have two entities with a unique relationship between them.For example, consider a scenario where you have two tables: users and profiles.Each user has one profile, and each profile belongs to a specific user.

// To establish a one - to - one relationship in Laravel, you'll typically need to define the relationships in your model classes and set up the appropriate foreign key columns in your database schema. Let's go through the steps:

// ✅Database Migration:
// Start by creating the necessary database tables.In this case, you'll have a users table and a profiles table. The users table will have an id column as its primary key, and the profiles table will have an id column as its primary key along with a user_id column as a foreign key referencing the id column of the users table.

// To create the migration files, run the following Artisan command:

// 👌
// php artisan make:migration create_users_table--create = users
// php artisan make:migration create_profiles_table--create = profiles


// Edit the generated migration files to define the table structure.Here's an example:

// 👌
// database/migrations/<timestamp>_create_users_table.php
// Schema:: create('users', function (Blueprint $table) {
//     $table -> id();
//     // ...
//     $table -> timestamps();
// });

// database/migrations/<timestamp>_create_profiles_table.php
// Schema:: create('profiles', function (Blueprint $table) {
//     $table -> id();
//     $table -> foreignId('user_id') -> constrained();
//     // ...
//     $table -> timestamps();
// });


// 👌Run the migrations to create the tables:


// php artisan migrate


//✅ Model Definitions:
// Next, define the relationships in your model classes.In this case, you'll have a User model and a Profile model. Open the respective model files, typically found in the app/Models directory, and define the relationships using Laravel's Eloquent ORM.


// app/Models/User.php
// class User extends Model {
//     // ...

//     public function profile() {
//         return $this -> hasOne(Profile:: class);
//     }
// }

// app/Models/Profile.php
// class Profile extends Model {
//     // ...

//     public function user() {
//         return $this -> belongsTo(User:: class);
//     }
// }


//✅ Retrieving Data:
// Once the relationships are defined, you can easily access related data.Here are a few examples:


// Retrieve a user's profile
// $user = User:: find(1);
// $profile = $user -> profile;

// Retrieve the user associated with a profile
// $profile = Profile:: find(1);
// $user = $profile -> user;
// You can also eager load the relationship to reduce the number of database queries:


// Eager load the profile with the user
// $user = User:: with ('profile') -> find(1);
// $profile = $user -> profile;

// To create a new record with a one - to - one relationship, you'll typically follow these steps:

//✅ Create a User with a Profile:


// Create a new user
// $user = new User;
// $user -> name = 'John Doe';
// $user -> email = 'john@example.com';
// $user -> password = bcrypt('password');
// $user -> save();

// Create a profile for the user
// $profile = new Profile;
// $profile -> user_id = $user -> id;
// $profile -> bio = 'Hello, I am John Doe.';
// $profile -> save();

// In this example, we first create a new User instance and set its attributes.After saving the user, we create a new Profile instance and associate it with the user by setting the user_id foreign key.

// ✅Updating Related Data:

// To update the related data, you can directly modify the attributes of the related model.For example:


// Update the user's profile
// $user = User:: find(1);
// $user -> profile -> bio = 'Updated bio.';
// $user -> profile -> save();
// In this example, we retrieve the user and update the bio attribute of their associated profile.

// ✅Deleting Related Data:

// When deleting a record with a one - to - one relationship, you have the option to delete the related data as well.In Laravel, you can define this behavior using cascading deletes in your database schema or by manually deleting the related model.


// Delete a user and their associated profile
// $user = User:: find(1);
// $user -> profile -> delete ();
// $user -> delete ();
// In this example, we delete the profile associated with a user before deleting the user itself.

// That covers the basics of establishing a one - to - one relationship in Laravel, including creating, retrieving, updating, and deleting related data.Remember to adjust the code examples based on your specific table and model names.


// ✅Inverse Relationship:
// In Laravel's one-to-one relationships, you can define an inverse relationship on the related model. This allows you to access the parent model from the child model. In our example, the Profile model has a belongsTo relationship with the User model, indicating that a profile belongs to a user.


// app/Models/Profile.php
// class Profile extends Model {
//     // ...

//     public function user() {
//         return $this -> belongsTo(User:: class);
//     }
// }
// With this inverse relationship defined, you can retrieve the user associated with a profile:


// $profile = Profile:: find(1);
// $user = $profile -> user;


// ✅Accessors and Mutators:
// Laravel allows you to define accessors and mutators on your model to manipulate data when it is accessed or set.This can be useful for formatting or performing calculations on your model's attributes. Let's consider an example where we want to capitalize the name attribute when accessing it:


// app/Models/User.php
// class User extends Model {
//     // ...

//     public function getNameAttribute($value) {
//         return ucfirst($value);
//     }
// }
// In this case, we define an accessor method called getNameAttribute, which automatically applies the ucfirst function to the name attribute when it is accessed:


// $user = User:: find(1);
// $name = $user -> name; // The name will be capitalized (e.g., "John")


// ✅Constraints and Soft Deletes:
// Laravel provides additional functionality for handling constraints and soft deletes in one - to - one relationships.You can add constraints to the foreign key relationship to ensure data integrity.For example, you can set the onDelete property to CASCADE in the migration file to automatically delete the associated profile when a user is deleted.


// database/migrations/<timestamp>_create_profiles_table.php
// Schema:: create('profiles', function (Blueprint $table) {
//     $table -> id();
//     $table -> foreignId('user_id')
//         -> constrained()
//         -> onDelete('cascade');
//     // ...
//     $table -> timestamps();
// });

// Additionally, if you're using soft deletes (where records are not permanently deleted but marked as deleted), you can include the SoftDeletes trait in your model and apply soft deletes to the relationship.


// app/Models/User.php
// use Illuminate\Database\Eloquent\SoftDeletes;

// class User extends Model {
//     use SoftDeletes;

//     // ...
// }
// With soft deletes enabled, when you delete a user, the associated profile will be soft deleted as well.

// These are some additional aspects to consider when working with one - to - one relationships in Laravel.Understanding these concepts will help you build more robust and efficient applications.



// ✅Eager Loading Constraints:
// When eager loading a one - to - one relationship, you can apply constraints to the eager loading query to filter the related records.This can be useful when you only want to retrieve specific related records based on certain conditions.Here's an example:


// Retrieve users and their profiles where the user's role is 'admin'
// $users = User:: with (['profile' => function ($query) {
//     $query -> where('role', 'admin');
// }]) -> get();

// In this example, we eager load the profile relationship for User models, but only load the profiles where the role is 'admin'.This helps optimize the query and retrieve only the necessary related records.

// ✅Relationship Methods in Query Builder:
// Laravel allows you to use relationship methods directly in query builder queries.This can be handy when you want to filter or sort records based on related data.For instance, let's retrieve all users sorted by their associated profile's created date:


// $users = User:: with ('profile') -> orderBy('profile.created_at') -> get();
// By using the relationship method profile in the orderBy clause, we can sort the users based on the created date of their associated profile.

// ✅Polymorphic One - to - One Relationships:
// Laravel also supports polymorphic one - to - one relationships, where a model can be associated with multiple models on a one - to - one basis.This can be useful when a single model can have different types of associated models.To define a polymorphic one - to - one relationship, you'll need to use the morphOne and morphTo methods in your model definitions.


// app/Models/Photo.php
// class Photo extends Model {
//     // ...

//     public function imageable() {
//         return $this -> morphTo();
//     }
// }

// app/Models/User.php
// class User extends Model {
//     // ...

//     public function photo() {
//         return $this -> morphOne(Photo:: class, 'imageable');
//     }
// }

// app/Models/Post.php
// class Post extends Model {
//     // ...

//     public function photo() {
//         return $this -> morphOne(Photo:: class, 'imageable');
//     }
// }
// In this example, both the User and Post models can have a polymorphic one - to - one relationship with the Photo model through the imageable method.

// These additional aspects provide further flexibility and functionality when working with one - to - one relationships in Laravel.They enable you to optimize queries, filter related records, and establish polymorphic relationships.





















