/*
When designing migration tables in Laravel using the Schema class and the Blueprint class, you have access to various methods and properties through the $table object. Let's explore the methods available in the $table object in detail:

Column Creation Methods:

$table->bigIncrements('column_name'): Creates an auto-incrementing big integer column.
$table->bigInteger('column_name'): Creates a big integer column.
$table->binary('column_name'): Creates a binary column.
$table->boolean('column_name'): Creates a boolean column.
$table->char('column_name', length): Creates a char column with a specified length.
$table->date('column_name'): Creates a date column.
$table->dateTime('column_name', precision): Creates a datetime column with an optional precision.
$table->decimal('column_name', total, places): Creates a decimal column with a specified total digits and decimal places.
$table->double('column_name', total, places): Creates a double column with a specified total digits and decimal places.
$table->enum('column_name', ['value1', 'value2', ...]): Creates an enum column with the specified allowed values.
$table->float('column_name', total, places): Creates a float column with a specified total digits and decimal places.
$table->increments('column_name'): Creates an auto-incrementing integer column.
$table->integer('column_name'): Creates an integer column.
$table->json('column_name'): Creates a JSON column.
$table->jsonb('column_name'): Creates a JSONB column (binary JSON).
$table->longText('column_name'): Creates a long text column.
$table->mediumInteger('column_name'): Creates a medium integer column.
$table->mediumText('column_name'): Creates a medium text column.
$table->nullableTimestamps(): Creates nullable created_at and updated_at columns for timestamps.
$table->smallInteger('column_name'): Creates a small integer column.
$table->string('column_name', length): Creates a string column with a specified length.
$table->text('column_name'): Creates a text column.
$table->time('column_name', precision): Creates a time column with an optional precision.
$table->timestamp('column_name', precision): Creates a timestamp column with an optional precision.
$table->timestamps(precision): Creates nullable created_at and updated_at columns for timestamps.
$table->tinyInteger('column_name'): Creates a tiny integer column.
$table->unsignedBigInteger('column_name'): Creates an unsigned big integer column.
$table->unsignedDecimal('column_name', total, places): Creates an unsigned decimal column with a specified total digits and decimal places.
$table->unsignedInteger('column_name'): Creates an unsigned integer column.
$table->unsignedMediumInteger('column_name'): Creates an unsigned medium integer column.
$table->unsignedSmallInteger('column_name'): Creates an unsigned small integer column.
$table->unsignedTinyInteger('column_name'): Creates an unsigned tiny integer column.
$table->uuid('column_name'): Creates a UUID column.
Column Modification Methods:

$table->after('column_name'): Specify the column that should come after the new column.

$table->change():
This method is used to modify an existing column. You can chain other column creation methods to define the new column properties. For example:


$table->string('column_name')->change();
$table->charset('charset'):
Sets the character set for the table. The charset parameter should be a valid character set string.

$table->collation('collation'):
Sets the collation for the table. The collation parameter should be a valid collation string.

$table->comment('comment'):
Adds a comment to the table. The comment parameter should be a string representing the comment.

$table->default('value'):
Sets the default value for the column.

$table->nullable():
Sets the column to be nullable.

$table->unsigned():
Sets the column to be unsigned.

$table->useCurrent():
Sets the column to use the current timestamp as the default value.

$table->virtualAs('expression'):
Creates a virtual/generated column using the provided expression.

$table->storedAs('expression'):
Creates a stored/persistent generated column using the provided expression.

$table->index('column_name'):
Adds an index to the column.

$table->unique('column_name'):
Adds a unique index to the column.

$table->primary('column_name'):
Adds a primary key constraint to the column.

$table->foreign('column_name')->references('column')->on('table'):
Adds a foreign key constraint to the column. Replace 'column_name' with the column name, 'column' with the referenced column, and 'table' with the referenced table.

$table->dropColumn('column_name'):
Drops the specified column from the table.

$table->dropIndex('index_name'):
Drops the specified index from the table.

$table->dropUnique('index_name'):
Drops the specified unique index from the table.

$table->dropPrimary('index_name'):
Drops the specified primary key constraint from the table.

$table->dropForeign('index_name'):
Drops the specified foreign key constraint from the table.

These are some of the commonly used methods available in the $table object when designing migration tables using Laravel's Schema and Blueprint classes.










*/ 