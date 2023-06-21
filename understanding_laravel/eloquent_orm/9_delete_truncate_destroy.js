// 👉delete (), truncate(), and destroy() methods in Laravel's Eloquent ORM.

// These methods are used for manipulating data in the database using the models in Laravel.

// ✅delete (): This method is used to delete a specific record from the database.It can be called on an instance of a model or a collection of models.

// ✅Deleting a single record
// $user = User:: find(1);
// $user -> delete ();

// ✅Deleting multiple records
// User:: where('status', 'inactive') -> delete ();

// In the first example, we retrieve a user with an ID of 1 and delete it using the delete () method.In the second example, we delete all users with an "inactive" status.

//✅ truncate(): This method is used to remove all records from a table.It can be called on a model's class.

// User:: truncate();

// The truncate() method removes all records from the users table in the above example.

// ✅destroy(): This method is used to delete one or more records by their primary keys.It can be called on a model's class or a collection of models.

// Deleting a single record
// User:: destroy(1);

// Deleting multiple records
// User:: destroy([1, 2, 3]);

// Deleting records based on a condition
// User:: where('status', 'inactive') -> delete ();

// In the first example, we delete a user with the primary key 1 using the destroy() method.In the second example, we delete multiple users with primary keys 1, 2, and 3. Lastly, we delete all users with an "inactive" status using a condition.

//     It's important to note that the delete() and destroy() methods trigger the model's events and perform cascading deletes if defined in the relationships.On the other hand, the truncate() method does not trigger events and does not fire any cascading deletes.

// Remember to import the relevant model at the top of your file using the use statement.For example: use App\Models\User;.






