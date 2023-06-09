/*
👉 Chunking data

Let's talk about chunking data, which is another method that allows you to efficiently handle large data sets in laravel.

Laravel also offers the paginate method, which we will cover later on, but the paginate method is used for displaying data in a paginated format on a web page, but it retrieves all the data at once and then it breaks the data into pages.

This can be inefficient when working with very large data sets.

The chunk() method, on the other hand, retrieves data in smaller, more manageable chunks rather than getting all the data and chunking it afterwards.

This approach is much more efficient when working with large data sets as it avoids retrieving all data at once.

This can make a big difference in terms of performance and resource usage.

Now let's refactor our query a little bit.

Let's delete what we have and let's define a new variable named posts and let's set it equal to the DB colon colon table where the table will be posts.

We're going to order it by the ID column and whenever you want to chunk data, you need to chain the chunk method to it.

Now the chunk() method accepts two arguments the number of rows to retrieve per chunk and a callback function that processes each chunk.

Let's say that we want to retrieve 150 posts per chunk, meaning that if you have a table of 1 million rows, the chunk method will retrieve the data in chunks of 150 rows per a time.

And we then need to add a callback function. So comma, function, parentheses, curly braces.

Now the callback function receives each chunk of data as its argument, so every 150 post chunks will be set equal to a variable named posts.

Once the callback function has processed the first 150 chunks, the chunk method moves on to the next chunk until all the data has been retrieved and processed.

Using the callback function allows you to work with each chunk of data separately, which can be useful for things like performing calculations, filtering data, or transferring the data into a different format.

So what we could do is basically add a for each loop inside our chunk method and say that we want to loop over the posts as one single post.

Then inside our loop we can basically add an array where we output the post title.

I have refreshed the browser behind the scenes and inside array.
You can see that it has outputted all titles as a string.

Now, on the other hand, let's remove our ray and let's go outside of our query where we can ray our variable posts.

And behind the scenes I have refreshed the browser and you can see that it basically returns nothing.

Passing each chunk to a callback function for processing, which is then responsible for handling the data in chunks as needed.


 DB::table('posts')
            ->orderBy('id')
            ->chunk(150, function($posts) {
                foreach ($posts as $post) {
                    echo $post->title;
                }
            });



*/ 



// Chunking allows you to process large result sets in smaller, more manageable chunks, which can be useful for tasks like data migration, batch processing, or any operation that involves iterating over a large dataset.

// To demonstrate chunking, let's assume you have a "users" table in your database and you want to perform some operation on all the users in chunks. Here's an example of how you can achieve this using Laravel's query builder:


// use Illuminate\Support\Facades\DB;

// Assuming you have a table named "users"

// $chunkSize = 1000; // The number of records to process in each chunk

// DB:: table('users') -> orderBy('id') -> chunk($chunkSize, function ($users) {
//     foreach($users as $user) {
//         // Perform your desired operation on each user record
//         // For example, let's just display the user's name
//         echo $user -> name;
//     }
// });
// In the above code, we start by importing the DB facade, which allows us to interact with the database using Laravel's query builder. Then, we set the $chunkSize variable to determine the number of records we want to process in each chunk. You can adjust this value based on your specific needs and the available resources.

// Next, we call the chunk method on the query builder, specifying the table name('users' in this example).We also chain the orderBy method to ensure that the results are fetched in a consistent order, based on the 'id' column in this case.

// Inside the chunk method, we pass a callback function that will be called for each chunk of records fetched from the database.The $users parameter represents the chunk of records being processed.Within this callback, you can perform your desired operation on each user record.In the example above, we simply echo the user's name, but you can replace that with your own logic.

// Laravel takes care of fetching the data in chunks behind the scenes, so you don't need to worry about memory limitations when working with large datasets. The chunk method retrieves a chunk of records, passes them to the callback function, and then fetches the next chunk until all records have been processed.

// By using chunking, you can efficiently process large datasets without exhausting the system resources or running into memory issues.






