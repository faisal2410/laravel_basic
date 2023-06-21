// In Laravel's Eloquent ORM, there are several attribute-related methods that you can use to track changes and determine the state of an attribute. These methods include isDirty(), isClean(), and wasChanged(). Let's explore each of these methods in detail:

// isDirty(): This method allows you to check if an attribute has been modified since the model was loaded or saved.In other words, it determines if the attribute value differs from its original value.The isDirty() method returns a boolean value of true if the attribute has been modified, and false otherwise.

//     Here's an example usage of isDirty():


// $user = User:: find(1);
// $user -> name = 'John Doe';

// if ($user -> isDirty('name')) {
//     // The 'name' attribute has been modified
//     echo "Name has changed!";
// } else {
//     // The 'name' attribute remains the same
//     echo "Name has not changed.";
// }

// In the example above, if the 'name' attribute of the $user model has been modified, it will echo "Name has changed!".

//     isClean(): The isClean() method is the inverse of isDirty().It checks if there have been no changes to the specified attribute.If the attribute is clean, meaning it has not been modified, isClean() returns true; otherwise, it returns false.

//         Here's an example usage of isClean():


// $user = User:: find(1);

// if ($user -> isClean('name')) {
//     // The 'name' attribute has not been modified
//     echo "Name has not changed.";
// } else {
//     // The 'name' attribute has been modified
//     echo "Name has changed!";
// }

// In the example above, if the 'name' attribute of the $user model has not been modified, it will echo "Name has not changed.".

//     wasChanged(): The wasChanged() method checks if an attribute was changed during the current request, regardless of whether it was saved or not.It returns true if the attribute was modified, and false if it remained the same.

//         Here's an example usage of wasChanged():


// $user = User:: find(1);
// $user -> name = 'John Doe';

// if ($user -> wasChanged('name')) {
//     // The 'name' attribute was changed during the current request
//     echo "Name has changed!";
// } else {
//     // The 'name' attribute remained the same during the current request
//     echo "Name has not changed.";
// }


// In the example above, if the 'name' attribute of the $user model was changed during the current request, it will echo "Name has changed!".

// These methods are useful when you need to determine if specific attributes have been modified in your Laravel application.You can use them to perform certain actions or validations based on attribute changes.





