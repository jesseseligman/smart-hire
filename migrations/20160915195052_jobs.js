'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.text('description').notNullable().defaultTo('');
    table.text('skills').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.specificType('state', 'char(60)').notNullable().defaultTo('');
    table.integer('user_id')
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};
