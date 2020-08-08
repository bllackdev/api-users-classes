import Knex from 'knex';

/** 
 * Com o "yarn add knex sqlite3"
 * permiti escrever o SQL em JS
 * Exemplo:
 * SELECT * FROM users
 * seria -> knex('users').select('*')
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}