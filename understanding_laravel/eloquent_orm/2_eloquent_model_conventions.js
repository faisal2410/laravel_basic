// Eloquent is the default ORM(Object - Relational Mapping) provided by Laravel, which allows you to interact with your database tables using PHP objects.

// Before we dive into the conventions, let's make sure you have a basic understanding of Laravel and its directory structure. Laravel follows the MVC (Model-View-Controller) pattern, where models represent the data layer of your application.

// To create a new Eloquent model, you can use the make:model Artisan command or manually create a new PHP file in the app / Models directory.By convention, model names are singular and use PascalCase.For example, if you have a table named "users," you would typically name the model "User."

// Here's an example of creating a User model using the make:model command:


// php artisan make:model User
// This will create a new User model file in the app / Models directory.

// Once you have your model created, it's time to define its properties and relationships. Let's start with the properties.By convention, Eloquent assumes that the table associated with a model has a singular, snake_case name that matches the model's name. If your table name differs from this convention, you can specify it explicitly by setting the $table property in your model.

// Here's an example of a User model with some properties defined:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $table = 'my_users'; // Explicitly specify the table name if it differs from the convention

//     protected $fillable = ['name', 'email', 'password']; // Specify the mass-assignable fields

//     // ...
// }

// In the example above, we set the $table property to 'my_users' to explicitly specify the table name as "my_users." We also define the $fillable property to indicate which attributes can be mass - assigned when using the create or update methods.In this case, we allow mass assignment for the name, email, and password attributes.

//     Next, let's talk about relationships between models. Eloquent provides various types of relationships such as one-to-one, one-to-many, many-to-many, etc. These relationships are defined through methods in your model class.

// Here's an example of a User model with a one-to-many relationship with a Post model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function posts() {
//         return $this -> hasMany(Post:: class);
//     }
// }

// In the example above, we define a posts method that uses the hasMany relationship method to define a one - to - many relationship with the Post model.The hasMany method takes the related model class as an argument.

// You can then access the related posts of a user instance using the posts dynamic property.For example:


// $user = User:: find(1);
// $posts = $user -> posts;

// This will retrieve all the posts associated with the user with an ID of 1.

// These are just some of the Eloquent model conventions in Laravel.Eloquent provides many more features and conventions to help you work with your database tables effortlessly.



// Here are some more Eloquent model conventions in Laravel, along with code examples:

// Primary Key Convention:
// By convention, Eloquent assumes that the primary key column in your database table is named id.If your table uses a different column name for the primary key, you can specify it in your model by setting the $primaryKey property.

//     Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $primaryKey = 'user_id'; // Specify the primary key column name

//     // ...
// }

// Timestamps Convention:

// Eloquent assumes that your database table has created_at and updated_at columns to automatically track the creation and modification timestamps of records.By default, Eloquent will manage these columns for you.

// If you want to disable the automatic management of timestamps or use different column names, you can set the $timestamps and $dateFormat properties in your model.

//     Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     public $timestamps = false; // Disable automatic timestamp management

//     // OR

//     const CREATED_AT = 'creation_date'; // Specify a different column name for the created_at timestamp
//     const UPDATED_AT = 'last_updated'; // Specify a different column name for the updated_at timestamp

//     // ...
// }

// Soft Deletes Convention:
// Soft deletes allow you to "softly" delete records by marking them as deleted instead of permanently removing them from the database.Eloquent provides built -in support for soft deletes through the SoftDeletes trait.

// To use soft deletes in your model, you need to add the SoftDeletes trait and specify the $dates property to include the column name for the deleted_at timestamp.

//     Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

// class User extends Model {
//     use SoftDeletes;

//     protected $dates = ['deleted_at']; // Specify the column name for the deleted_at timestamp

//     // ...
// }

// Once you have enabled soft deletes in your model, you can "delete" a record by calling the delete method, and Eloquent will update the deleted_at column with the current timestamp.You can also restore soft - deleted records using the restore method.

// Accessors and Mutators:
// Eloquent provides accessors and mutators to manipulate attribute values when retrieving or setting them.By convention, you can define an accessor or mutator method by prefixing the attribute name in CamelCase with the words get or set.

//     Here's an example of defining an accessor and mutator for the name attribute in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function getNameAttribute($value) {
//         return ucfirst($value); // Convert the name to uppercase when accessing it
//     }

//     public function setNameAttribute($value) {
//         $this -> attributes['name'] = strtolower($value); // Convert the name to lowercase when setting it
//     }
// }

// In the example above, the getNameAttribute method is an accessor that modifies the name attribute value before it is accessed.In this case, it converts the name to uppercase.The setNameAttribute method is a mutator that modifies the name attribute value before it is set.In this case, it converts the name to lowercase.

// By following this convention, Eloquent will automatically use these accessor and mutator methods when accessing or setting the name attribute.

// These are a few more Eloquent model conventions in Laravel.The framework






// Model Factories:

// Model factories allow you to generate fake data for your models, which is especially useful during development and testing.By convention, you can define model factories using the Factory class in Laravel's database/factories directory.

// Here's an example of defining a model factory for the User model:


// namespace Database\Factories;

// use App\Models\User;
// use Illuminate\Database\Eloquent\Factories\Factory;

// class UserFactory extends Factory {
//     protected $model = User:: class;

//     public function definition() {
//         return [
//             'name' => $this -> faker -> name,
//             'email' => $this -> faker -> unique() -> safeEmail,
//             'password' => bcrypt('password'),
//         ];
//     }
// }

// In the example above, we define a UserFactory class that extends Laravel's Factory class. We set the $model property to the User model class. The definition method is used to define the default attributes and their corresponding fake values using the faker instance.

// To use the factory and generate fake user data, you can call the User factory in your tests or database seeders:


// use App\Models\User;

// $user = User:: factory() -> create();

// This will create a new user using the defined factory with random fake values for the attributes.

// Accessing Related Models:

// When defining relationships between models, Eloquent provides convenient methods to access related models.By convention, you can use the relationship name as a dynamic property to access the related model or models.

// Here's an example of accessing related models in a Post model that has a one-to-many relationship with a Comment model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Post extends Model {
//     // ...

//     public function comments() {
//         return $this -> hasMany(Comment:: class);
//     }
// }

// To retrieve the comments associated with a post, you can access the comments dynamic property:


// $post = Post:: find(1);
// $comments = $post -> comments;
// You can also chain methods to further refine the query:


// $comments = $post -> comments() -> where('approved', true) -> get();
// This will retrieve only the approved comments associated with the post.

// Query Scopes:

// Query scopes allow you to define reusable query constraints on your models.By convention, you can prefix a method name with scope to define a query scope in your model.

//     Here's an example of defining a query scope in a Product model to retrieve products that are currently in stock:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Product extends Model {
//     // ...

//     public function scopeInStock($query) {
//         return $query -> where('stock', '>', 0);
//     }
// }

// To use the query scope, you can call the method as if it were a static method on the model:


// $products = Product:: inStock() -> get();
// This will retrieve all products that have a stock quantity greater than 0.

// These are a few more Eloquent model conventions in Laravel.The framework provides many additional features and conventions that can greatly simplify working with databases in your Laravel applications.


// Here are a few more Eloquent model conventions in Laravel, along with code examples:

// Table Column Names Convention:
// By convention, Eloquent assumes that your table's column names follow the snake_case naming convention. For example, a column representing the user's birth date would typically be named birth_date.Eloquent will automatically map these column names to the corresponding model attributes.

// If your table column names differ from this convention, you can explicitly define the attribute - to - column mappings using the $casts property in your model.

//     Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $casts = [
//         'birthDate' => 'date', // Map the 'birthDate' attribute to the 'birth_date' column
//         'isActive' => 'boolean', // Map the 'isActive' attribute to the 'is_active' column
//     ];

//     // ...
// }

// In the example above, we define the $casts property to explicitly map the birthDate attribute to the birth_date column and the isActive attribute to the is_active column.

// Customizing Model Table Names:
// By convention, Eloquent assumes that the table name associated with a model is the plural, snake_case version of the model's name. For example, if you have a User model, Eloquent will assume that the corresponding table is named users.

// If your table name differs from this convention, you can explicitly specify the table name by setting the $table property in your model.

//     Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $table = 'my_custom_users'; // Specify the custom table name

//     // ...
// }

// In the example above, we set the $table property to 'my_custom_users' to explicitly specify the custom table name as "my_custom_users" for the User model.

// Model Events:
// Eloquent provides model events that allow you to hook into various stages of a model's lifecycle, such as creating, updating, deleting, and retrieving. By convention, you can define event handlers as methods in your model, prefixed with the event name in CamelCase.

// Here's an example of defining an event handler for the creating event in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected static function boot() {
//         parent:: boot();

//         static:: creating(function ($user) {
//             // Perform custom logic before creating the user
//         });
//     }

//     // ...
// }

// In the example above, we override the boot method in the User model to register an event handler for the creating event.Within the event handler, you can perform custom logic before the user is created.

// You can define event handlers for other events like created, updating, updated, deleting, deleted, and more.

// Model Serialization:
// Eloquent models can be easily serialized to JSON or array representations.By convention, you can specify the model attributes that should be included in the serialized output using the $visible and $hidden properties.


//  here's an example of model serialization in Laravel:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model
// {
//     protected $visible = ['name', 'email']; // Specify the visible attributes

//     protected $hidden = ['password']; // Specify the hidden attributes

//     // ...
// }

// In the example above, the $visible property is used to specify the attributes that should be included in the serialized output, while the $hidden property is used to specify the attributes that should be excluded.

// When you convert the model to JSON or an array, only the visible attributes will be included by default:


// $user = User::find(1);

// $json = $user->toJson(); // Serialize the model to JSON (only includes visible attributes)
// $array = $user->toArray(); // Convert the model to an array (only includes visible attributes)
// To include the hidden attributes in the serialized output, you can use the makeVisible method:


// $user = User::find(1);

// $user->makeVisible('password'); // Make the hidden 'password' attribute visible

// $json = $user->toJson(); // Serialize the model to JSON (includes visible and previously hidden attributes)
// $array = $user -> toArray(); // Convert the model to an array (includes visible and previously hidden attributes)

// This allows you to control which attributes are included or excluded when serializing your models.

// Model Validation:
// Eloquent models can define validation rules to ensure that the data being saved meets certain criteria. By convention, you can define validation rules using the $rules property or by implementing the getRules method in your model.

// Here's an example using the $rules property:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model
// {
//     protected $rules = [
//         'name' => 'required|string',
//         'email' => 'required|email|unique:users',
//         'password' => 'required|min:8',
//     ];

//     // ...
// }

// In the example above, we define the validation rules for the name, email, and password attributes. These rules specify that the name attribute is required and must be a string, the email attribute is required, must be a valid email, and must be unique in the users table, and the password attribute is required and must have a minimum length of 8 characters.

// To validate a model instance, you can use the validate method:


// $user = new User([
//     'name' => 'John Doe',
//     'email' => 'john@example.com',
//     'password' => 'secret123',
// ]);

// $user->validate(); // Validate the model against the defined rules

// If the validation fails, an exception will be thrown with the validation error messages.

// Customizing Model Timestamps Format:
// By default, Eloquent uses the Y-m-d H:i:s format for the created_at and updated_at timestamps. However, you can customize the format by setting the $dateFormat property in your model.

// Here's an example:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model
// {
//     protected $dateFormat = 'U'; // Customize the timestamp format

//     // ...
// }
// In the example above, we set the $dateFormat property to 'U', which represents a Unix timestamp format. You can use any valid date format supported by PHP's date function.

// This allows you to customize the format in which the timestamps



// Customizing Model Relationships:

// Eloquent provides various methods to define relationships between models, such as belongsTo, hasMany, hasOne, and more.By convention, you can customize the relationship by specifying additional arguments or options.

//     Here's an example of customizing a relationship in a Post model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Post extends Model {
//     // ...

//     public function comments() {
//         return $this -> hasMany(Comment:: class) -> orderBy('created_at', 'desc');
//     }
// }

// In the example above, we define a comments relationship in the Post model using hasMany.By adding -> orderBy('created_at', 'desc'), we customize the relationship to always retrieve comments in descending order based on the created_at timestamp.

// You can further customize relationships by specifying foreign keys, local keys, and pivot table names, depending on the type of relationship.

// Model Accessors and Mutators for JSON:
// When serializing models to JSON, Eloquent provides accessors and mutators specifically for JSON attributes.By convention, you can define these methods using the get{ AttributeName }Attribute and set{ AttributeName }Attribute naming conventions.

//     Here's an example of defining JSON accessors and mutators in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function getMetaAttribute($value) {
//         return json_decode($value, true); // Decode the JSON value
//     }

//     public function setMetaAttribute($value) {
//         $this -> attributes['meta'] = json_encode($value); // Encode the value as JSON
//     }
// }

// In the example above, we define an accessor getMetaAttribute that decodes the JSON value stored in the meta attribute.We also define a mutator setMetaAttribute that encodes the value as JSON before storing it in the attribute.

// When accessing the meta attribute, Eloquent will automatically call the accessor to provide the decoded JSON value:


// $user = User:: find(1);
// $meta = $user -> meta; // Decoded JSON value
// Similarly, when setting the meta attribute, Eloquent will automatically call the mutator to encode the value as JSON:


// $user = User:: find(1);
// $user -> meta =['age' => 25, 'location' => 'New York']; // Value will be stored as encoded JSON
// $user -> save();

// These conventions allow you to easily work with JSON attributes in your Eloquent models.

// Model Observers:
// Eloquent provides model observers that allow you to listen for specific events on your models and perform actions in response.By convention, you can define observer methods in an observer class based on the event name and the model class.

// Here's an example of defining an observer for a User model:


// namespace App\Observers;

// use App\Models\User;

// class UserObserver {
//     public function created(User $user) {
//         // Perform actions when a user is created
//     }

//     public function updating(User $user) {
//         // Perform actions when a user is updating
//     }
// }
// In the example above, we define an observer class UserObserver with methods created and updating.These methods will be called when a User model is created and updated, respectively.

// To associate the observer with the model, you can register it in the boot method of your AppServiceProvider or any other service provider:


// namespace App\Providers;

// use App\Models\User;
// use App\Observers\UserObserver;
// use Illuminate\Support\ServiceProvider;

// class AppServiceProvider extends ServiceProvider {
//     public function boot() {
//         User:: observe(UserObserver:: class);
//     }

//     // ...
// }

// In the example above, we register the UserObserver to observe the User model by calling the observe method on the User model and passing the observer class as an argument.

//     Now, whenever a User model is created or updated, the corresponding observer methods(created and updating) will be called automatically.

// Observers provide a convenient way to centralize and organize the logic associated with model events.

// Soft Deletes:
// Laravel's Eloquent provides a soft delete feature, allowing you to mark records as "deleted" without actually removing them from the database. By convention, you can enable soft deletes on a model by using the SoftDeletes trait and defining the $dates property.

// Here's an example of using soft deletes in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

// class User extends Model {
//     use SoftDeletes;

//     protected $dates = ['deleted_at'];

//     // ...
// }

// In the example above, we use the SoftDeletes trait in the User model to enable soft deletes.We also specify the deleted_at column as a date attribute by adding it to the $dates property.

// Once soft deletes are enabled, you can delete a record by calling the delete method on the model:


// $user = User:: find(1);
// $user -> delete (); // Soft delete the user record

// The delete method will set the deleted_at column to the current timestamp, indicating that the record has been "soft deleted".

// To retrieve soft - deleted records, you can use the withTrashed method:


// $users = User:: withTrashed() -> get(); // Retrieve all users, including soft-deleted ones
// To restore a soft - deleted record, you can use the restore method:


// $user = User:: withTrashed() -> find(1);
// $user -> restore(); // Restore the soft-deleted user record

// These conventions make it easy to handle soft deletes in your Laravel application.

// These are a few more Eloquent model conventions in Laravel.The framework provides many additional features and conventions that can greatly simplify working with databases in your Laravel applications.


// Polymorphic Relations:
// Eloquent supports polymorphic relations, which allow a model to belong to multiple other models on a single association.By convention, you can define polymorphic relationships using the morphTo, morphMany, and morphOne methods.

//     Here's an example of a polymorphic relationship in a Comment model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Comment extends Model {
//     public function commentable() {
//         return $this -> morphTo();
//     }
// }

// In the example above, the Comment model has a polymorphic relationship called commentable, which can be associated with any other model in the application.

// To define the inverse side of the relationship in the associated models, you can use the morphMany or morphOne methods.For example, in a Post model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Post extends Model {
//     public function comments() {
//         return $this -> morphMany(Comment:: class, 'commentable');
//     }
// }

// In this example, the Post model has a comments relationship using morphMany, indicating that a post can have multiple comments.

// Polymorphic relations provide flexibility when dealing with multiple models sharing a common association.

// Defining Custom Accessors and Mutators:
// Eloquent allows you to define custom accessors and mutators for model attributes.By convention, you can create accessor methods by prefixing get to the attribute name in CamelCase, and mutator methods by prefixing set to the attribute name in CamelCase.

//     Here's an example of defining custom accessors and mutators in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     public function getFullNameAttribute() {
//         return $this -> first_name. ' '.$this -> last_name;
//     }

//     public function setPhoneNumberAttribute($value) {
//         $this -> attributes['phone_number'] = formatPhoneNumber($value);
//     }
// }

// In the example above, we define a custom accessor getFullNameAttribute that returns the full name by concatenating the first_name and last_name attributes.We also define a mutator setPhoneNumberAttribute that formats and sets the phone_number attribute.

// Custom accessors and mutators provide a convenient way to transform attribute values when retrieving or setting them on a model.

// Model Factories:
// Laravel provides model factories, which allow you to generate fake data for testing or seeding the database.By convention, you can define model factories in the database / factories directory.

//     Here's an example of a model factory for the User model:


// namespace Database\Factories;

// use App\Models\User;
// use Illuminate\Database\Eloquent\Factories\Factory;

// class UserFactory extends Factory {
//     protected $model = User:: class;

//     public function definition() {
//         return [
//             'name' => $this -> faker -> name,
//             'email' => $this -> faker -> unique() -> safeEmail,
//             'password' => bcrypt('password123'),
//         ];
//     }
// }

// In the example above, we define a UserFactory class that extends the Factory class provided by Laravel.The definition method defines the attributes and their values for generating a fake user.

// You can then use the factory to create instances of the model in tests or seeders:


// $user = User:: factory() -> create(); // Create a single user
// $users = User:: factory() -> count(10) -> create(); // Create 10 users

// $user = User:: factory() -> make(); // Create a single user instance without saving to the database
// $users = User:: factory() -> count(10) -> make(); // Create 10 user instances without saving to the database

// Model factories provide a convenient way to generate test data or seed the database with dummy records.

// Query Scopes:
// Query scopes allow you to encapsulate commonly used query constraints into reusable methods on your model.By convention, you can define query scopes by prefixing the method name with scope.

//     Here's an example of defining a query scope in a Post model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Post extends Model {
//     // ...

//     public function scopePublished($query) {
//         return $query -> where('published', true);
//     }
// }

// In the example above, we define a query scope published that adds a constraint to retrieve only published posts.

// You can then use the query scope to simplify your queries:


// $publishedPosts = Post:: published() -> get(); // Retrieve only published posts
// Query scopes allow you to encapsulate common query constraints and reuse them across your application.

// Model Events:
// Eloquent provides various events that allow you to hook into different points of the model's lifecycle. By convention, you can define event listeners in your model using the creating, created, updating, updated, deleting, and deleted methods.

// Here's an example of using model events in a User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     // ...

//     protected static function booted() {
//         static:: creating(function ($user) {
//             // Perform actions before creating a user
//         });

//         static:: created(function ($user) {
//             // Perform actions after a user is created
//         });

//         static:: updating(function ($user) {
//             // Perform actions before updating a user
//         });

//         static:: updated(function ($user) {
//             // Perform actions after a user is updated
//         });

//         static:: deleting(function ($user) {
//             // Perform actions before deleting a user
//         });

//         static:: deleted(function ($user) {
//             // Perform actions after a user is deleted
//         });
//     }
// }


// In the example above, we define event listeners for the creating, created, updating, updated, deleting, and deleted events.You can add custom actions to be executed at each of these points in the model's lifecycle.

// Model events provide a way to hook into and respond to specific actions performed on the model.

// These are some additional Eloquent model conventions in Laravel.The framework offers many more features and conventions to make working with models and databases efficient and convenient.














































