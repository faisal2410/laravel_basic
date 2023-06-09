/*
👉Database Transaction
Database transactions are a way of ensuring data, consistency and integrity in your application.

It basically allows you to ensure that the series of database operations are performed as a single unit of work

This can be useful in situations where you need to perform multiple database operations together and want to ensure that they are all succeeded or failed as a single unit.

👉 Example

What I want to do right now is adding a new column to our users table which will indicate the user's balance whenever a user one will send money to user two.

We basically have to decrease the balance of user one and increase the balance of user 2 in 1 single query.

We don't have that much data inside our tables so we can modify the user's migration and let's actually do that

So right below our password column, we're going to define a new column through our table object where

*/




// Database transactions are crucial when you need to perform multiple database operations as a single atomic unit, ensuring that either all the operations succeed or none of them are applied.Laravel provides a convenient way to work with transactions using the query builder.

// To get started, let's assume you have a Laravel project set up with a configured database connection. First, make sure you have imported the necessary classes at the top of your file:


// use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Log;
// Now, let's dive into the concept of transactions with Laravel query builder.

// Beginning a Transaction:
// To start a transaction, you can use the beginTransaction method provided by the DB facade:

// DB:: beginTransaction();
// Performing Database Operations:
// Next, you can perform your database operations within the transaction using the query builder methods.For example, let's say we want to update a user's email address and insert a new record in another table:

// try {
//     DB:: table('users')
//         -> where('id', 1)
//         -> update(['email' => 'newemail@example.com']);

//     DB:: table('orders') -> insert([
//         'user_id' => 1,
//         'amount' => 100.00,
//     ]);

//     // Additional database operations

//     DB:: commit(); // If all operations succeed, commit the transaction
// } catch (\Exception $e) {
//     DB:: rollback(); // If an exception occurs, rollback the transaction
//     Log:: error('Transaction failed: '.$e -> getMessage());
// }

// Committing or Rolling Back the Transaction:
// After performing the database operations, you can either commit the transaction or roll it back.If all the operations within the transaction have succeeded, you should call the commit method.Otherwise, if an exception occurs or you explicitly want to cancel the transaction, you can call the rollback method.

// Exception Handling:
// Wrap your transaction logic within a try-catch block to catch any exceptions that might occur during the transaction.In the example above, we catch the \Exception class, but you can customize it to suit your needs.

// By wrapping your database operations within a transaction, Laravel ensures that any failure during the transaction will cause a rollback, reverting all changes made within that transaction.This way, you maintain the integrity and consistency of your data.

// Remember to handle exceptions appropriately and log any errors for debugging purposes.

//     That's it! You now know how to use database transactions in Laravel query builder. Transactions are incredibly useful when dealing with critical operations, such as updating multiple tables or performing complex data manipulations.

// Feel free to ask if you have any further questions or need additional assistance!





