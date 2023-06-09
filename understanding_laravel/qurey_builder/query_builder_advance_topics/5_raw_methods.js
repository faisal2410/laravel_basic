/*

👉 selectRaw(), whereRaw(), havingRaw(), orderByRaw(), groupByRaw()

👉 selectRaw()
        DB::table('posts')
            ->selectRaw('count(*) as post_count')
            ->first();

👉 whereRaw()
        DB::table('posts')
            ->whereRaw('created_at > NOW() - INTERVAL 1 DAY')
            ->get();

👉 havingRaw()
        DB::table('posts')
            ->select('user_id', DB::raw('SUM(min_to_read) as total_time'))
            ->groupBy('user_id')
            ->havingRaw('SUM(min_to_read) > 10')
            ->get();

👉orderByRaw()
        DB::table('posts')
            ->orderByRaw('created_at DESC')
            ->get();

👉groupByRaw()
        DB::table('posts')
            ->select('user_id', DB::raw('AVG(rating) as avg_rating'))
            ->groupByRaw('user_id')
            ->get();


In Lavas Query builder You haven't seen several methods to retrieve data from the database. 

However, it is essential to note that all these methods perform some kind of behind the scenes.

While these methods are useful, it is sometimes necessary to write your own custom queries.

And this is where the query builder comes into play.

With the query builder, you can build up your own query from scratch, allowing you to get the exact data as you need.

So let's see how it works.Let's remove all the chained methods that we have.

And let's chain the selectRaw() method to it.

The selectRaw() method allows us to select raw expressions instead of columns.

So here's how it works.

Let's say that we want to select the count of all fields as the post_count.

Now, to make it work, we need to chain the first method to it, and in the output you will see that it has returned the count of all posts in the post table, which is 50 right now with an alias of post_count.

Then we have the whereRaw() method.

Which allows us to add a role where clause to our query.

And here's an example.
Let's say that we want to check where the created_at column is greater than NOW() and it needs
to have an interval of one day.

Now we don't want to retrieve one single post, but maybe multiple.

So let's replace first with get and inside the output you will see that we have retrieved 50 rows and this is happening because this query will basically return all the posts that were created within the last day.

Now next to the whereRaw() method, you can chain the havingRaw() method and the havingRaw() method allows us to add a raw having clause to our query.

And here is an example.

Let's say that we want to select the column user_id.
And then we want to make a call to DB Colon Colon Raw where the query needs to be the sum of the minutes to read column as an alias of total_time.

Then we're going to chain the groupBy() method to it because we want to group it by the user_id.and instead of havingRaw() methods we're going to say, Well, get the sum of the minutes to read only if it's higher than ten.
And finally, let's chain the get() method to it.

This query will return all the posts of users who have more than ten minutes worth of free time on their posts. And in total there are nine users.

And if we open it, you'll see that the user ID is two and the total time is 17 minutes.

Now let's delete everything that we have because the last method is the groupByRaw() method, which allows us to group the results of a query using a raw expression.

So here's an example.

Let's say that we want to select the column user_id, then we want to make a call to DB raw.
We want to get the avg so the average of the minutes to read column as an alias of avg_minutes to read.
Then we're going to group it raw by the user_id column.

Now, once again, this can output multiple rows.
So let's chain the get() method to it.
And in the output you will see that we have retrieved 24 rows of the users that we have with the average minutes to read of every single user inside our database.



*/ 



// selectRaw():
// The selectRaw() method allows you to write custom raw SQL expressions in the SELECT clause of your query.It's useful when you need to perform calculations or use database-specific functions.

// $users = DB:: table('users')
//     -> selectRaw('count(*) as user_count')
//     -> where('active', 1)
//     -> groupBy('account_id')
//     -> get();
// In this example, we're using selectRaw() to count the number of users and aliasing the result as user_count. The where() method adds a condition to filter active users, and groupBy() groups the results by the account_id.

// whereRaw():
// The whereRaw() method allows you to write custom raw SQL expressions in the WHERE clause of your query.It's useful when you need to perform complex or database-specific conditions.

// $users = DB:: table('users')
//     -> whereRaw('age > ? and votes > 100', [25])
//     -> get();
// Here, whereRaw() is used to apply a condition where age is greater than 25 and votes are greater than 100.

// havingRaw():
// The havingRaw() method allows you to write custom raw SQL expressions in the HAVING clause of your query.It's used when you want to filter aggregated results based on a condition.

// $users = DB:: table('users')
//     -> groupBy('account_id')
//     -> havingRaw('SUM(votes) > ?', [1000])
//     -> get();

// In this example, we're grouping the users by the account_id and applying a condition in the havingRaw() method to select only those groups where the sum of votes is greater than 1000.

// orderByRaw():
// The orderByRaw() method lets you order the query results using raw SQL expressions.It's useful when you need to apply complex ordering conditions.

// $users = DB:: table('users')
//     -> orderByRaw('FIELD(status, "active", "inactive")')
//     -> get();

// Here, we're using orderByRaw() to order the users based on the status field, with "active" users appearing before "inactive" users.

// groupByRaw():
// The groupByRaw() method allows you to specify raw SQL expressions in the GROUP BY clause of your query.It's useful when you need to group by complex expressions or database-specific functions.

// $users = DB:: table('users')
//     -> groupByRaw('DATE(created_at)')
//     -> get();

// In this example, we're grouping the users by the date part of the created_at column using groupByRaw().

// These methods provide flexibility by allowing you to include raw SQL expressions within the Laravel query builder.However, be cautious when using raw expressions, as they may introduce SQL injection vulnerabilities if user inputs are not properly sanitized or bound using parameter binding.

// Remember to import the DB facade at the top of your file:


// use Illuminate\Support\Facades\DB;
// That's a brief overview of selectRaw(), whereRaw(), havingRaw(), orderByRaw(), and groupByRaw() in the Laravel query builder. Feel free to ask if you have any further questions or need additional clarification!





