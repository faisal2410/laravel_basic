/*
In Laravel, Resources are a powerful way to transform and format data before sending it as a response. They allow you to define the structure and presentation of your API resources in a consistent and reusable manner.

Here's an example to demonstrate the concept of Resources in Laravel:

Let's assume we have a Task model that represents tasks in our application. To create a resource for the Task model, we can use the make:resource Artisan command:

php artisan make:resource TaskResource
This command generates a new resource class in the app/Http/Resources directory. You can define how the data should be transformed and presented in this class.

Once the TaskResource class is generated, you can define its structure and transformation logic. Here's an example implementation:

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
// public function toArray($request) {
//     return [
//         'id' => $this -> id,
//         'name' => $this -> name,
//         'is_completed' => (bool) $this -> is_completed,
//         'created_at' => $this -> created_at,
//         'updated_at' => $this -> updated_at,
//     ];
// }
// }

// In the TaskResource class, we extend the JsonResource class provided by Laravel.This base class provides helpful methods for transforming and formatting the data.

// The toArray() method is the most important method in a resource class. It defines how the data should be transformed into an array structure.In this example, we include the id, name, is_completed, created_at, and updated_at attributes of the Task model.

//     Now, let's use the TaskResource in a controller to transform a Task model instance before returning it as a response. Here's an example:

// use App\Http\Resources\TaskResource;
// use App\Models\Task;

// class TaskController extends Controller {
//     public function show($id) {
//         $task = Task:: find($id);

//         return new TaskResource($task);
//     }
// }
// In the show() method of the TaskController, we retrieve a Task model instance from the database and then pass it to the TaskResource class. By wrapping the model instance with the TaskResource, we instruct Laravel to transform the data according to the resource's definition before returning the response.

// When a request is made to the show() method, Laravel automatically applies the transformation defined in the TaskResource class. The response will be formatted as an array structure like this:

// {
//     "id": 1,
//         "name": "Example Task",
//             "is_completed": true,
//                 "created_at": "2022-01-01 12:00:00",
//                     "updated_at": "2022-01-02 09:30:00"
// }
// By using Resources in Laravel, you can easily customize the output format of your API responses.Resources provide a consistent and reusable way to transform data, allowing you to separate the data representation from the models themselves.

// I hope this explanation helps you understand the concept of Resources in Laravel.







