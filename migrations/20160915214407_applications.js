'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('applications', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('phone').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.integer('job_id')
      .notNullable()
      .references('id')
      .inTable('jobs')
      .onDelete('CASCADE')
      .index();
    table.boolean('anonymous').defaultTo(true);
    table.decimal('overall_score', 2, 1);
    table.integer('edus_rating');
    table.integer('exps_rating');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('applications');
};
