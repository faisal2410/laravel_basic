/*
Certainly! I'll be glad to teach you about Laravel's query builder methods select, distinct, get, find, first, value, and pluck. These methods are used for retrieving data from the database. Let's explore each one with code examples:

👉select: The select method specifies the columns you want to retrieve from the table.

$users = DB::table('users')
    ->select('name', 'email')
    ->get();
👉distinct: The distinct method ensures that only distinct (unique) values are returned for the specified columns.

$categories = DB::table('products')
    ->distinct()
    ->pluck('category');
👉get: The get method retrieves all records from the table.

$users = DB::table('users')->get();
👉find: The find method retrieves a single record by its primary key.

$user = DB::table('users')->find(1);
👉first: The first method retrieves the first record from the table.

$user = DB::table('users')
    ->where('active', 1)
    ->first();
👉value: The value method retrieves a single value from the first record that matches the query.

$count = DB::table('users')->where('active', 1)->value('count');

👉pluck: The pluck method retrieves a single column's values from the table as a flat array.

$emails = DB::table('users')->pluck('email');

These are some of the commonly used query builder methods for data retrieval in Laravel. You can modify the table name (users, products in the examples) and column names to match your specific database structure. Remember to import the DB facade at the top of your file:


use Illuminate\Support\Facades\DB;

Feel free to utilize these methods based on your specific requirements, and let me know if you have any further questions or need additional guidance!


Certainly! I'd be happy to help you learn about Laravel's query builder methods for inserting and updating data. Let's go through each method one by one and provide code examples for each.

👉insert: The insert method is used to insert a new record into a database table. It takes an array of column and value pairs representing the data to be inserted.

DB::table('users')->insert([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('secret'),
]);

👉insertOrIgnore: The insertOrIgnore method inserts a new record into the table, but if a duplicate key violation occurs, it ignores the insertion and continues execution without throwing an error.

DB::table('users')->insertOrIgnore([
    'email' => 'john@example.com',
    'name' => 'John Doe',
]);

👉upsert: The upsert method allows you to insert a new record into a table or update an existing record if a unique key violation occurs. You need to specify the unique key column(s) and the data to be inserted or updated.

DB::table('users')->upsert(
    [
        'email' => 'john@example.com',
        'name' => 'John Doe',
    ],
    ['email'], // Unique key column(s)
    ['name'] // Columns to be updated in case of key violation
);

👉insertGetId: The insertGetId method inserts a record into a table and returns the ID of the inserted record.

$id = DB::table('users')->insertGetId([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => bcrypt('secret'),
]);

echo "Inserted user ID: " . $id;


👉update: The update method is used to update existing records in a table based on a condition. It takes an array of column and value pairs representing the updated data and a condition to identify the records to be updated.

DB::table('users')
    ->where('id', 1)
    ->update([
        'name' => 'Updated Name',
        'email' => 'updated@example.com',
    ]);

👉increment: The increment method is used to increment the value of a column in the table by a specified amount. It takes the column name and the amount to increment as arguments.

DB::table('users')
    ->where('id', 1)
    ->increment('votes', 1);

👉decrement: The decrement method is similar to increment, but it decreases the value of the specified column by the specified amount.

DB::table('users')
    ->where('id', 1)
    ->decrement('credits', 10);

These are some of the commonly used query builder methods in Laravel for data insertion and updating. You can modify the table name (users in the examples) and column names to match your specific database structure. Remember to import the DB facade at the top of your file:


use Illuminate\Support\Facades\DB;

I hope this explanation helps you understand and utilize these query builder methods effectively! Let me know if you have any further questions.


Certainly! I'd be happy to continue teaching you about Laravel's query builder methods. Let's dive into the next set of methods, including incrementEach, updateOrInsert, delete, truncate, and some aggregate methods such as count and sum.

👉incrementEach: The incrementEach method allows you to increment multiple columns in a table by a specified amount. It takes an array of column names and the amount to increment as arguments.

DB::table('users')
    ->where('id', 1)
    ->incrementEach(['votes' => 1, 'views' => 5]);

👉updateOrInsert: The updateOrInsert method attempts to update a record in the table based on a condition. If the record doesn't exist, it will insert a new record with the provided data. You need to specify the condition, the column and value pairs to be updated/inserted.

DB::table('users')
    ->updateOrInsert(
        ['email' => 'john@example.com'],
        ['name' => 'John Doe', 'votes' => 5]
    );

👉delete: The delete method is used to delete records from a table based on a condition.

DB::table('users')
    ->where('id', 1)
    ->delete();

👉truncate: The truncate method is used to remove all records from a table, effectively truncating the table.

DB::table('users')->truncate();

👉Aggregate methods: Laravel's query builder provides several aggregate methods for calculating values across rows in a table. Here are a few examples:
count: The count method returns the number of records that match a specified condition.

$count = DB::table('users')
    ->where('active', 1)
    ->count();

echo "Total active users: " . $count;

👉sum: The sum method calculates the sum of a column's values based on a condition.

$totalVotes = DB::table('users')
    ->where('status', 'active')
    ->sum('votes');

echo "Total votes of active users: " . $totalVotes;

These are some additional Laravel query builder methods that can be helpful for data manipulation and aggregation. Remember to import the DB facade at the top of your file if necessary:

use Illuminate\Support\Facades\DB;
Feel free to modify the table name (users in the examples) and column names to suit your specific database structure. Let me know if you have any further questions or need more clarification!


Certainly! I'm here to help you learn more about Laravel's query builder methods. Let's explore the average, max, min, whereNot, exists, doesntExist, whereBetween, and whereNotBetween methods with code examples.

👉average: The average method calculates the average value of a column based on a condition.

$averageAge = DB::table('users')
    ->where('active', 1)
    ->average('age');

echo "Average age of active users: " . $averageAge;


👉max: The max method retrieves the maximum value of a column based on a condition.

$maxSalary = DB::table('employees')
    ->where('department', 'IT')
    ->max('salary');

echo "Maximum salary in the IT department: " . $maxSalary;

👉min: The min method retrieves the minimum value of a column based on a condition.

$minStock = DB::table('products')
    ->where('category', 'Electronics')
    ->min('stock');

echo "Minimum stock for Electronics category: " . $minStock;

👉whereNot: The whereNot method adds a "where not" condition to the query, excluding records that match the condition.

$users = DB::table('users')
    ->whereNot('status', 'active')
    ->get();

 👉Retrieve users with a status other than 'active'

👉exists: The exists method checks if any records exist in the table that match a specified condition.

$hasAdmins = DB::table('users')
    ->where('role', 'admin')
    ->exists();

if ($hasAdmins) {
    echo "There are admins in the system.";
} else {
    echo "No admins found.";
}

👉doesntExist: The doesntExist method checks if no records exist in the table that match a specified condition.

$noInactiveUsers = DB::table('users')
    ->where('status', 'inactive')
    ->doesntExist();

if ($noInactiveUsers) {
    echo "There are no inactive users.";
} else {
    echo "Inactive users found.";
}
👉whereBetween: The whereBetween method adds a "where between" condition to the query, selecting records with a column value within a specified range.

$products = DB::table('products')
    ->whereBetween('price', [100, 200])
    ->get();

✔ Retrieve products with a price between 100 and 200

👉whereNotBetween: The whereNotBetween method adds a "where not between" condition to the query, excluding records with a column value within a specified range.

$products = DB::table('products')
    ->whereNotBetween('price', [100, 200])
    ->get();

✔ Retrieve products with a price outside the range of 100 and 200

These are some additional Laravel query builder methods that can enhance your data retrieval and filtering capabilities. Feel free to modify the table names, column names, and conditions to suit your specific database structure. Don't forget to import the DB facade at the top of your file if necessary:

use Illuminate\Support\Facades\DB;
I hope these examples help you understand and utilize these query builder methods effectively! Let me know if you have any further questions or need more assistance.

*/
