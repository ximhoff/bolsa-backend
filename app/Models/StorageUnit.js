'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StorageUnit extends Model {

    static get foreignKey() {
        return 'unidade_armazenadora_id';
    }

}

module.exports = StorageUnit
