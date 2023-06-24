// 👉One - to - many relationships in Laravel.

// In Laravel, you can define relationships between database tables using Eloquent, Laravel's ORM (Object-Relational Mapping) system. A one-to-many relationship is a common type of relationship where one record in a table is associated with multiple records in another table.

// Let's say we have two tables: users and posts. Each user can have multiple posts, but a post belongs to only one user. We'll create a one - to - many relationship between these two tables.

//     First, let's set up the database tables. We'll assume you already have a Laravel project set up with a configured database connection.

// ✅Create the users table migration:

// php artisan make:migration create_users_table--create = users

// This command will create a new migration file in the database / migrations directory.

// Open the generated migration file and define the up and down methods as follows:


// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateUsersTable extends Migration {
//     public function up() {
//         Schema:: create('users', function (Blueprint $table) {
//             $table -> id();
//             // Add other columns as per your requirements
//             $table -> timestamps();
//         });
//     }

//     public function down() {
//         Schema:: dropIfExists('users');
//     }
// }

// Create the posts table migration:

//✅ php artisan make:migration create_posts_table--create = posts

// Open the generated migration file and define the up and down methods as follows:


// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreatePostsTable extends Migration {
//     public function up() {
//         Schema:: create('posts', function (Blueprint $table) {
//             $table -> id();
//             $table -> unsignedBigInteger('user_id'); // Foreign key column
//             $table -> string('title');
//             $table -> text('content');
//             $table -> timestamps();

//             $table -> foreign('user_id') -> references('id') -> on('users');
//         });
//     }

//     public function down() {
//         Schema:: dropIfExists('posts');
//     }
// }

// ✅Run the migrations to create the tables in the database:

// php artisan migrate

// Now that we have our database structure set up, let's define the Eloquent models and the relationship between them.

// ✅Create the User model:

// php artisan make:model User

// ✅Open the generated User.php file located in the app / Models directory and define the relationship with Post model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     public function posts() {
//         return $this -> hasMany(Post:: class);
//     }
// }

//✅ Create the Post model:

// php artisan make:model Post

//✅ Open the generated Post.php file located in the app / Models directory and define the relationship with User model:


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Post extends Model {
//     public function user() {
//         return $this -> belongsTo(User:: class);
//     }
// }

// With the models and relationships set up, you can now use them to query and retrieve data.



// ✅To retrieve the user associated with a post, you can use the belongsTo relationship defined in the Post model:


// $post = Post:: find(1);
// $user = $post -> user;
// Now, let's look at some additional operations you can perform with one-to-many relationships:

// ✅Creating a new post for a user:


// $user = User:: find(1);
// $post = new Post();
// $post -> title = "New Post Title";
// $post -> content = "New Post Content";
// $user -> posts() -> save($post);

// In this example, we create a new Post instance, set its properties, and then use the save method on the user's posts relationship to save the post and associate it with the user.

//✅ Updating a post for a user:


// $user = User:: find(1);
// $post = $user -> posts() -> find(1);
// $post -> title = "Updated Post Title";
// $post -> content = "Updated Post Content";
// $post -> save();

// In this case, we retrieve a specific post belonging to a user and update its properties.Then, we call the save method to persist the changes to the database.

// ✅Deleting a post for a user:


// $user = User:: find(1);
// $post = $user -> posts() -> find(1);
// $post -> delete ();
// Here, we find a specific post belonging to a user and call the delete method to remove it from the database.







