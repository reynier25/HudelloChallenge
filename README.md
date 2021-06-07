# Hudello Coding Challenge: SQL (Intermediate)

Welcome to our intermediate SQL coding challenge. In this exercise, you'll create a relational database and then extract some data from it.

You're on a popular social media app where users can create posts and comment on posts, and you're browsing an user's profile page where you can see all the posts this user has created along with the latest comments that are attached to each post.

![Post & Comments](https://i.imgur.com/XVtOxAb.png)

## Your objectives:

1. Create SQL tables `Users`, `Posts` and `Comments`.
2. Populate some dummy data into these tables.
3. Write a query that retrieves the last 3 comments of **each post** on this user's profile page.

You may use any SQL-based database for this exercise, including SQLite, and you may use subqueries and joins to produce the result set, but you may not use more than 1 query to get the results.

## To get started:
1. Fork or clone this repo.
2. Implement your code.
3. Send us a link to your repo for review.

Happy coding!

Hudello Engineering




Note: raw SQL was used in lieu of Sequelize ORM syntax; I did not know if Sequelize is part of Hudello's stack, and so did not want to possibly waste time learning a new syntax.

See package.json for script details.
Run `npm i` to install packages.

To create the database: `npm run create`. Requires that Postgres already be installed.
Run migrations: `npm run migrate`. There is only one migrations file for all tables (users, comment, post). This is generally not the best practice, but acceptable here since the focus is SQL query writing.
Undo migrations: `npm run down`
Seed the db: `npm run seed`

After the database is seeded, test the SQL query by simply running `node index.js`. This will connect to the database, run the query, print the results, and automatically close the connection when finished.

You can examine the seed data and change the `users.id` value on line 28 of index.js to verify the query works correctly. In the given example, the `users.id` is 3, meaning "fetch the last 3 comments on every post made by user 3". Looking at the seed data for the `post` table, you can see user 3 is responsible for posts 1, 2, 3, 4, 5, 6. Scrolling down to the comment seed data, you can identify comments made on these posts, by `comment.post_id`. You can see comments 1, 2, 3, 4, 5 were made on post 1, and comments 8, 9 were made on post 5. These constitute all the comments made on posts made by user 3. We take the 3 most recent comments. Since IDs are ordered by recency, we take the 3 greatest comment IDs per post. For post 1, these are comments 3, 4, 5. For post 5, these are all the comments, since there are <= 3 comments in total - just comments 8, 9. Our output table, then, is comments 3, 4, 5, 8, 9.