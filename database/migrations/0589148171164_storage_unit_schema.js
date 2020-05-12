'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StorageUnitSchema extends Schema {
  up () {
    this.create('storage_units', (table) => {
      table.increments()
      table.string('razao_social', 255).notNullable()
      table.string('cpf', 20).notNullable()
      table.string('tipo', 255).notNullable()
      table.string('rua', 255).notNullable()
      table.integer('numero').unsigned().notNullable()
      table.string('cidade', 255).notNullable()
      table.string('cep', 20).notNullable()
      table.integer('numero_funcionarios').unsigned().notNullable()
      table.string('produtos_recebidos', 255).notNullable()
      table.integer('capacidade_estatica').unsigned().notNullable()
      table.string('unidade_certificada', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('storage_units')
  }
}

module.exports = StorageUnitSchema
