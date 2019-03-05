
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'mike', password:'Password01'},
        {username: 'diane', password:'Password01'},
        {username: 'cesar', password:'Password01'},
        {username: 'barr', password:'Password01'}
      ]);
    });
};
