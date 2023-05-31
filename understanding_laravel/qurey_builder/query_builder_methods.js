/*
Laravel provides a powerful and intuitive query builder that allows you to build database queries using a fluent interface. Here are some commonly used query builder methods in Laravel:

select: Specifies the columns to retrieve from the database.
from: Specifies the table to query.
where: Adds a basic where clause to the query.
orWhere: Adds an "or" where clause to the query.
whereIn / whereNotIn: Adds a where clause to check if a column's value is in a given array or not in a given array.
whereNull / whereNotNull: Adds a where clause to check for null values or non-null values.
orderBy: Specifies the column to order the results by.
groupBy: Groups the query results by a column.
having: Adds a "having" clause to the query.
join: Performs an inner join with another table.
leftJoin / rightJoin: Performs a left join or right join with another table.
count: Retrieves the number of rows matching the query.
first: Retrieves the first record matching the query.
get: Retrieves all records matching the query.
insert: Inserts a new record into the database.
update: Updates existing records in the database.
delete: Deletes records from the database.
These are just some of the commonly used query builder methods in Laravel. There are many more methods available that can help you construct complex and powerful database queries. I recommend referring to the official Laravel documentation for a comprehensive list of all query builder methods and their usage: https://laravel.com/docs/query-builder
*/

/*

Here are some additional query builder methods in Laravel:

orWhereIn / orWhereNotIn: Adds an "or where" clause to check if a column's value is in a given array or not in a given array.
whereBetween / whereNotBetween: Adds a where clause to check if a column's value is between two values or not between two values.
whereDate / whereMonth / whereDay / whereYear: Adds a where clause to check for specific dates or parts of a date (month, day, year).
orWhereDate / orWhereMonth / orWhereDay / orWhereYear: Adds an "or where" clause to check for specific dates or parts of a date.
whereColumn: Adds a where clause to compare two columns.
orWhereColumn: Adds an "or where" clause to compare two columns.
selectRaw: Adds a raw select expression to the query.
orderByRaw: Adds a raw order by expression to the query.
groupByRaw: Adds a raw group by expression to the query.
havingRaw: Adds a raw having clause to the query.
joinSub: Performs a join with a subquery.
union: Performs a union query with another query.
exists / doesntExist: Adds a subquery where clause to check for the existence or non-existence of related records.
with: Eager loads relationships for the query.
withCount: Eager loads relationships and includes a count of related records.
pluck: Retrieves a single column's value from the first result of the query.
chunk: Processes the query results in chunks to conserve memory.
These are some additional query builder methods that can help you manipulate and retrieve data from the database in Laravel. Remember to consult the Laravel documentation for detailed explanations and examples of these methods: https://laravel.com/docs/query-builder

*/

/*
Here are a few more query builder methods in Laravel:

orWhereBetween / orWhereNotBetween: Adds an "or where" clause to check if a column's value is between two values or not between two values.
whereTime / orWhereTime: Adds a where clause to check for a specific time.
whereDateNotBetween / orWhereDateNotBetween: Adds a where clause to check if a column's value is not between two dates.
whereNested: Adds a nested where clause.
orWhereNested: Adds a nested "or where" clause.
whereExists / orWhereExists: Adds a where clause to check for the existence of a subquery.
whereNotExists / orWhereNotExists: Adds a where clause to check for the non-existence of a subquery.
orWhereColumnNot: Adds an "or where" clause to compare two columns for inequality.
havingBetween / havingNotBetween: Adds a having clause to check if a column's aggregate value is between two values or not between two values.
havingRaw: Adds a raw having clause to the query.
offset: Sets the number of records to skip from the beginning of the result set.
limit: Limits the number of records to retrieve.
skip: Alias for the offset method.
take: Alias for the limit method.
distinct: Retrieves only distinct records from the query.
sharedLock: Adds a shared lock to the query.
lockForUpdate: Adds a "for update" lock to the query.
These additional query builder methods in Laravel can help you further customize and fine-tune your database queries. Remember to refer to the Laravel documentation for more detailed explanations and examples: https://laravel.com/docs/query-builder
*/ 