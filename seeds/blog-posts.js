
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {title: 'I like turtles.', text: 'Ninja-Turtles', votes: 0, user_id: 1},
        {title: 'How I learned not to suck at coding.', text: 'Jokes on you, I haven\'t.', votes: 0, user_id: 2},
        {title: 'The Darkside of Pokemon', text: 'Pokemon can be super messed up... just read the pokedex entries, nerd.', votes: 0, user_id: 3},
        {title: 'Blogin\' with Bilbo Bloggins', text: 'Lorem Ipsum.... Barr literally couldnt think of anything else... surprising, right?', votes: 0, user_id: 4}
      ]);
    });
};
