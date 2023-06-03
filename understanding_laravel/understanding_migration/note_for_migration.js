/*
1. php artisan make:migration create_posts_table
2. php artisan migrate
3. php artisan migrate:status
4. php artisan migrate --pretend // we should run it before migrate
5. php artisan migrate:reset  //rollback all the database migrations and reset the database to its initial state.
6. php artisan migrate --force  //This command will execute the migrations without any confirmation prompt, allowing the migrations to run in a production environment.

7. php artisan migrate:rollback
8. php artisan migrate:rollback --step=2
9. php artisan migrate:refresh //refresh the database by rolling back all migrations and then re-running them. It effectively resets the database to its initial state and re-applies all migrations.
10.php artisan migrate:refresh --step=2

11. php artisan migrate:fresh  //This command will drop all tables from the database and then re-run all migrations using the migrate command. It effectively resets the database and applies all migrations from the beginning.

12. php artisan make:migration add_soft_deletes_in_posts_table --table=posts

13. php artisan make:migration rename_description_to_content_on_posts_table --table=posts
14. composer require doctrine/dbal //for renaming we need to install this package
15. php artisan make:migration drop_deleted_at_from_posts_table --table=posts

*/
