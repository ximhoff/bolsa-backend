'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProcessesSchema extends Schema {
  up () {
    this.create('processes', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('processes')
  }
}

module.exports = ProcessesSchema
