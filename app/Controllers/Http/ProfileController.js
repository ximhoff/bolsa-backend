'use strict'
const Perfil = use('App/Models/Profile');

class ProfileController {

  async index ({ request, response, view }) {
    return await Perfil.all();
  }
}

module.exports = ProfileController
