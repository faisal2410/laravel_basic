/*
👉simplePaginate() Method :

👉 $posts = DB::table('posts')->simplePaginate(10);

        return view('posts.index', compact('posts'));


*/


// The simplePaginate() method is a convenient way to paginate query results in Laravel.It provides a simplified pagination result without the need for a detailed pagination view.It's useful when you want to display paginated results without the additional pagination links, like "previous" and "next" buttons.

// Here's an example of how to use the simplePaginate() method in Laravel:


// use App\Models\User;

// $users = User:: where('active', true)
//     -> orderBy('name')
//     -> simplePaginate(10);

// In this example, we're querying the users table for active users, ordering them by name, and paginating the results with a page size of 10.

// The simplePaginate() method returns an instance of the LengthAwarePaginator class, which provides a few useful methods and properties.For example, you can access the paginated items using the items() method:


// foreach($users -> items() as $user) {
//     echo $user -> name;
// }

// To display the pagination links in your view, you can use the links() method:


// { { $users -> links() } }

// This will render a simple pagination view that only includes the current page number.

// If you want to customize the view used by the simplePaginate() method, you can publish the Laravel pagination views and modify them according to your needs.To do this, run the following command in your terminal:


// php artisan vendor: publish--tag = laravel - pagination

// This will publish the pagination views to the resources / views / vendor / pagination directory, where you can modify the simple - bootstrap - 4.blade.php file or create your own custom view.

// And that's it! You now know how to use the simplePaginate() method in Laravel's query builder to paginate query results without the additional pagination links.Remember, this method is suitable for simpler pagination scenarios where you don't need a more advanced pagination UI.





