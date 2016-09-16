'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('responses', (table) => {
    table.increments();
    table.integer('question_id')
      .notNullable()
      .references('id')
      .inTable('questions')
      .onDelete('CASCADE')
      .index();
    table.integer('application_id')
      .notNullable()
      .references('id')
      .inTable('applications')
      .onDelete('CASCADE')
      .index();
    table.text('text').notNullable().defaultTo('');
    table.integer('rating');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('responses');
};
