/*

👌Retrieving a single row

👌Laravel, the query builder provides several helpful methods for retrieving a single row from a database table. Let me walk you through a few of them with code examples.

👌first(): This method retrieves the first record matching the query criteria. The first() method return an object, which can be accessed using the arrow notation

$user = DB::table('users')->where('status', 'active')->first();
In this example, the first() method is used to retrieve the first active user from the "users" table.

👌find(): This method retrieves a record by its primary key.The find() method is used to retrieve a single record by its primary key.

$user = DB::table('users')->find(1);
In this case, the find(1) method is used to retrieve the user record with a primary key of 1.

👌firstWhere(): This method retrieves the first record matching the specified column and value.

$user = DB::table('users')->firstWhere('name', 'John');
Here, the firstWhere('name', 'John') method is used to retrieve the first user record with the name "John".

👌value(): This method retrieves a single value from a specific column in the first matching record.The value() method is used to retrieve a single value from a result set.

$email = DB::table('users')->where('name', 'John')->value('email');
In this example, the value('email') method retrieves the email value for the user with the name "John".

These are just a few examples of the query builder methods available in Laravel for retrieving a single row from a database table. You can mix and match these methods with other query conditions to suit your specific requirements.

*/

/*
👌 Retrieving a list of column values:

In Laravel's query builder, you can retrieve a list of column values from a database table using various methods. Let me guide you through some of the commonly used methods with code examples.

pluck(): This method retrieves a list of values from a single column in the table.

$names = DB::table('users')->pluck('name');
In this example, the pluck('name') method retrieves an array containing all the values from the "name" column of the "users" table.

select(): This method allows you to specify multiple columns to retrieve from the table.

$users = DB::table('users')->select('name', 'email')->get();
Here, the select('name', 'email') method is used to retrieve the "name" and "email" columns from the "users" table.

distinct(): This method retrieves a list of distinct values from a column.

$categories = DB::table('products')->distinct()->pluck('category');
In this example, the distinct() method is used before pluck('category') to retrieve a list of distinct values from the "category" column of the "products" table.

lists(): Note: The lists() method was deprecated in Laravel 5.3 and removed in Laravel 5.4. It is no longer available.

These are some examples of how you can retrieve a list of column values using Laravel's query builder. You can combine these methods with other query conditions and use them according to your specific needs.








*/ 