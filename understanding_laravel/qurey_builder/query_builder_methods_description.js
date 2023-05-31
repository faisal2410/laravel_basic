// Let's dive into the query builder methods in Laravel with detailed explanations and code examples. I'll walk you through various scenarios and demonstrate how to use the query builder methods effectively.

// Selecting Columns:
// The select method is used to specify the columns to retrieve from the database.You can pass column names as arguments or an array of column names.


// $users = DB:: table('users')
//     -> select('name', 'email')
//     -> get();

// Filtering Records:
// The where method allows you to add a basic where clause to the query.You can specify the column, operator, and value to filter the records.


// $users = DB:: table('users')
//     -> where('age', '>', 18)
//     -> get();

// You can also chain multiple where clauses or use the orWhere method for an "or" condition.


// $users = DB:: table('users')
//     -> where('age', '>', 18)
//     -> orWhere('city', 'London')
//     -> get();

// Retrieving Records:
// The get method is used to retrieve all records that match the query.You can also use the first method to retrieve only the first matching record.


// $users = DB:: table('users') -> get();

// $user = DB:: table('users') -> where('id', 1) -> first();
// Sorting Records:
// The orderBy method is used to specify the column to order the results by.You can also chain multiple orderBy clauses for multi - level sorting.


// $users = DB:: table('users')
//     -> orderBy('name', 'asc')
//     -> orderBy('age', 'desc')
//     -> get();

// Aggregating Records:
// The count method allows you to retrieve the number of rows matching the query.


// $count = DB:: table('users')
//     -> where('age', '>', 18)
//     -> count();

// Inserting Records:
// The insert method is used to insert a new record into the database.


// DB:: table('users') -> insert([
//     ['name' => 'John Doe', 'email' => 'john@example.com'],
//     ['name' => 'Jane Smith', 'email' => 'jane@example.com']
// ]);

// Updating Records:
// The update method is used to update existing records in the database.


// DB:: table('users')
//     -> where('id', 1)
//     -> update(['name' => 'New Name', 'email' => 'new@example.com']);

// Deleting Records:
// The delete method is used to delete records from the database.


// DB:: table('users')
//     -> where('age', '<', 18)
//     -> delete ();


// These are some of the commonly used query builder methods in Laravel.You can combine and chain these methods to construct complex queries.Remember to import the DB facade at the top of your file(use Illuminate\Support\Facades\DB;) to access the query builder.

// Feel free to ask for further clarification or more specific examples!





