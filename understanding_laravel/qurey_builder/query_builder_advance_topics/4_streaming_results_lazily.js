/*

👉 Streaming Results Lazily :

👉The lazy() method is used to retrieve a large number of records without overwhelming
the server's memory
👉The lazyById() method is quite similar to the lazy() method, but it's used to retrieve
a single record by its id.


Next to chunking data in Laravel, you are also able to lazy load data when working with large datasets in Laravel.

It's important to have efficient ways of retrieving and processing data.

One common issue that developers face is memory exhaustion caused by loading too much data into memory at once.

Laravel provides two methods that can help you with this issue, which is the lazy() method and the lazilyById()

Let's start off with the lazy() method.

The lazy() method is used to retrieve a large number of records without overwhelming the server's memory.

The biggest difference?

It doesn't return a simple collection, but it returns an instance of the lazy collection which fetches results in small chunks as they are iterated over.

Now let's have a look at an example.

Redefine our table by changing the order by method to it.

And we're going to order it by the ID and then we're going to chain the lazy method to it.

If we then output our variable posts, I have just refresh the browser where you will see that an instance of the lazy collection has been returned.

And if we open our collection open the use section, you will see that the chunk size is 1000, which is the default behavior of the lazy method.

I know that we haven't reached the collections chapter yet, but want to perform some kind of magic right here as well.

We could create a for each loop below of it like this and say that we want to loop over that post as one single post.

But since the lazy method returns a lazy collection, we're free to perform all helper methods on our lazy collection as well, since it will handle it just like a collection.

So what we can do is chaining the each() method on our lazy method which accepts a callback function.

So let's say function, parentheses, curly braces and let's remove our foreach() loop.

Then we want to iterate over all of our posts as one single post.

Where then inside of it we're simply going to ray() out the post title.

Now, what we have done right here is making sure that the service memory is not overrun by loading all of the posts into memory at once.

Inside the browser, you will see that we have outputted all of our post titles.

Next to the lazy() method.

Laravel also has a lazyById() method.

So let's replace the both the method and the lazy method with a lazy by ID method, which is quite similar to the lazy() method, but it is used to retrieve a single record by its ID.

Since we're going to retrieve one row by ID, we need to add a where clause right here as well.

So let's get rid of the order by method and let's add the where method where we're going to get a row where the ID is equal to one.

In this example, the post variable will contain a lazy collection instance that will fetch the post from the database only when it's accessed.

This approach can be useful when you need to retrieve a specific record from the database without loading all the records into memory at once.

Now, once we output it, you'll see that it returns back a lazy collection, but it hasn't added the value. And that's happening because we obviously need to chain the first method to it.

It returns null because we don't have a post with ID number one, so let's set it equal to 1000.

You will see that we have lazy loaded one single post where the ID is equal to 1000.

Now the first method is always needed in these situations because it retrieves the first and only post from the database.

Now you might wonder when the lazyById() method is useful.

It is mainly used to retrieve a single record by its ID, which can also be done without the lazyById() methods.

Now, just like the lazy() method, it can be useful when you want to retrieve a specific record from the database without loading all the records into memory at once.

Now quick summary:

The lazy() and lazyById() methods provide a convenient way to stream query results lazily in Laravel's query builder.

By using this method, you can avoid memory exhaustion caused by loading too much data into memory at once.

Instead, you can simply fetch results in smaller chunks and process them as needed.


 👉 lazy()
        DB::table('posts')
            ->orderBy('id')
            ->lazy()->each(function($post) {
                echo $post->title;
            });

👉 lazyById()
        DB::table('posts')
            ->where('id', 1)
            ->lazyById()
            ->first();

*/ 




// lazy() and lazyById() are methods that allow you to perform lazy loading of related models in Laravel.Lazy loading is a technique where related models are loaded only when they are actually accessed, rather than loading them eagerly upfront.

// Lazy loading can be particularly useful when working with large datasets or when you have relationships that are not always needed.It helps improve performance by loading related models on - demand, reducing the amount of unnecessary data retrieval.

//     Here's how you can use lazy() and lazyById():

// The lazy() Method:
// The lazy() method allows you to lazily load a relationship for a collection of models.Here's an example:

// $users = App\Models\User:: all(); // Retrieve all users

// Lazy load the "posts" relationship for each user
// $users -> lazy('posts');

// Access the posts for a specific user
// foreach($users as $user) {
//     foreach($user -> posts as $post) {
//         echo $post -> title;
//     }
// }

// In the example above, we retrieve all users and then use lazy('posts') to lazily load the "posts" relationship for each user.Later, when we access $user -> posts, the related posts will be loaded on - demand.

// The lazyById() Method:
// The lazyById() method allows you to lazily load a relationship for a single model instance based on its ID.Here's an example:

// $user = App\Models\User:: find(1); // Retrieve a specific user by ID

// Lazy load the "posts" relationship for the user
// $user -> lazyById('posts');

// Access the posts for the user
// foreach($user -> posts as $post) {
//     echo $post -> title;
// }
// In this example, we retrieve a specific user by their ID using find(1).Then, we use lazyById('posts') to lazily load the "posts" relationship for that user.When we access $user -> posts, the related posts will be loaded on - demand.

    // It's important to note that the lazy() and lazyById() methods are available on Eloquent models in Laravel, which extends the Illuminate\Database\Eloquent\Model class. You can use these methods to lazily load relationships defined in your model classes.

// I hope this explanation helps you understand the lazy() and lazyById() methods in Laravel query builder! Let me know if you have any further questions.





