/*

The composer create-project command is used to create a new project in a specified directory using a package from the Packagist repository. In this case, composer create-project laravel/laravel example-app will create a new Laravel project called "example-app" in a directory called example-app located in the current working directory.

👌By default, composer create-project uses the latest stable version of the package, but you can specify a specific version or tag by appending it to the package name, like laravel/laravel:8.0.0.

When you run this command, Composer will download the Laravel framework and all its dependencies into the example-app directory in your current working directory. It will then generate some default files and directories, including:

❤✔🎁
app: This directory contains the core Laravel application files, including the config, database, Http, and Providers subdirectories.

bootstrap: This directory contains the app.php file, which is the starting point for the Laravel application.

config: This directory contains the configuration files for the Laravel application, including app.php, database.php, and mail.php.

database: This directory contains the database migration files and seeders for the Laravel application.

public: This directory contains the publicly accessible files for the Laravel application, including the index.php file and any assets like images, stylesheets, or JavaScript files.

resources: This directory contains the views, language files, and assets that will be compiled and used by the Laravel application.

routes: This directory contains the route definitions for the Laravel application.

storage: This directory contains the application's logs, cached files, and any other files that should not be publicly accessible.

tests: This directory contains the test files for the Laravel application.

In addition to the default files and directories, Composer will also create some additional files:

composer.json: This file contains the dependencies and other metadata for the project, including the Laravel framework and any additional packages that you may add later.

composer.lock: This file contains the exact versions of all the packages and their dependencies that were installed by Composer.
🎁✔❤👀

After running composer create-project laravel/laravel example-app, you will have a fully functional Laravel project that you can customize to fit your specific needs and requirements. You can then use Composer to add additional packages and libraries as needed, or modify the existing ones, by editing the composer.json file and running composer install or composer update.

*/


/*
Here are some additional details about the composer create-project laravel/laravel example-app command:

The laravel/laravel package is the official Laravel application skeleton, which includes all the files and directories needed to create a new Laravel project. It also includes some pre-configured settings and default values that make it easy to get started with Laravel.

The example-app parameter is the name of the directory where the new Laravel project will be created. You can choose any name you like, as long as it's a valid directory name and doesn't already exist in your current working directory.

The composer create-project command is a shortcut for running composer init followed by composer require and composer install. It creates a new project directory, initializes a new composer.json file, adds the specified package as a dependency, and installs all the required packages and their dependencies.

The create-project command uses the --prefer-dist option by default, which tells Composer to download the package as a pre-built archive rather than cloning the Git repository. This can save time and bandwidth, especially for larger packages like Laravel.

👌If you want to specify a different version of Laravel or use a different package altogether, you can modify the command accordingly. For example, composer create-project --prefer-dist laravel/laravel:^7.0 example-app would create a new Laravel 7.x project instead of the latest version, 

👌while composer create-project --prefer-dist symfony/skeleton my-project would create a new Symfony project instead of a Laravel project.

After creating the new project, you can run the development server using the php artisan serve command,
 which will start a local web server at http://localhost:8000 by default. You can then open your web browser and navigate to the URL to see the default Laravel welcome page. 

 From there, you can start customizing your Laravel project by modifying the routes, controllers, views, and other files as needed.
*/

// ----------------------*******************************----------------------------------------------------



/*

composer global require laravel/installer is a Composer command used to install the Laravel installer globally on your system.

The Laravel installer is a command-line interface tool that allows you to create new Laravel projects quickly and easily. When you install the Laravel installer globally, you can run the laravel command from anywhere on your system to create a new Laravel project.

👌When you run composer global require laravel/installer, Composer will download and install the Laravel installer package and all of its dependencies. It will then add the👀 ~/.composer/vendor/bin 👀 directory to your system's PATH environment variable, which allows you to run the laravel command from anywhere on your system.

After installing the Laravel installer globally, you can create a new Laravel project by running the following command:


👌laravel new project-name

This will create a new Laravel project with the specified name in the current directory. The Laravel installer will download and install all the necessary dependencies and set up the project's file structure.

Overall, installing the Laravel installer globally with composer global require laravel/installer is a convenient way to create new Laravel projects quickly and easily from anywhere on your system.







*/ 

