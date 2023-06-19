// 👉 Eloquent Model Conventions

// ✅ Changing Table names
// ✅ Changing the primary key
// ✅ Changing Auto Increment for the primary key
// ✅ changing the data type of the primary key
// ✅ disable created_at and updated_at columns
// ✅ customize the format of  model's timestamps
// ✅ customize the names of the timestamps columns
// ✅ set default attribute values
// ✅ change the DB interacting with a particular model


// 👉 Changing Table names
// changing table names in Eloquent model conventions in Laravel.

// By default, Laravel assumes that the table name for a model corresponds to the plural form of the model's class name. However, there may be cases where you need to customize the table name, such as when working with an existing database with different naming conventions.

// To change the table name for an Eloquent model, you can make use of the $table property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
//
//       The table associated with the model.

//   ✅  protected $table = 'my_custom_table_name';
// }


// In the example above, the $table property is set to 'my_custom_table_name', which means that Eloquent will use the specified table name instead of the default one.

// Make sure to replace 'my_custom_table_name' with the actual name of the table you want to use.

// Once you've set the $table property in your model, Laravel will automatically use the specified table name for database queries associated with that model.

// It's worth noting that if you're using Laravel's database migrations, the migration file for the model's table will still use the default naming convention based on the model's class name. However, this won't affect the actual table name used by Eloquent at runtime.

//     That's all there is to it! You can now customize the table name for your Eloquent models in Laravel. Let me know if you have any further questions!



// 👉Changing the primary key:


// changing the primary key in Eloquent model conventions in Laravel.

// By default, Eloquent assumes that the primary key for a model is an auto - incrementing integer column named id.However, there might be cases where you need to use a different column as the primary key or use a non - integer data type.

// To change the primary key in Laravel, you can make use of the $primaryKey property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
//
//   The primary key associated with the table.
//
//     ✅protected $primaryKey = 'custom_key';

//
//    Indicates if the IDs are auto-incrementing.
//
//
//     ✅public $incrementing = false;
// }


// In the example above, the $primaryKey property is set to 'custom_key', which means that Eloquent will use the specified column as the primary key instead of the default id column.Additionally, we set $incrementing to false to indicate that the primary key is not auto - incrementing.

// Make sure to replace 'custom_key' with the actual name of the column you want to use as the primary key.

// Once you've set the $primaryKey property in your model, Eloquent will automatically use the specified column as the primary key for database queries associated with that model.

// It's worth mentioning that if you're using Laravel's database migrations, the migration file for the model's table will still generate an id column as the primary key by default. To change the primary key column in the migration file, you can use the primary() method like this:


// Schema:: create('my_table', function (Blueprint $table) {
//     $table -> string('custom_key') -> primary();
// });

// In the example above, we define a custom_key column and make it the primary key using the primary() method.

//     That's all there is to it! You can now customize the primary key for your Eloquent models in Laravel. Feel free to ask if you have any further questions!


// 👉 Changing Auto Increment for the primary key

// changing the auto - increment behavior for the primary key in Eloquent model conventions in Laravel.

// By default, Eloquent assumes that the primary key is an auto - incrementing integer column.However, there might be cases where you need to change this behavior, such as when working with a non - integer primary key or a custom ID generation logic.

// To change the auto - increment behavior for the primary key in Laravel, you can make use of the $incrementing property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
//
//   Indicates if the primary key is auto-incrementing.

//     ✅public $incrementing = false;

//
//     The "type" of the primary key column.

//
//     ✅protected $keyType = 'string';
// }
// In the example above, we set $incrementing to false to indicate that the primary key is not auto - incrementing.We also set $keyType to 'string' to specify that the primary key column uses a non - integer data type(in this case, a string).

// Make sure to adjust the $keyType property based on the actual data type you're using for the primary key column.

// Once you've set these properties in your model, Eloquent will no longer assume that the primary key is an auto-incrementing integer column. This allows you to use custom primary key values or implement your own logic for generating primary key values.

// It's important to note that when using a non-incrementing primary key, you should manually set the primary key value for new records before saving them. For example:


// $model = new MyModel;
// $model -> custom_key = 'ABC123';
// $model -> save();
// In the example above, we manually set the custom_key value before saving the model.

//     That's all there is to it! You can now change the auto-increment behavior for the primary key in your Eloquent models in Laravel. Let me know if you have any further questions!


// 👉 Changing the data type of the primary key

// Changing the data type of the primary key in Eloquent model conventions in Laravel.

// By default, Eloquent assumes that the primary key is an auto - incrementing integer column named id.However, there might be cases where you need to use a different data type for the primary key, such as a string or UUID.

// To change the data type of the primary key in Laravel, you can make use of the $keyType property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {

//  The "type" of the primary key column.

//     ✅ protected $keyType = 'string';
// }

// In the example above, we set $keyType to 'string' to indicate that the primary key column uses a string data type.This tells Eloquent to treat the primary key values as strings instead of integers.

// Make sure to adjust the $keyType property based on the actual data type you're using for the primary key column.

// Once you've set the $keyType property in your model, Eloquent will use the specified data type for the primary key column in database queries and when retrieving or setting the primary key value.

// If you're using a non-integer primary key data type, such as a string or UUID, ensure that your database schema reflects this data type for the primary key column. For example, in a migration file:


// Schema:: create('my_table', function (Blueprint $table) {
//     $table -> string('custom_key') -> primary();
// });

// In the example above, we define a custom_key column as a string and make it the primary key using the primary() method.

//     That's all there is to it! You can now change the data type of the primary key in your Eloquent models in Laravel. Feel free to ask if you have any further questions!


// 👉 Disable created_at and updated_at columns

// Disabling the created_at and updated_at columns in Eloquent model conventions in Laravel.

// By default, Laravel's Eloquent models assume the existence of created_at and updated_at columns in the corresponding database tables. These columns are used to automatically populate timestamps when creating or updating records. However, there may be cases where you want to disable these columns.

// To disable the created_at and updated_at columns in Laravel, you can use the $timestamps property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
 
// Indicates if the model should be timestamped.
    
//    ✅ public $timestamps = false;
// }
// In the example above, we set $timestamps to false to indicate that the model should not automatically manage the created_at and updated_at columns.

// Once you've set the $timestamps property to false in your model, Eloquent will no longer update these columns when creating or updating records.

// It's worth noting that if the created_at and updated_at columns exist in the database table, but you want to disable them for a specific model, you can also use the $hidden property to hide these columns from the model's JSON output.For example:

//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
    
//     The attributes that should be hidden for arrays and JSON output.
   
//    ✅ protected $hidden = ['created_at', 'updated_at'];
// }
// In the example above, we set the $hidden property to include the created_at and updated_at columns.This prevents them from being included in the model's JSON output.

// That's all there is to it! You can now disable the created_at and updated_at columns in your Eloquent models in Laravel. Let me know if you have any further questions!



// 👉 Customize the format of  model's timestamps

// Customizing the format of a model's timestamps in Eloquent model conventions in Laravel.

// By default, Laravel's Eloquent models use the following timestamp formats: Y-m-d H:i:s for the created_at and updated_at columns. However, you may want to customize the format to suit your application's requirements.

// To customize the format of a model's timestamps in Laravel, you can use the $dateFormat property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
    
// The format of the model's timestamp columns.
    
//    ✅ protected $dateFormat = 'U';
// }


// In the example above, we set $dateFormat to 'U', which represents a Unix timestamp.You can customize this property according to your desired timestamp format.Laravel supports various date and time formats that you can use.For more details on available formats, refer to the PHP date formats documentation(https://www.php.net/manual/en/datetime.format.php).

//     Once you've set the $dateFormat property in your model, Eloquent will use the specified format for the created_at and updated_at columns.

// It's important to note that the $dateFormat property affects how timestamps are stored in the database and how they are represented when retrieving the values. If you want to display timestamps in a specific format when presenting data to users, you can use Laravel's built -in date casting functionality or accessor methods to format the timestamps before returning them.

// For example, you can define an accessor method in your model to format the timestamp as needed:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {


//     public function getCreatedAtAttribute($value) {
//         return date('Y-m-d', strtotime($value));
//     }
// }

// In the example above, we define a getCreatedAtAttribute method that formats the created_at timestamp as a Y - m - d date.You can modify the formatting logic according to your requirements.

//     That's all there is to it! You can now customize the format of a model's timestamps in your Eloquent models in Laravel.Let me know if you have any further questions!


// 👉Customize the names of the timestamps columns

// Customizing the names of the timestamps columns in Eloquent model conventions in Laravel.

// By default, Laravel's Eloquent models assume the existence of created_at and updated_at columns in the corresponding database tables. However, there may be cases where you want to customize the names of these columns to align with your database schema or naming conventions.

// To customize the names of the timestamps columns in Laravel, you can use the $createdAt and $updatedAt properties within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
   
//      The name of the "created at" column.
  
//   ✅  const CREATED_AT = 'custom_created_column';

    
//      The name of the "updated at" column.
   
//   ✅  const UPDATED_AT = 'custom_updated_column';
// }


// In the example above, we set const CREATED_AT to 'custom_created_column' and const UPDATED_AT to 'custom_updated_column'.These constants allow you to define the customized column names for the timestamps.

// Make sure to replace 'custom_created_column' and 'custom_updated_column' with the actual names of the columns you want to use for the created and updated timestamps, respectively.

// Once you've set these constants in your model, Eloquent will use the specified column names for the timestamps instead of the default created_at and updated_at columns.

// It's important to note that if you're using Laravel's database migrations, the migration files for the model's table will still generate the default created_at and updated_at columns.To change the column names in the migration file, you can use the timestamp() method like this:


// Schema:: create('my_table', function (Blueprint $table) {
//     $table -> timestamp('custom_created_column') -> nullable();
//     $table -> timestamp('custom_updated_column') -> nullable();
// });

// In the example above, we define custom_created_column and custom_updated_column as timestamp columns using the timestamp() method.You can adjust the column names and additional column modifiers based on your needs.

//     That's all there is to it! You can now customize the names of the timestamps columns in your Eloquent models in Laravel. Let me know if you have any further questions!



// 👉set default attribute values

// Setting default attribute values in Eloquent model conventions in Laravel.

// In Laravel, you can set default attribute values for your Eloquent models using the default property or by defining an accessor method.Let's explore both approaches.

// ✅Using the default Property:

// To set default attribute values using the default property, you can define an array that maps the attribute names to their default values.Here's an example:

//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {

//      The default attribute values for the model.
    
//    ✅ protected $attributes = [
//         'is_active' => true,
//         'priority' => 0,
//     ];
// }


// In the example above, we set default values for the is_active and priority attributes using the $attributes property.Adjust the attribute names and default values based on your requirements.

// When you create a new instance of the model, it will automatically have the default attribute values.For example:


// $model = new MyModel();
// echo $model -> is_active;  // Output: true
// echo $model -> priority;   // Output: 0


// Using an Accessor Method:

// ✅Alternatively, you can define accessor methods to provide default values for specific attributes.Accessor methods allow you to compute the attribute value dynamically when accessing it.Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {

//      Get the value of the "is_active" attribute.
    
//     public function getIsActiveAttribute($value) {
//         return $value ?? true;
//     }

//     Get the value of the "priority" attribute.
    
//     public function getPriorityAttribute($value) {
//         return $value ?? 0;
//     }
// }

// In the example above, we define accessor methods getIsActiveAttribute() and getPriorityAttribute() to provide default values for the is_active and priority attributes, respectively.The ?? operator is used to return the default value if the attribute value is null.

// When accessing the attributes, the accessor methods will be invoked to determine the attribute values.For example:


// $model = new MyModel();
// echo $model -> is_active;  // Output: true
// echo $model -> priority;   // Output: 0
// You can modify the accessor methods according to your specific default value logic.

//     That's all there is to it! You can now set default attribute values in your Eloquent models in Laravel.



// 👉 Change the DB interacting with a particular model:

// Changing the database connection used by a particular model in Eloquent model conventions in Laravel.

// By default, Laravel's Eloquent models use the default database connection specified in the config/database.php file. However, there may be cases where you need to interact with a different database connection for a specific model.

// To change the database connection for a particular model in Laravel, you can use the $connection property within the model class. Here's an example:


//     <? php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class MyModel extends Model {
//      The connection name for the model.
  
//   ✅  protected $connection = 'other_connection';
// }
// In the example above, we set $connection to 'other_connection', which corresponds to a different database connection defined in the config / database.php file.

// Make sure to replace 'other_connection' with the name of the desired database connection you want to use for the model.

// Once you've set the $connection property in your model, Eloquent will use the specified database connection for all database interactions related to that model, such as querying, saving, updating, and deleting records.

// Ensure that you have properly configured the database connection in the config / database.php file.For example:


// 'connections' => [
//     // ...

//     'other_connection' => [
//         'driver' => 'mysql',
//         'host' => '127.0.0.1',
//         'port' => '3306',
//         'database' => 'other_database',
//         'username' => 'other_user',
//         'password' => 'other_password',
//         // ...
//     ],
// ],
//     In the example above, we define a database connection named 'other_connection' with the appropriate database credentials.

//         That's all there is to it! You can now change the database connection for a particular model in your Eloquent models in Laravel. Let me know if you have any further questions!





















































