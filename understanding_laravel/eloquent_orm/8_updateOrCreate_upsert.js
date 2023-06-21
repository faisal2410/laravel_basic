// 👉 updateOrCreate() and upsert() methods in Laravel's Eloquent ORM :

//  These methods are used for updating or inserting records in the database table, and they can be quite handy in certain situations.I'll explain each method separately and provide code examples to demonstrate their usage.

//    ✅ updateOrCreate() Method:
// The updateOrCreate() method allows you to update an existing record in the database or create a new record if it doesn't already exist. It takes two parameters: an array of attributes to update or create, and an array of values to set on the record. Here's an example:

// Suppose we have a "users" table with columns: id, name, email, and phone_number

// Updating an existing record if it exists, or creating a new one
// $user = User:: updateOrCreate(
//     ['email' => 'john@example.com'], // Search criteria to find the record
//     ['name' => 'John Doe', 'phone_number' => '123456789'] // Attributes to update or set
// );

// In this example, if a user with the email 'john@example.com' exists, their name and phone number will be updated.
// Otherwise, a new user will be created with the provided attributes.

// In the above code, we use the User model(assuming you have a User model class) to perform the updateOrCreate() operation.The first array specifies the search criteria to find the record(in this case, we search for a user with the email 'john@example.com'). The second array contains the attributes to update or set on the record.

//   ✅  upsert() Method:
// The upsert() method is similar to updateOrCreate(), but it allows you to perform an "upsert" operation, which means updating an existing record or inserting a new record based on a specified unique key.Here's an example:

// Suppose we have a "products" table with columns: id, name, price, and in_stock

// Upserting a product based on the unique key "name"
// Product:: upsert(
//     [
//         ['name' => 'iPhone', 'price' => 999.99, 'in_stock' => 10],
//         ['name' => 'MacBook', 'price' => 1999.99, 'in_stock' => 5]
//     ],
//     ['name'], // Unique key(s) to identify existing records
//     ['price', 'in_stock'] // Attributes to update if the record already exists
// );

// In this example, we provide an array of products to upsert.
// The 'name' column is considered the unique key.
// If a product with the same name already exists, its 'price' and 'in_stock' attributes will be updated.
// Otherwise, new products will be inserted with the provided attributes.

// In the upsert() method, the first parameter is an array of records to upsert.Each record is represented by an associative array with the column names as keys and the corresponding values.The second parameter specifies the unique key(s) used to identify existing records(in this case, the 'name' column).The third parameter contains the attributes to update if the record already exists.

// These methods are quite useful when you want to update or insert records in a database table efficiently and in a concise manner.Make sure to adjust the examples to match your specific database table structure and model names.







