/*

👌Migration Commands
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

/*
👌 Factory/Seeder Commands
1. php artisan make:factory PostFactory
2. php artisan make:model Post -f
3. php artisan make:seeder PostSeeder
4. php artisan db:seed --class=PostSeeder
5. php artisan db:seed
6. php artisan tinker
7. App\Models\Post::factory(5)->create()
8. php artisan db:seed
9. php artisan migrate --seed
10 php artisan migrate:refresh --seed
*/

/*
👌 Primary and Foreign Key
1. php artisan migrate:refresh
2.php artisan db:table posts
3. php artisan tinker
4.User::factory(5)->create()
5. App\Models\User::factory(10)->create()
6. php artisan make:controller PostsController --resource

*/

/*
👌Query Builder :

👌Laravel's query builder is a set of classes and methods that provide
a simple and elegant way to interact with databases
👉In Laravel, the get() method is used to retrieve multiple records from the database table. It is commonly used when you need to fetch a collection of data that matches certain criteria.

1.$posts= DB::table('posts')->select('excerpt','description')->get();

2.$posts= DB::table('posts')->select('is_published')->distinct()->get();

3. $posts= DB::table('posts')->select('is_published');
        $added =$posts->addSelect('title')->get();
        dd($added);

💘First, value and find method (these methods used for retrieve a single row):
The first() method return an object, which can be accessed using the arrow notation
The value() method is used to retrieve a single value from a result set.
The find() method is used to retrieve a single record by its primary key.
................................x...........................

4.$posts=DB::table('posts')->where('id',2)->first();
    dd($posts);

4a.$posts=DB::table('posts')->where('id',2)->first();
    dd($posts->description);

5. $posts=DB::table('posts')->where('id',2)->value('description');
    dd($posts);

6.  $posts=DB::table('posts')->find(2);
    dd($posts);

💘Retrieving a list of column values (pluck method):
The pluck() method is used to retrieve a single columns value from the
first result of a query.


7. $posts=DB::table('posts')->pluck('title');
    dd($posts);

💘 Inserts through the query builder(insert method)
💘insertOrIgnore() method is a method that allows you to insert data
into a database table only if the data doesn't already exist in the table
💘The insertGetId() method allows you to insert a new record into a table and
retrieve its id in a single query


8.  $posts = DB::table( 'posts' )->insert( [
            'user_id' => 1,
                 'title' => 'Insert through the DB facade 1',
                'slug' => 'insert-through-the-db-facade-1',
               'excerpt' => 'excerpt',
                'description' => 'description',
                'is_published' => true,
                'min_to_read' => 2,
         ] );
         dd($posts);


9. $posts = DB::table( 'posts' )->insert( [
             [
                'user_id' => 1,
                'title' => 'Insert through the DB facade 3',
                'slug' => 'insert-through-the-db-facade-3',
                'excerpt' => 'excerpt',
                'description' => 'description',
                'is_published' => true,
                'min_to_read' => 2,
            ],
            [
                'user_id' => 1,
                'title' => 'Insert through the DB facade 4',
                'slug' => 'insert-through-the-db-facade-4',
                'excerpt' => 'excerpt',
                'description' => 'description',
                'is_published' => true,
                'min_to_read' => 2,
            ]
        ] );
        dd($posts);

10. $posts=DB::table( 'posts' )->insertOrIgnore( [
    [
        'user_id'      => 1,
        'title'        => 'X',
        'slug'         => 'x',
        'excerpt'      => 'excerpt',
        'description'  => 'description',
        'is_published' => true,
        'min_to_read'  => 2,
    ],
    [
        'user_id'      => 1,
        'title'        => 'Insert through the DB facade 4',
        'slug'         => 'insert-through-the-db-facade-4',
        'excerpt'      => 'excerpt',
        'description'  => 'description',
        'is_published' => true,
        'min_to_read'  => 2,
    ],
] );
dd($posts);


11.  upsert()
        $posts = DB::table('posts')->upsert([
            [
                'user_id' => 1,
                'title' => 'X',
                'slug' => 'x',
                'excerpt' => 'Updated excerpt ',
                'description' => 'Updated description',
                'is_published' => true,
                'min_to_read' => 2,
            ],
        ], ['title', 'slug']);

        dd($posts)

12.insertGetId();
$posts=DB::table( 'posts' )->insertGetId( [
    'user_id'      => 1,
    'title'        => 'Insert through the insertGetId',
    'slug'         => 'insert-through-the-insertgetid',
    'excerpt'      => 'excerpt',
    'description'  => 'description',
    'is_published' => true,
    'min_to_read'  => 2,
] );

dd($posts);

13.Update one row
 $updated=DB::table( 'posts' )
     ->where( 'id', 2 )
    ->update( [
        'excerpt'     => 'Laravel 10',
        'description' => 'Laravel 10',
    ] );

 dd($updated);

 14.Update multiple rows
$updated=DB::table( 'posts' )
    ->where( 'id', '<', 5 )
    ->update( [
        'excerpt'     => 'Laravel 10',
        'description' => 'Laravel 10',
    ] );

dd($updated);


15.// Update multiple conditions
        DB::table('posts')
            ->where('id', 3)
            ->orWhere('id', 4)
            ->update([
                'excerpt' => 'Laravel 10x',
                'description' => 'Laravel 10x'
            ]);

16.// Increment
        DB::table('posts')
            ->where('id', 3)
            ->increment('min_to_read');
16a.// Increment by 10
        DB::table('posts')
            ->where('id', 3)
            ->increment('min_to_read',10);

17. //Decrement
        DB::table('posts')
            ->where('id', 3)
            ->decrement('min_to_read');
17a. //Decrement by 10
        DB::table('posts')
            ->where('id', 3)
            ->decrement('min_to_read',10);

18.//Increment or decrement multiple columns
        DB::table('posts')
            ->incrementEach(['min_to_read', 'lines']);

19.// updateOrInsert
        DB::table('posts')
            ->updateOrInsert(
                ['excerpt' => 'Laravel 10x'],
                ['id' => 3]
            );


20.// Delete one row
        DB::table('posts')
            ->where('id', 3)
            ->delete();

21.//Delete based on multiple conditions
        DB::table('posts')
            ->where('id', 3)
            ->where('title', 'x')
            ->delete();

22. //Delete all records
        DB::table('posts')
            ->truncate();

👉Aggregate Methods

23. // Count Rows
        DB::table('posts')->count();
        DB::table('posts')->where('is_published', true)->count();

23.// Sum
        DB::table('posts')->sum('min_to_read');

24.// Average
        DB::table('posts')->avg('min_to_read');
        DB::table('posts')->where('is_published', true)->avg('min_to_read');

25.//  Max
        DB::table('posts')->where('is_published', true)->max('min_to_read');

26.// Min
        DB::table('posts')->where('is_published', true)->min('min_to_read');
27.// whereNot()
        DB::table('posts')->whereNot('min_to_read', 5)->get();
        DB::table('posts')->whereNot('min_to_read', '>', 1)->get();

28.// orWhereNot()
        DB::table('posts')
            ->where('min_to_read', '>', 5)
            ->orWhereNot('is_published', true)
            ->get();

29. // exists()
        if(DB::table('posts')->where('id', 343543)->exists()) {
            echo 'Woohoo, I found a match';
        } else {
            echo 'Ahh, I have not found a match';
        }

30. doesntExist()
        if(DB::table('posts')->where('id', 343543)->doesntExist()) {
            echo 'Woohoo, I found a match';
        } else {
            echo 'Ahh, I have not found a match';
        }

31. // whereBetween()
        DB::table('posts')->whereBetween('min_to_read', [1, 5])->get();

32. //whereNotBetween()
        DB::table('posts')->whereNotBetween('min_to_read', [1, 5])->get();

*/





/*
👉 Query Builder Advance Topics
👉php artisan make:migration set_description_to_text_on_posts_table --table=posts //this is for fulltext index part

👉 Database Transactions

php artisan migrate:refresh
php artisan tinker
User::factory(20)->create()
App\Models\Post::factory(50)->create()

33. Database Transactions:

DB::transaction(function () {
            DB::table('users')
                ->where('id', 1)
                ->decrement('balance', 20);

            DB::table('users')
                ->where('id', 2)
                ->increment('balance', 20);
        });

34. Pessimistic Locking :

  DB::transaction(function () {

👉way1
            DB::table('users')
                ->where('id', 1)
                ->lockForUpdate()
                ->decrement('balance', 100);

            DB::table('users')
                ->where('id', 2)
                ->lockForUpdate()
                ->increment('balance', 100);

👉way2

             DB::table('users')
              ->where('id', 1)
              ->sharedLock()
              ->decrement('balance', 100);

        });

35. 👉 Chunking Data
👉The chunk() method retrieves data in smaller more manageable "chunks" rather than
getting all data and chunking it afterwards

 DB::table('posts')
            ->orderBy('id')
            ->chunk(150, function($posts) {
                foreach ($posts as $post) {
                    echo $post->title;
                }
            });

36. 👉 Streaming Results Lazily

 👉 lazy():The lazy() method is used to retrieve a large number of records without overwhelming
the server's memory

        DB::table('posts')
            ->orderBy('id')
            ->lazy()->each(function($post) {
                echo $post->title;
            });


👉 lazilyById()

        DB::table('posts')
            ->where('id', 1)
            ->lazyById()
            ->first();

37.👉Raw Methods:

👉 selectRaw()
        DB::table('posts')
            ->selectRaw('count(*) as post_count')
            ->first();

👉 whereRaw()
        DB::table('posts')
            ->whereRaw('created_at > NOW() - INTERVAL 1 DAY')
            ->get();

👉 havingRaw()
        DB::table('posts')
            ->select('user_id', DB::raw('SUM(min_to_read) as total_time'))
            ->groupBy('user_id')
            ->havingRaw('SUM(min_to_read) > 10')
            ->get();

👉orderByRaw()
        DB::table('posts')
            ->orderByRaw('created_at DESC')
            ->get();

👉groupByRaw()
        DB::table('posts')
            ->select('user_id', DB::raw('AVG(rating) as avg_rating'))
            ->groupByRaw('user_id')
            ->get();
38. 👉 Ordering through the query builder:

👉The orderBy() method allows you to sort your query results by a specific column
in ascending or descending order.
👉The latest() and oldest() methods allows you to sort your query results by the
created_at timestamp in descending and ascending order

👉one orderBy()
        DB::table('posts')
            ->orderBy('title', 'desc')
            ->get();

👉 multiple orderBy() methods
        DB::table('posts')
            ->orderBy('title')
            ->orderBy('min_to_read')
            ->get();

👉latest()
        DB::table('posts')
            ->latest()
            ->get();

👉oldest()
        DB::table('posts')
            ->oldest()
            ->get();


39. 👉 Full text Indexes :

    👉 We have the wherefulltext() and orWhereFullText() methods, which both are
       used to add full text "where" clauses to a query for columns that have
       full text indexes.

    👉 "Natural Language Mode" is a feature of full text search that allows
       users to search for words or phrases using natural language syntax.

    👉 php artisan make:migration set_description_to_text_on_posts_table --table=posts

 👉 whereFullText()
        DB::table('posts')
            ->whereFullText('description', 'quo')
            ->get();

👉 orWhereFullText()
        DB::table('posts')
            ->whereFullText('description', 'quo')
            ->orWhereFullText('description', 'Doloribus')
            ->get();

40.👉 Limit and Offset through query builder :
👉 The limit() method is used to limit the number of records that are
returned from a query.
👉 The offset() method is used to skip a specified number of records from
the begining of a query.

👉limit()

        DB::table('posts')->limit(10)->get();

👉 offset()

        DB::table('posts')->offset(10)->limit(10)->get();


41.👉 Conditional Clause :
👉  DB::table('posts')
            ->when(function ($query) {
                return $query->where('is_published', true);
            })->get();



42.👉Removing Existing Ordering :
👉$posts = DB::table('posts')
            ->orderBy('is_published');

        $unorderedPosts = $posts->reorder()->get();

        dd($unorderedPosts);


👉  $posts = DB::table('posts')
            ->orderBy('is_published');

$unorderedPosts = $posts->reorder('title', 'desc')->get();
    dd($unorderedPosts);

42. 👉 Paginate Method
👉$posts = DB::table( 'posts' )->paginate( 10 );
  dd($posts);

👉 $posts = DB::table( 'posts' )->paginate( 10, ['*'], 'p', 1 );
dd($posts);

👉 $posts = DB::table( 'posts' )->paginate( 10, ['*'], 'p', 1 );

   return view( 'posts.index', compact( 'posts' ) );

👉 $posts = DB::table( 'posts' )->paginate( 10);

   return view( 'posts.index', compact( 'posts' ) );


43.👉simplePaginate() Method :

👉 $posts = DB::table('posts')->simplePaginate(10);

        return view('posts.index', compact('posts'));


44.👉 cursorPaginate() Method :

👉$posts = DB::table('posts')
            ->orderBy('id')
            ->cursorPaginate(10);

        return view('posts.index', compact('posts'));


*/


/*
👉Eloquent ORM

👉In the Post Model

✅Change table
     protected $table = 'users';

✅Change primary key
    protected $primaryKey = 'slug';

✅Disable auto increment of the primary key
    public $incrementing = false;

✅Change data type of the primary key
    protected $keyType = 'string';

✅Disable timestamps on a model
    public $timestamps = false;

✅Change dateTime format of timestamps
    public $timestamps = false;

✅Rename the created_at and updated_at
    const CREATED_AT = 'date_created_at';
    const UPDATED_AT = 'date_updated_at';

✅Add default attributes to your model ( recommended doing this on database-level
    protected $attributes = [
        "user_id" => 1,
        "is_published" => false,
        "description" => "Please add your description right here.."
    ];

✅Change default database connection
    protected $connection = 'sqlite';

👉 In the User Model :

✅ The attributes that are mass assignable.

    protected $fillable = [
    'name',
    'email',
    'password',
];


✅ The attributes that should be hidden for serialization.

    protected $hidden = [
    'password',
    'remember_token',
];

✅The attributes that should be cast.

    protected $casts = [
    'email_verified_at' => 'datetime',
];

*/



/*
✅Fillable Property

     The `$fillable` property is an array that lists the fields that are allowed to be mass assigned.
     Any field not listed in the `$fillable` array will not be allowed to be mass assigned.
     This is useful when you want to allow the user to set specific fields of the model.

    protected $fillable = [
    "user_id",
    "title",
    "slug",
    "excerpt",
    "description",
    "is_published",
    "min_to_read"
];


  ✅ Guarded Property
     The $guarded property is an array that lists the fields that are not allowed to be mass assigned.
     Any field not listed in the $guarded array will be allowed to be mass assigned.
     This is useful when you want to prevent the user from setting specific fields of the model.

    protected $guarded = ['is_published'];


*/

/*
👉 Building Queries:

✅ Post::where('is_published',true)->get();

✅ Post::where('is_published',true)
->where('min_to_read','>',5)
->orderBy('title','desc')
->get();

✅ Post::where('is_published',true)
->where('min_to_read','>',5)
->orderBy('title','desc')
->get()
->count();

✅Post::where('is_published',true)
  ->cursorPaginate(10);

✅ Find() method is used to retrieve a specific row from the database based
on the primary key
✅ The first() method is needed because we want to find one row based on a condition
✅ The firstWhere() method is used to retrieve a specific post by a custom attribute
✅ The firstOrFail() method is a method used to retrieve a specific row from
the database based on a custom attribute.

👉Retrieve based on the primary key (RETURNS NULL)
        Post::find(1000);

👉Retrieve based on the primary key (RETURNS ERROR)
        Post::findOrFail(1000);

👉 Retrieve based on a condition
      ✅  Post::where('slug', 'ullam-rerum-rem-esse-voluptatem-non-necessitatibus-iste-hic')
        ->first();

      ✅  Post::firstWhere('slug', 'est-cum-odit-tempora-voluptates-quis-eligendi');

👉Retrieve a specific row based on a custom attribute
        Post::where('slug', 'est-cum-odit-tempora-voluptates-quis-eligendi')
        ->firstOrFail();


*/

/*
👉 Inserting/Creating Models :
✅ Model instance refers to an instance of a model class, which is a representation
of a database table

 ✅ Model Instance

        $post = new Post;

        $post->user_id = 17;
        $post->title = "Test Title";
        $post->slug = "test-title";
        $post->excerpt = "woohoo";
        $post->description = "Test";
        $post->is_published = true;
        $post->min_to_read = 3;
        $post->save();

✅Using the fill() method

        $post = new Post;
        $post->fill([
            "user_id" => 17,
            "title" => "Fill method",
            "slug" => "fill-method",
            "excerpt" => "fill method",
            "description" => "fill method",
            "is_published" => true,
            "min_to_read" => 3
        ]);

✅ Using Eloquent magic with the create() method

        Post::create([
            "user_id" => 17,
            "title" => "Eloquent is Awesome",
            "slug" => "eloquent-is-awesome",
            "excerpt" => "Eloquent is awesome!!",
            "description" => "Even more awesome!!",
            "is_published" => true,
            "min_to_read" => 3
        ]);

✅ Using the make() method
        Post::make([
            "user_id" => 17,
            "title" => "Eloquent is Awesome3",
            "slug" => "eloquent-is-awesome3",
            "excerpt" => "Eloquent is awesome!!",
            "description" => "Even more awesome!!",
            "is_published" => true,
            "min_to_read" => 3
        ]);



*/


/*
👉 Retrieving all models :

 ✅Retrieve all models
        Post::all();

✅ Retrieve the count of all Models
        Post::all()->count();

✅Paginate through the Query Builder
        Post::paginate(25);
        Post::simplePaginate(25);
        Post::cursorPaginate(25);

*/



