'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('exps', (table) => {
    table.increments();
    table.string('company').notNullable('').defaultTo('');
    table.string('title').notNullable('').defaultTo('');
    table.text('description').notNullable('').defaultTo('');
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
  return knex.schema.dropTable('exps');
};
