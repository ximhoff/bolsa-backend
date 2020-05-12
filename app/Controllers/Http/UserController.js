'use strict'
const Users = use('App/Models/User');

class UserController {

  async autenticacao({ request, response, auth }) {
    try {
      const { email, senha } = request.all();
      const usuarioAutorizado = await auth.attempt(email, senha);
      if(!usuarioAutorizado) {
        return response.status(401).send({ code: error.code, message: error.message});
      }
      const user = await Users.findBy('email', email);
      const token = await auth.generate(user, { profile: user.profile_id });

      return token;
    } catch (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }

}

module.exports = UserController
