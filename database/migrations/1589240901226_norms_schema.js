'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NormsSchema extends Schema {
  up () {
    this.create('norms', (table) => {
      table.increments()
      table.string('nome', 255).notNullable().unique()
      table.boolean('aplica').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('norms')
  }
}

module.exports = NormsSchema
