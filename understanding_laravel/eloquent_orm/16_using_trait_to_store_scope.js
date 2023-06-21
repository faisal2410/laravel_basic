//  Laravel Eloquent ORM and how to use traits to store scopes.Laravel provides a powerful ORM called Eloquent that allows you to interact with your database tables using an expressive and intuitive syntax.Scopes in Eloquent allow you to define reusable query constraints that can be applied to your models.

// Before we dive into traits and scopes, make sure you have Laravel installed and set up.Once you're ready, let's get started!

// Step 1: Creating a Trait
// To store scopes in a trait, we'll start by creating a new PHP file. Let's call it ScopesTrait.php.In this file, we'll define our trait and its methods. The trait will be responsible for encapsulating our reusable scopes.


// // ScopesTrait.php

// namespace App\Traits;

// trait ScopesTrait
// {
//     // Define your scopes here
//     public function scopePublished($query) {
//         return $query -> where('published', true);
//     }

//     public function scopeByAuthor($query, $authorId) {
//         return $query -> where('author_id', $authorId);
//     }

//     // Add more scopes as needed
// }
// In this example, we've defined two scopes: scopePublished and scopeByAuthor. The scopePublished scope adds a constraint to filter only published records, and the scopeByAuthor scope filters records by a specific author ID. You can add more scopes based on your application's needs.

//     Step 2: Using the Trait in a Model
// Once you have your trait defined, you can easily use it in your Eloquent models.Let's say we have a Post model. Here's an example of how to use the ScopesTrait in the Post model:


// // Post.php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use App\Traits\ScopesTrait;

// class Post extends Model {
//     use ScopesTrait;

//     // Your model's properties, relationships, etc.
// }
// By adding use ScopesTrait in your model, you include all the methods defined in the ScopesTrait into your Post model.Now you can directly call the scopes on your Post model instance or query builder.

//     Step 3: Using Scopes in Queries
// With the trait included in your model, you can now use the scopes in your queries.Here's an example:


// $publishedPosts = Post:: published() -> get();
// In this example, we use the published scope to fetch all published posts.The published scope defined in the ScopesTrait will add the necessary constraint to the query.

// You can also chain multiple scopes together:


// $authorPosts = Post:: published() -> byAuthor(1) -> get();
// In this case, we first apply the published scope and then chain the byAuthor scope to filter the posts by author ID 1.

// That's it! You've learned how to create a trait to store scopes and use them in Laravel Eloquent ORM.Traits provide a clean and reusable way to organize and share scopes among multiple models.

//     Remember, scopes are just one aspect of Laravel Eloquent ORM.There are many other powerful features and functionalities available.I encourage you to explore the Laravel documentation for more details and examples.

// Happy coding!





