const { Client, Connection } = require('pg');
// const Sequelize = require("sequelize");

const client = new Client({
    port: 5432,
    database: "database_development"
});

client
  .connect()
  .then(() => console.log("Connected"))
  .then(() =>
      client.query(`SELECT
        comment.body
      FROM
        comment
      JOIN
        post ON post.id = comment.post_id
      JOIN
        users ON users.id = post.user_id
      WHERE (
          SELECT
            COUNT(*)
          FROM
            comment AS c
          WHERE c.post_id = comment.post_id AND c.id >= comment.id
      )
        <= 3 AND users.id = 3
  
`)
  )
  .then((results) => console.table(results.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());
