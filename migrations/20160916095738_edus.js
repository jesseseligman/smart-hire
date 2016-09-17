'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('edus', (table) => {
    table.increments();
    table.string('school').notNullable('').defaultTo('');
    table.string('degree').notNullable('').defaultTo('');
    table.string('major').notNullable('').defaultTo('');
    table.string('dates').notNullable('').defaultTo('');
    table.integer('application_id')
      .notNullable()
      .references('id')
      .inTable('applications')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('edus');
};
