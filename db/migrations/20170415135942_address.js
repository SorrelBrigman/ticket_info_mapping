
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('addresses', (table)=>{
      table.increments();
      table.string('street');
      table.string('city');
      table.string('state');
      table.string('zip');
      table.string('country')

    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('addresses')
};
