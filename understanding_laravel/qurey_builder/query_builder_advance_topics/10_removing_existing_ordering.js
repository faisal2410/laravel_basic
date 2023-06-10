/*
👉Removing Existing Ordering :
👉$posts = DB::table('posts')
            ->orderBy('is_published');

        $unorderedPosts = $posts->reorder()->get();              

        dd($unorderedPosts);


👉  $posts = DB::table('posts')
            ->orderBy('is_published');
            
$unorderedPosts = $posts->reorder('title', 'desc')->get();
    dd($unorderedPosts);


*/


// The reorder() method allows you to change the order in which the query results are returned by modifying the ORDER BY clause of the SQL query.

//     Here's an explanation of the reorder() method with some code examples:

// Basic usage:


// $query = DB:: table('users') -> orderBy('name') -> reorder('email');

// In this example, we start with a query that orders the results by the name column.Then, we use the reorder() method to change the ordering to the email column.

// Reordering in descending order:


// $query = DB:: table('users') -> orderBy('name') -> reorder('email', 'desc');

// This example is similar to the previous one, but we pass a second parameter to the reorder() method, indicating that the ordering should be in descending order.

// Combining with other query builder methods:


// $query = DB:: table('users') -> where('status', 'active') -> orderBy('name') -> reorder('email');

// In this example, we combine the reorder() method with the where() method to filter the results by the status column.The reorder() method is called after the orderBy() method to change the ordering.

// Using a subquery for reordering:


// $subquery = DB:: table('orders') -> select('user_id') -> orderBy('created_at', 'desc');

// $query = DB:: table('users') -> whereIn('id', $subquery) -> reorder('email');

// Here, we use a subquery to fetch the latest user_id values from the orders table.Then, we pass the subquery as a parameter to the whereIn() method to filter the results in the users table.Finally, we use the reorder() method to order the results by the email column.

    // That's a brief overview of the reorder() method in the Laravel query builder. It provides flexibility in modifying the ordering of query results, allowing you to adjust it based on your application's needs.Feel free to experiment with different combinations of methods to achieve the desired result in your code.






