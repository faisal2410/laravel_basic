/*
👉 Ordering through the query builder:
👉The orderBy() method allows you to sort your query results by a specific column
in ascending or descending order.
👉The latest() and oldest() methods allows you to sort your query results by the 
created_at timestamp in descending and ascending order

👉one orderBy()
        DB::table('posts')
            ->orderBy('title', 'desc')
            ->get();

👉 multiple orderBy() methods
        DB::table('posts')
            ->orderBy('title')
            ->orderBy('min_to_read')
            ->get();

👉latest()
        DB::table('posts')
            ->latest()
            ->get();

👉oldest()
        DB::table('posts')
            ->oldest()
            ->get();

We have touched on sorting a little bit, but are you tired of manually sorting through your Laravel queries?

Laravel offers three pretty interesting methods, which are the orderBy method, the latest methods and the oldest methods.

Let's dive into them starting off with the orderBy method.

So let's remove what we have right now and let's chain the orderBy methods.

The orderBy() method allows you to sort your query results by a specific column in ascending or descending order.
We do need to pass in 1 or 2 arguments right here.

The first argument will be the column you want to search it on, which in our case will be title.

Now, if we click through on our order by, you will see that it has a default direction in ascending order.
So there's no need to pass in a second argument if you want to order it by in ascending order.

In case you want to order it by a descending order, you need to add a second argument of desc which will overwrite the default value.

Finally, let's chain the get method to see the output where you will see that we have retrieved 50 rows and if we open the first one, you'll see that the ID is 1046 and the first letter of the title is a V.
Now let's say that we want to open the last one, which is the first letter of the alphabet, so.That's correct.

Now if we remove our direction. You'll see that we have 50 rows again.
And if we open the first value, you'll see it is the last one of the descending order where the first letter of the title is an A.

You can also chain multiple order biometrics together to sort multiple columns.
So let's say that we want to order by the title in ascending order, but we also want to order by the minutes to read column and the output.

You will see that the first row is also the 1037 where the first letter is a and the minutes to read is equal to five.

Next to the orderBy method Laravel offers the latest and oldest methods which allows you to sort your query results by the created_at timestamps and descending and ascending order.

This is particularly useful when dealing with time sensitive data such as blog posts or user activity.

Now let's say that we want to get rid of both orderBy() and replace it with a latest() method and the You will see that we retrieved 50 rows and if we open the first one, you will see that we retrieve the latest post based on the created_at column right here.

Now the syntax that we have right here is equal to the orderBy() method.

We're going to order it by the created_at column in descending order.

But I think that the syntax of the latest() method is a lot cleaner because it removes both arguments.
In case you want to use the latest() method, but you want to sort post based on another column you could pass in the column name as an argument.

So let's say that we want to sort it by the title.

Once we open our array, you'll see that we sort it.

In ascending order with the ID of 1046 have been outputted first.

Finally, we could replace the latest() method with the oldest() method, which sorts the query results by the created_at column by default in ascending order.

Alternatively, you could also pass in an argument just like the latest() method to change the column to, let's say the title.

Quick Summary:
The orderBy() method can be less efficient than the latest() and oldest() method when sorting by the created_at  timestamp as it requires an extra step to specify the column.

On the other hand, the latest() and oldest() methods are very efficient when sorting by the created element score as timestamp as they use Laravel's built in functionality to retrieve the latest or oldest records.

*/ 


// orderBy() is a method in Laravel's query builder that allows you to sort the result set of a query based on one or more columns. It is used to specify the ordering of the records returned from the database.

// Here's an example of using orderBy() to sort a query result by a single column:


// $users = DB:: table('users')
//     -> orderBy('name')
//     -> get();

// In this example, we're retrieving all the records from the "users" table and ordering them by the "name" column in ascending order. If you want to sort in descending order, you can use the orderByDesc() method instead:


// $users = DB:: table('users')
//     -> orderByDesc('name')
//     -> get();

// Now, let's move on to using multiple orderBy() methods to sort the result set by multiple columns. Consider the following example:


// $users = DB:: table('users')
//     -> orderBy('last_name')
//     -> orderBy('first_name')
//     -> get();

// In this case, the query will first sort the records by the "last_name" column, and then, within each "last_name" group, it will sort them by the "first_name" column.

//     Next, let's discuss latest() and oldest(). These methods are shortcuts for ordering the query results based on a date column, typically "created_at" or "updated_at".

// The latest() method orders the query results by the specified column in descending order, with the most recent records appearing first.Here's an example:


// $latestPosts = DB:: table('posts')
//     -> latest('created_at')
//     -> get();

// In this example, we're retrieving the posts from the "posts" table and ordering them by the "created_at" column in descending order.

// On the other hand, the oldest() method orders the query results by the specified column in ascending order, with the oldest records appearing first.Here's an example:


// $oldestPosts = DB:: table('posts')
//     -> oldest('created_at')
//     -> get();

// In this example, we're retrieving the posts from the "posts" table and ordering them by the "created_at" column in ascending order.

// To summarize, here are the methods we covered:

// orderBy(): Sorts the query results based on one or more columns.
//     orderByDesc(): Sorts the query results in descending order based on one or more columns.
// Multiple orderBy(): Allows sorting the results by multiple columns in a specific order.
//     latest(): Orders the query results based on a date column in descending order.
//         oldest(): Orders the query results based on a date column in ascending order.
// I hope this explanation helps you understand how to use orderBy(), latest(), oldest(), and multiple orderBy() in Laravel's query builder. Let me know if you have any further questions!





