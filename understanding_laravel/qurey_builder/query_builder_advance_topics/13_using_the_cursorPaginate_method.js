/*
👉cursorPaginate() method :

👉 $posts = DB::table('posts')
            ->orderBy('id')
            ->cursorPaginate(10);

        return view('posts.index', compact('posts'));


*/



// The cursorPaginate() method is a convenient way to paginate large result sets efficiently using database cursors.It is available in Laravel 7 and above.It allows you to fetch records from a database table in small "chunks" using cursors, rather than loading the entire result set into memory.

//     Here's how you can use cursorPaginate() with code examples:

// Step 1: Setting up the Model
// First, you'll need to have a model that represents the table you want to paginate. Let's assume we have a User model representing the users table.Make sure the model extends the Illuminate\Database\Eloquent\Model class.

// Step 2: Using the cursorPaginate() method
// In your controller or wherever you want to paginate the results, you can use the cursorPaginate() method on the query builder to fetch the paginated records.

  
// use App\Models\User;
// use Illuminate\Http\Request;

// public function index(Request $request) {
//     $perPage = $request -> input('per_page', 10); // Number of records per page

//     $users = User:: query() -> cursorPaginate($perPage);

//     return view('users.index', ['users' => $users]);
// }

// In the example above, we're using the User model to query the users table and calling the cursorPaginate() method to fetch the paginated results. The $perPage variable represents the number of records per page, and we're fetching it from the request using the input() method.

//     Step 3: Displaying the Paginated Results
// In your view file(users.index.blade.php in this case), you can loop through the $users variable to display the paginated results:


// @foreach($users as $user)
// <p>{{ $user-> name}}</p>
// @endforeach

// { { $users -> links() } }

// The links() method generates the pagination links, such as "Previous" and "Next," which you can display at the bottom of the page.

//     That's it! With these steps, you can use the cursorPaginate() method to efficiently paginate large result sets using cursors in Laravel's query builder.

// Please note that cursor pagination is most suitable for scenarios where you're paginating large data sets. If you're dealing with a smaller number of records, you can use the regular paginate() method, which loads the entire result set into memory.





