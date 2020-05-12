'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipmentNormSchema extends Schema {
  up () {
    this.create('equipment_norms', (table) => {
      table.increments()
      table.integer('equipment_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('equipment')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('norms_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('norms')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('equipment_norms')
  }
}

module.exports = EquipmentNormSchema
