'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('phone').unique().notNullable().defaultTo('');
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('company_name').notNullable().defaultTo('');
    table.text('company_description').notNullable().defaultTo('');
    table.specificType('state', 'char(2)').notNullable().defaultTo('');
    table.string('city').notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
