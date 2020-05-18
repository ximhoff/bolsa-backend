'use strict'
const Unidade = use ('App/Models/StorageUnit');

class StorageUnitController {
  
  async index ({ request, response, view }) {
    return await Unidade.all();
  }

}

module.exports = StorageUnitController
