'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        { id: 1, first_name: "Jim", last_name: "Jimm", created_at: new Date(), updated_at: new Date() },
        { id: 2, first_name: "Jack", last_name: "Jackk", created_at: new Date(), updated_at: new Date() },
        { id: 3, first_name: "Jill", last_name: "Jilll", created_at: new Date(), updated_at: new Date() },
        { id: 4, first_name: "Joe", last_name: "Joee", created_at: new Date(), updated_at: new Date() },
        { id: 5, first_name: "Jan", last_name: "Jann", created_at: new Date(), updated_at: new Date() },
        { id: 6, first_name: "Jerry", last_name: "Jerryy", created_at: new Date(), updated_at: new Date() },
        { id: 7, first_name: "Jules", last_name: "Juless", created_at: new Date(), updated_at: new Date() },
        { id: 8, first_name: "Jester", last_name: "Jesterr", created_at: new Date(), updated_at: new Date() },
        { id: 9, first_name: "Jeeves", last_name: "Jeevess", created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'post',
      [
        { id: 1, body: "Visiting L.A.", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 2, body: "Eating sushi", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 3, body: "Drinking beer", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 4, body: "Bowling", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 5, body: "Ordering pizza", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 6, body: "Throwing rocks", user_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 7, body: "Ice skating", user_id: 4, created_at: new Date(), updated_at: new Date() },
        { id: 8, body: "Skiing", user_id: 7, created_at: new Date(), updated_at: new Date() },
        { id: 9, body: "Scuba diving", user_id: 9, created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'comment',
      [
        { id: 1, body: "Say hi to Jack Nicholson", user_id: 1, post_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 2, body: "Hows the weather", user_id: 2, post_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 3, body: "What part of LA", user_id: 4, post_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 4, body: "Im there too", user_id: 5, post_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 5, body: "Nice", user_id: 6, post_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 6, body: "Post pics", user_id: 3, post_id: 7, created_at: new Date(), updated_at: new Date() },
        { id: 7, body: "Snowboarding is better", user_id: 4, post_id: 8, created_at: new Date(), updated_at: new Date() },
        { id: 8, body: "Glub glub", user_id: 6, post_id: 5, created_at: new Date(), updated_at: new Date() },
        { id: 9, body: "Yummy", user_id: 7, post_id: 5, created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
