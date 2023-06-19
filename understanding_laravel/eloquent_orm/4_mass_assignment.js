// 👉Mass assignment in Laravel Eloquent Models and provide you with some code examples.

// In Laravel, mass assignment allows you to easily assign multiple attributes to a model at once using an array.It's a convenient way to quickly set multiple properties of a model in a single line of code. However, it's important to understand how to properly use mass assignment to ensure security and avoid potential vulnerabilities.

// To enable mass assignment on a model, you need to specify the fillable or guarded properties.The fillable property is an array that contains a list of attributes that are allowed to be mass assigned, while the guarded property contains attributes that are not allowed to be mass assigned.

//     Here's an example of how to use mass assignment in Laravel Eloquent Models:

// Define the fillable attributes in your model:

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $fillable = [
//         'name', 'email', 'password',
//     ];

//     // ...
// }
// In the example above, the name, email, and password attributes are fillable, meaning they can be assigned using mass assignment.

//     Now, you can create a new instance of the model and set multiple attributes using mass assignment:

// $user = User:: create([
//     'name' => 'John Doe',
//     'email' => 'johndoe@example.com',
//     'password' => bcrypt('password123'),
// ]);
// In the code above, we're using the create method, which accepts an array of attributes to be assigned to the model. This will create a new user instance and assign the values specified in the array.

// It's worth noting that the create method will automatically save the model to the database. If you want to perform additional operations on the model before saving, you can use the fill method instead:


// $user = new User();
// $user -> fill([
//     'name' => 'John Doe',
//     'email' => 'johndoe@example.com',
//     'password' => bcrypt('password123'),
// ]);
// $user -> save();
// By using the fill method, you can set the attributes without saving the model immediately.

//     It's important to keep security in mind when using mass assignment. To protect against unwanted mass assignment, you can use the guarded property instead of fillable. Attributes listed in the guarded property will be excluded from mass assignment.


// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected $guarded = ['admin'];

//     // ...
// }
// In the example above, the admin attribute is guarded, meaning it cannot be mass assigned.This can be useful for sensitive attributes that should only be assigned through specific methods.

//     That's a brief explanation of mass assignment in Laravel Eloquent Models. Remember to properly configure the fillable and guarded properties to ensure the security of your application.






