/*
👉 Pessimistic Locking :

The query builder has a pretty cool feature which is called Pessimistic locking.
And pessimistic locking is a technique that is used to prevent conflicts between multiple users when accessing the same resource.
This is a pretty important feature to have in an application where multiple users are working with the same data at the same time.

Let's consider a scenario with the previous example where two users want to update the balance of a user in the users table.

Without pessimistic locking, both users could update the balance at the same time and potentially overwrite each other's changes.

This can lead to inconsistencies in the data, but it can also cause issues with the application's functionalities.

To prevent this scenario, we can use pessimistic locking, which will ensure that only one user can update the balance at a time.

Pessimistic locking can be added inside a database transaction, but also in a situation where database transactions are not needed.

But since we have our database transaction defined, let's continue on with this example.
How to implement pessimistic locking in Laravel.
We could use the lock for update methods on your query, so let's go right below our where clause and let's change the lockForUpdate() method to it.

This method locks the selected row until the transaction is completed, which will prevent other users

This means that any other user attempting to update the balance for this user right now will have to wait until the transaction is completed.

There's no point of refreshing the browser and see what the output is since it doesn't show anything to the user.

But behind the scenes it ensures that the data remains consistent and accurate, even when multiple users are accessing it.

Next to the lock for update method, you can also use the shared lock method.

Next to the lock for update method, you can also use the sharedLock() method.

The sharedLock() method is another method in Laravel's query builder that can be used for locking rows in a table.

It is similar to the lockForUpdate() methods, but it locks the selected row for shared reading instead of exclusive writing.

This means that other users can still read the locked rows, but they cannot modify them until the lock is released.

And I usually prefer to work with a sharedLock() method because I do want to output the data, but I don't want them to update it by chaining it on our query right here.We will lock the row with ID number one for shared reading, allowing other users to read the row but not modify it until the lock is released.

Quick summary: By using pessimistic locking, we can assure that multiple users can safely access and modify the same resource without having conflicts with each other.

This ensures that the data remains consistent and accurate, even when multiple users are accessing it.


👉 way 1

DB::transaction(function () {
            DB::table('users')
                ->where('id', 1)
                ->lockForUpdate()
                ->decrement('balance', 100);

            DB::table('users')
                ->where('id', 2)
                ->lockForUpdate()
                ->increment('balance', 100);

👉 way2

                 DB::table('users')
              ->where('id', 1)
              ->sharedLock()
              ->decrement('balance', 100);

 });


*/


/*
Pessimistic locking is a technique used in database transactions to prevent conflicts between concurrent transactions. It involves acquiring locks on the database rows being modified, ensuring that other transactions cannot modify those rows until the lock is released. In Laravel, you can use the sharedLock method to implement pessimistic locking.

Let's look at an example of how to use pessimistic locking in Laravel's query builder:


use Illuminate\Support\Facades\DB;

DB::beginTransaction();

try {
    $user = DB::table('users')
        ->where('id', 1)
        ->sharedLock()
        ->first();

    // Perform your operations on the $user object here

    DB::commit();
} catch (\Exception $e) {
    DB::rollBack();
    throw $e;
}

In this example, we begin a database transaction using beginTransaction. Next, we query the users table using the query builder's sharedLock method. The sharedLock method acquires a shared lock on the selected rows, allowing other transactions to also read the data but preventing them from modifying it until the lock is released.

After acquiring the lock, you can perform your desired operations on the retrieved $user object. Note that you should complete your operations within the transaction to ensure consistency.

Finally, we commit the transaction if everything goes well. If an exception is thrown during the process, we roll back the transaction to maintain data integrity.

By using sharedLock, you can ensure that other concurrent transactions cannot modify the locked rows until the lock is released. This helps prevent conflicts and maintains data consistency in multi-user environments.

It's important to note that pessimistic locking can have a performance impact since it can potentially block other transactions from accessing the locked rows. Therefore, it's essential to use it judiciously and only when necessary.

I hope this explanation and example helped you understand pessimistic locking in Laravel's query builder. If you have any further questions, feel free to ask!
*/ 