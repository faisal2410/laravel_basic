<?php
/*
Explain Illuminate in laravel with code example 
In Laravel, Illuminate is the underlying set of libraries that provide the core functionality of the framework. It includes components for database management, routing, middleware, authentication, testing, and more. Illuminate is designed to be modular, allowing developers to use only the components they need for their project.

Here is an example of using Illuminate's database component to retrieve data from a MySQL database:

First, you will need to set up a connection to the database in the config/database.php file:

php
Copy code
<?php

return [

    'default' => 'mysql',

    'connections' => [

        'mysql' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'my_database',
            'username' => 'my_username',
            'password' => 'my_password',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
            'engine' => null,
        ],

    ],

];
Then, in your code, you can use the DB facade to interact with the database:

php
Copy code
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MyController extends Controller
{
    public function myMethod()
    {
        $users = DB::table('users')->get();

        foreach ($users as $user) {
            echo $user->name;
        }
    }
}
In this example, we are using the get() method to retrieve all records from the users table, and then looping through the results to output each user's name.

Note that you can also use Illuminate's ORM, Eloquent, to interact with the database. Eloquent provides a more expressive and intuitive syntax for working with database records, and includes features like model relationships and attribute casting. Here is an example of using Eloquent:

php
Copy code
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
}
In this example, we have defined a User model with the $fillable property to specify which attributes can be mass assigned. Then, in our controller, we can use the model to interact with the database:

php
Copy code
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class MyController extends Controller
{
    public function myMethod()
    {
        $users = User::all();

        foreach ($users as $user) {
            echo $user->name;
        }
    }
}
In this example, we are using the all() method to retrieve all records from the users table using the User model. The syntax for querying the database using Eloquent is similar to using the DB facade, but provides additional features and a more expressive syntax.






*/ 