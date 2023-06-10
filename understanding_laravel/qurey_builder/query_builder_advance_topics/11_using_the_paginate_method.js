/*
👉 Pagination is a technique that allows us to divide a large set of data
into smaller chunks of pages.

👉 Paginate Method:
👉$posts = DB::table( 'posts' )->paginate( 10 );
  dd($posts);

👉 $posts = DB::table( 'posts' )->paginate( 10, ['*'], 'p', 1 );
dd($posts);

👉 $posts = DB::table( 'posts' )->paginate( 10, ['*'], 'p', 1 );

   return view( 'posts.index', compact( 'posts' ) );
   
👉 $posts = DB::table( 'posts' )->paginate( 10);

   return view( 'posts.index', compact( 'posts' ) );

*/


// The paginate() method is a convenient way to retrieve a paginated set of results from a database query using Laravel's query builder. It allows you to split the results into multiple pages, making it easier to handle large datasets. Here's how you can use it:

// Start by constructing your initial query using the query builder methods(select(), from(), where(), etc.).Here's an example:

// use Illuminate\Support\Facades\DB;

// $results = DB:: table('users')
//     -> select('id', 'name', 'email')
//     -> where('status', 'active')
//     -> orderBy('name', 'asc')
//     -> paginate(10); // 10 results per page

// In this example, we're querying the users table, selecting the id, name, and email columns. We're filtering the results to only include active users, ordering them by name in ascending order, and then paginating the results with 10 results per page.

// Once you've defined your query, you can use the paginate() method to retrieve the paginated results. This method returns an instance of the LengthAwarePaginator class, which contains the results as well as additional pagination information. Here's an example of how you can access and iterate over the paginated results:

// foreach($results as $user) {
//     echo $user -> name;
// }

// In this loop, we're accessing the name property of each user in the paginated results.

// You can also access additional pagination information provided by the LengthAwarePaginator class. Some common methods you might find useful include currentPage(), lastPage(), total(), and perPage().Here's an example of how to use them:

// echo "Current Page: ".$results -> currentPage(); // Get the current page number
// echo "Last Page: ".$results -> lastPage(); // Get the last page number
// echo "Total Results: ".$results -> total(); // Get the total number of results
// echo "Results Per Page: ".$results -> perPage(); // Get the number of results per page

// These methods allow you to access information about the pagination state and adjust your application's UI or logic accordingly.

// That's the basic usage of the paginate() method in Laravel's query builder.Remember to replace 'users' with the name of your actual table and adjust the query builder methods as needed to suit your specific requirements.








