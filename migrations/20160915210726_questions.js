'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.integer('job_id')
      .notNullable()
      .references('id')
      .inTable('jobs')
      .onDelete('CASCADE')
      .index();
    table.text('text').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions');
};
