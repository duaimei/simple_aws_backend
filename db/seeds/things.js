
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('things').del()
    .then(function () {
      // Inserts seed entries
      return knex('things').insert([
        {id: 1, name: 'person'},
        {id: 2, name: 'place'},
        {id: 3, name: 'thing'}
      ]);
    });
};
