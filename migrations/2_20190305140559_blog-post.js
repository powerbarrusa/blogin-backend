
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogpost', table => {
    table.increments()
    table.string('title').notNullable().defaultsTo('')
    table.text('text').notNullable().defaultsTo('')
    table.integer('votes').notNullable().defaultsTo(0)
    table.integer('user_id').notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .index()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogpost')
}
