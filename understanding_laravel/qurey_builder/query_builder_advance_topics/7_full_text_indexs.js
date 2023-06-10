/*
👉Full text indexes :

 👉 whereFullText()
        DB::table('posts')
            ->whereFullText('description', 'quo')
            ->get();

👉 orWhereFullText()
        DB::table('posts')
            ->whereFullText('description', 'quo')
            ->orWhereFullText('description', 'Doloribus')
            ->get();





*/



// The whereFullText() and orWhereFullText() methods are used to perform full - text searches on a column in the database using Laravel's query builder. They are specifically designed for databases that support full-text indexing, such as MySQL with the InnoDB engine.

// To use these methods, you need to ensure that your database table has a full - text index defined on the column you want to search.You can create the index using a migration or manually in your database management tool.

//     Here's an example of how you can use whereFullText() and orWhereFullText() in Laravel:


// $searchTerm = 'example search term';

// $results = DB:: table('your_table')
//     -> whereFullText('column_name', $searchTerm)
//     -> get();

// In this example, 'your_table' represents the name of the table you want to search in, and 'column_name' represents the name of the column you want to perform the full - text search on.$searchTerm is the term you want to search for.

// You can also use orWhereFullText() to perform an OR condition in your query:


// $results = DB:: table('your_table')
//     -> where('column1', '=', 'value')
//     -> orWhereFullText('column2', $searchTerm)
//     -> get();

// In this example, the query will search for rows where 'column1' is equal to 'value' OR where 'column2' matches the full - text search term.

//     It's important to note that the availability of full-text search and the specific syntax may vary depending on the database you are using. MySQL, for example, has specific requirements and syntax for full-text searches. You should consult the documentation of your specific database engine for more details.

// That's a basic overview of how to use whereFullText() and orWhereFullText() in Laravel's query builder.I hope this explanation helps you understand how to perform full - text searches in your Laravel application! Let me know if you have any further questions.



/*

👉 How to create index in a migration file:

Certainly! In Laravel, you can create indexes using migrations. Migrations are a convenient way to manage your database schema and make changes to it over time. Here's how you can create an index using a migration in Laravel:

Create a new migration file: Open your terminal or command prompt and navigate to your Laravel project's root directory. Then run the following Artisan command to create a new migration file:

bash
Copy code
php artisan make:migration create_index_on_table_name --table=your_table_name
Replace create_index_on_table_name with an appropriate name for your migration, and your_table_name with the name of the table where you want to create the index.

Open the migration file: After running the command, Laravel will generate a new migration file in the database/migrations directory. Open that file with your preferred code editor.

Add the index creation code: In the migration file's up() method, you can use the ->index() method to specify the column(s) on which you want to create the index. Here's an example:


public function up()
{
    Schema::table('your_table_name', function (Blueprint $table) {
        $table->index('column_name');
    });
}
Replace your_table_name with the actual name of your table, and column_name with the name of the column for which you want to create the index. You can also pass an array of column names to the index() method if you want to create a composite index on multiple columns.

Save and run the migration: Save the migration file and return to your terminal or command prompt. Run the following Artisan command to execute the migration:

php artisan migrate
Laravel will execute the migration and create the index on the specified column(s) in your database table.

And that's it! You've successfully created an index using a migration in Laravel. Migrations allow you to manage your database schema changes in a version-controlled manner, making it easier to track and apply changes to your database structure over time.

*/


/*

Certainly! I'd be happy to help you understand and learn how to use the Laravel query builder for creating primary keys, unique keys, indexes, full-text indexes, and spatial indexes. Let's break down each line of code and provide code examples for each case:

👉Primary Key:
The primary method is used to define a primary key on a table. It accepts a column name as a parameter. In your example, the primary key is set on the 'id' column. Here's an example:

$table->primary('id');

👉Composite Primary Key:

The primary method can also accept an array of column names to create a composite primary key. In your example, the primary key is set on both the 'id' and 'parent_id' columns. Here's an example:

$table->primary(['id', 'parent_id']);

👉Unique Key:

The unique method is used to create a unique index on a table column. It accepts a column name as a parameter. In your example, the 'email' column has a unique index. Here's an example:

$table->unique('email');

👉Index:

The index method is used to create an index on a table column. It accepts a column name as a parameter. In your example, the 'state' column has an index. Here's an example:

$table->index('state');

👉Full-Text Index:
The fulltext method is used to create a full-text index on a table column. It accepts a column name as a parameter. In your example, the 'body' column has a full-text index. Here's an example:

$table->fulltext('body');

👉Spatial Index:

The spatialindex method is used to create a spatial index on a table column. It accepts a column name as a parameter. In your example, the 'location' column has a spatial index. Here's an example:

$table->spatialindex('location');

These are the basic examples of using the Laravel query builder to define primary keys, unique keys, indexes, full-text indexes, and spatial indexes. Remember to use these methods within a Laravel migration file to create or modify database tables.

Let me know if you have any further questions or need additional assistance!







*/ 



