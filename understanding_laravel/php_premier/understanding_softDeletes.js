/*
The SoftDeletes feature in Laravel allows you to perform "soft" deletion of records in a database. Soft deletion means that instead of permanently deleting a record, it is marked as deleted by setting a flag in the database. This allows for easy retrieval of deleted records if needed.

Here's an example to demonstrate the concept of SoftDeletes in Laravel:

First, you need to add the deleted_at column to the table associated with the model. This column will be used to store the timestamp when a record is soft deleted. You can achieve this by creating a new migration or modifying an existing one. For example, let's assume we have a tasks table:

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDeletedAtColumnToTasksTable extends Migration
{
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->timestamp('deleted_at')->nullable();
        });
    }

    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn('deleted_at');
        });
    }
}
In the above migration, we add a nullable deleted_at column to the tasks table. This column will be used to store the deletion timestamp when a task is soft deleted.

Next, in the model class associated with the table, you need to use the SoftDeletes trait:

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;

    // Rest of the class implementation
}
By including the SoftDeletes trait in the Task model, you enable the soft deletion functionality for that model.

Once the SoftDeletes trait is added, you can start using the soft deletion features. For example, to soft delete a record, you can call the delete() method on an instance of the model:

$task = Task::find(1);
$task->delete();
In the above code, we retrieve a task with the ID of 1 from the database and then call the delete() method on it. This will soft delete the task, setting the deleted_at timestamp for that record.

To retrieve both non-deleted and soft-deleted records, you can use the withTrashed() method on a query:

$tasks = Task::withTrashed()->get();
The withTrashed() method retrieves all records, including soft-deleted ones. This allows you to access both active and deleted records.

If you want to retrieve only the soft-deleted records, you can use the onlyTrashed() method:

$deletedTasks = Task::onlyTrashed()->get();
The onlyTrashed() method filters the query to return only the soft-deleted records.

To restore a soft-deleted record, you can use the restore() method:

$task = Task::withTrashed()->find(1);
$task->restore();
The restore() method restores a soft-deleted record, removing the deleted_at timestamp and making it active again.

Using the SoftDeletes feature in Laravel allows you to retain deleted records in the database while providing the flexibility to restore them if needed. It provides a simple and convenient way to handle soft deletion functionality in your application.

I hope this explanation helps you understand the
*/ 