// 👉pruning models in Laravel's Eloquent ORM.

// Pruning models refers to removing unnecessary relationships and data from your queries to optimize performance.Let's dive into the steps and code examples.

//     Step 1: Define the Relationships
// To properly prune models, you need to establish relationships between your models using Eloquent's relationship methods such as hasOne, hasMany, belongsTo, etc. These relationships will help Laravel understand how the models are related and enable efficient pruning.

// For example, let's assume we have two models: User and Post. A user can have multiple posts, and a post belongs to a user. In the User model, you would define the relationship as follows:


// class User extends Model {
//     public function posts() {
//         return $this -> hasMany(Post:: class);
//     }
// }
// And in the Post model, you would define the inverse relationship:


// class Post extends Model {
//     public function user() {
//         return $this -> belongsTo(User:: class);
//     }
// }

// Step 2: Lazy Eager Loading
// Laravel provides the concept of lazy eager loading, which allows you to load relationships on an as- needed basis.This helps avoid unnecessary queries and improves performance.Instead of eagerly loading all relationships, you can selectively load the relationships you actually need for a particular use case.

// Let's say you want to retrieve all users and their associated posts. Here's an example of how you can use lazy eager loading to achieve this:


// $users = User:: with ('posts') -> get();
// In this code, with ('posts') specifies that you want to load the posts relationship for each user.The resulting query will fetch all users and their associated posts in an optimized manner.

//     Step 3: Selective Eager Loading
// Sometimes you may only need specific columns from the related models, rather than retrieving all the columns.Laravel allows you to select specific columns when eager loading relationships, further optimizing your queries.

// Continuing with the previous example, let's say you only need the title column from the posts table. Here's how you can achieve selective eager loading:


// $users = User:: with (['posts' => function ($query) {
//     $query -> select('id', 'title');
// }]) -> get();


// In this code, the callback function within with allows you to modify the query for eager loading.Here, we've specified that we only want to select the id and title columns from the posts table.

// Step 4: Querying Specific Columns
// In some cases, you may want to fetch models without loading their relationships at all.For example, if you only need the user information and not their posts.In such scenarios, you can directly query the specific columns you need from the model.

//     Here's an example where we retrieve only the name and email columns from the users table:


// $users = User:: select('name', 'email') -> get();
// By selecting specific columns, you avoid loading unnecessary data, leading to better performance.

//     That's it! By following these steps and utilizing lazy eager loading, selective eager loading, and querying specific columns, you can effectively prune your models in Laravel's Eloquent ORM and optimize your application's performance.

// I hope this explanation and the provided code examples help you understand pruning models in Laravel.If you have any further questions, feel free to ask!






// 👉with the above context please explain```$schedule->command('model:prune')->daily();

// public function prunable():Builder
// {


//     return static::where( 'deleted_at', '<=', now()->subMonth() );
// }```

// Certainly! Let's break down the code snippet and explain its functionality:


// $schedule -> command('model:prune') -> daily();

// This code is part of Laravel's task scheduling feature, which allows you to automate certain tasks to run at specific intervals. In this case, it schedules the command 'model:prune' to run daily. This means that the 'model:prune' command will be executed once every day.

// Now let's move on to the prunable() method:


// public function prunable(): Builder {
//     return static:: where('deleted_at', '<=', now() -> subMonth());
// }


// This method is typically defined within a model class, and it's responsible for defining the query that determines which models should be pruned. In this example, the prunable() method returns a query builder instance (Builder) that filters out models based on the condition where('deleted_at', ' <= ', now()->subMonth()).

// Here's a breakdown of the query condition:

// where('deleted_at', '<=', now() -> subMonth()): This condition filters the models based on the deleted_at column, which is assumed to be a timestamp.It selects models where the deleted_at value is less than or equal to the current date and time minus one month(now() -> subMonth()).
// In essence, the prunable() method retrieves the models that have a deleted_at timestamp older than one month, indicating that they are eligible for pruning.

// By using this method, you can easily retrieve the models that need to be pruned and then perform the necessary operations, such as deleting or archiving them.

//     Finally, when combined with the scheduled task, the 'model:prune' command will be executed daily, and within the command's logic, you can call the prunable() method to retrieve the models and perform the pruning action accordingly.

// I hope this explanation clarifies the purpose and functionality of the provided code.




