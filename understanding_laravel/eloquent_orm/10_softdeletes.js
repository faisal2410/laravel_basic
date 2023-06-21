// 👉softDeletes, withTrashed(), restore(), and forceDelete() in Laravel's Eloquent ORM.

// These features are related to handling soft deletes, which allow you to "softly" delete records from the database without actually removing them permanently.

// SoftDeletes:
// The SoftDeletes trait is used to add soft delete functionality to your Laravel Eloquent models.By including this trait in a model, you enable the soft delete behavior, meaning that records are marked as deleted instead of being physically deleted from the database.
// To use soft deletes, follow these steps:

// Step 1: Add the deleted_at column to your table.This column will store the deletion timestamp.You can create a migration to add this column using the following command:


// php artisan make:migration add_deleted_at_column_to_table--table = your_table_name
// Inside the generated migration file, add the deleted_at column:


// public function up() {
//     Schema:: table('your_table_name', function (Blueprint $table) {
//         $table -> softDeletes();
//     });
// }
// Step 2: In your Eloquent model, use the SoftDeletes trait and specify the deleted_at column:


// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

// class YourModel extends Model {
//     use SoftDeletes;

//     protected $dates = ['deleted_at'];
// }
// With these steps, when you call the delete () method on a model instance, it will be soft deleted by setting the deleted_at column to the current timestamp.

//     withTrashed():
// The withTrashed() method is used to retrieve both the non - deleted and soft - deleted records from a table.By default, Laravel's queries exclude soft-deleted records. However, you can include them in your queries using withTrashed().
// Here's an example:


// $records = YourModel:: withTrashed() -> get();
// In the above code, the withTrashed() method is called before get(), which retrieves all records, including the soft - deleted ones.

//     restore():
// The restore() method is used to restore a soft - deleted record.Once a record is soft deleted, you can use restore() to bring it back to the active state.

// $record = YourModel:: withTrashed() -> find($id);
// $record -> restore();
// In the above code, find($id) retrieves the soft - deleted record with the given ID, and restore() restores it.

//     forceDelete():
// The forceDelete() method is used to permanently delete a soft - deleted record from the database.Unlike delete (), which performs a soft delete, forceDelete() removes the record entirely.

// $record = YourModel:: withTrashed() -> find($id);
// $record -> forceDelete();
// In the above code, find($id) retrieves the soft - deleted record, and forceDelete() removes it permanently.

// That covers the basic usage of soft deletes and related methods in Laravel's Eloquent ORM. Remember to include the SoftDeletes trait in your models, specify the deleted_at column, and use the provided methods to handle soft deletes as needed.





