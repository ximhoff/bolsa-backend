'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipmentSchema extends Schema {
  up () {
    this.create('equipment', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('marca', 255).notNullable()
      table.string('modelo', 255).notNullable()
      table.integer('ano_fabricacao').unsigned().notNullable()
      table.integer('ano_intalacao').unsigned().notNullable()
      table.integer('capacidade').unsigned().notNullable()
      table.string('potencia', 255).notNullable()
      table.integer('processes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('processes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('storage_unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('storage_units')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('equipment')
  }
}

module.exports = EquipmentSchema
