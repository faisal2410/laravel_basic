/*
👉 Conditional Clause :
👉  DB::table('posts')
            ->when(function ($query) {
                return $query->where('is_published', true);
            })->get();


*/





// In Laravel, the when() method is used to conditionally apply constraints to a query based on a given condition.It allows you to dynamically add query constraints without writing repetitive if statements.

// The when() method takes two arguments: the condition and a closure that defines the constraints to be applied when the condition is true.If the condition evaluates to false, the closure will not be executed, and the query will continue without any additional constraints.

//     Here's an example to demonstrate how the when() method can be used:


// $users = DB:: table('users')
//     -> when($request -> has('active'), function ($query) {
//         return $query -> where('active', true);
//     })
//     -> when($request -> has('role'), function ($query) use($request) {
//         return $query -> where('role', $request -> input('role'));
//     })
//     -> get();

// In this example, we have a query to fetch users from the users table.We want to conditionally apply constraints based on the presence of certain parameters in the request.

// The first when() method checks if the active parameter exists in the request.If it does, the closure will be executed, and a where condition will be added to the query to filter active users.

// The second when() method checks if the role parameter exists in the request.If it does, the closure will be executed, and a where condition will be added to the query to filter users based on their role.

// By using the when() method, we can avoid writing multiple if statements and dynamically apply constraints based on the conditions provided.This leads to more readable and maintainable code.

//     It's important to note that the when() method is available on both the Illuminate\Database\Query\Builder and Illuminate\Database\Eloquent\Builder classes, so you can use it with both raw queries and Eloquent queries.







