// global scopes in Laravel's Eloquent ORM and provide you with some code examples. Global scopes are a convenient feature that allows you to define constraints that are automatically applied to all queries performed on a specific model.

// When using global scopes, you define the constraints in a dedicated class that extends Laravel's Illuminate\Database\Eloquent\Scope class. Let's walk through an example to demonstrate how to implement global scopes in Laravel.

//     Step 1: Create a Global Scope Class
// First, create a new PHP class that represents your global scope.This class should implement the Illuminate\Database\Eloquent\Scope interface and define a apply method.The apply method receives two arguments: the Illuminate\Database\Eloquent\Builder instance and the Illuminate\Database\Eloquent\Model instance.

//     Here's an example of a global scope class named ActiveScope that applies a constraint to retrieve only active records:


// use Illuminate\Database\Eloquent\Builder;
// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Scope;

// class ActiveScope implements Scope {
//     public function apply(Builder $builder, Model $model) {
//         $builder -> where('active', true);
//     }
// }

// In this example, the apply method adds a where clause to the query, restricting the results to only those where the active column is set to true.

//     Step 2: Register the Global Scope
// Next, you need to register the global scope with your model.Open your model class (e.g., App\Models\User) and add a boot method.In this method, you can call the addGlobalScope method to register your global scope.

 
// use App\Scopes\ActiveScope;
// use Illuminate\Database\Eloquent\Model;

// class User extends Model {
//     protected static function boot() {
//         parent:: boot();

//         static:: addGlobalScope(new ActiveScope());
//     }
// }


// In this example, the boot method adds the ActiveScope global scope to the User model.From now on, whenever a query is performed on the User model, the global scope's constraint will be applied.

// Step 3: Usage and Testing
// You can now use your model as usual, and the global scope will be automatically applied.Here's an example of retrieving all active users:


// $activeUsers = User:: all();
// In this case, the global scope will add the where clause to the query, ensuring that only active users are returned.

// You can also temporarily disable a global scope for a specific query by using the withoutGlobalScope method:


// $inactiveUsers = User:: withoutGlobalScope(ActiveScope:: class) -> get();
// In this example, the withoutGlobalScope method allows you to bypass the ActiveScope and retrieve all users, including inactive ones.

//     That's it! You now understand how to implement and use global scopes in Laravel's Eloquent ORM.Remember, global scopes are powerful tools for adding constraints to all queries on a specific model, making it easier to enforce certain conditions consistently throughout your application.





