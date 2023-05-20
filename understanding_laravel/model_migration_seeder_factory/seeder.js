/*
Seeders are used for populating the database with initial or dummy data. They allow you to insert records into database tables automatically.

Here's a step-by-step guide on using seeders in Laravel:

Create a Seeder:
In Laravel, seeders are typically stored in the database/seeders directory. To create a new seeder, use the make:seeder Artisan command:

php artisan make:seeder UsersTableSeeder
This command will generate a new seeder file named UsersTableSeeder.php.

Define the Seeder:
Open UsersTableSeeder.php and import the necessary classes at the top of the file. Then, within the run method, use the Eloquent ORM to insert records into the users table.

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => bcrypt('password'),
        ]);

        User::create([
            'name' => 'Jane Smith',
            'email' => 'janesmith@example.com',
            'password' => bcrypt('password'),
        ]);

        // You can create more users or insert other records as needed
    }
}
In this example, we're using the create method of the User model to insert two user records into the users table. You can add more records or insert data into other tables based on your application's requirements.

Run the Seeder:
To execute the seeder and populate the database with the defined records, you can use the db:seed Artisan command:

php artisan db:seed --class=UsersTableSeeder
Running this command will invoke the run method within the UsersTableSeeder class and insert the defined records into the database.

Note: By default, the DatabaseSeeder.php file, located in the database/seeders directory, is used as the entry point for running all the seeders. It can be used to call multiple seeders at once.

Running Multiple Seeders:
To run multiple seeders, you can define the seeder classes to be executed within the DatabaseSeeder.php file. For example:

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            ProductsTableSeeder::class,
            // Add more seeders here if needed
        ]);
    }
}
In this example, we're calling the UsersTableSeeder and ProductsTableSeeder to populate both the users and products tables.

Running All Seeders:
To run all seeders at once, you can simply use the db:seed Artisan command without specifying a specific seeder class:

php artisan db:seed
Running this command will execute the run method of all seeders defined within the DatabaseSeeder.php file.

That's it! Now you have a basic understanding of how to use seeders in Laravel to populate the database with initial or dummy data. Seeders are particularly useful for setting up sample data for testing or creating default records for your application.







*/ 