'use strict'
const Usuarios = use('App/Models/User');

class UserController {

  async index () {
    return await Usuarios.all();
  }

  async autenticacao ({ request, response, auth }) {
    try {
      const { email, senha } = request.all();
      const usuarioAutorizado = await auth.attempt(email, senha);
      if(!usuarioAutorizado) {
        return response.status(401).send({ code: error.code, message: error.message});
      }
      const users = await Usuarios.findBy('email', email);
      const token = await auth.generate(users, { profile: users.profile_id, id: users.id, nome: users.nome });

      return token;
    } catch (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }
  
  async criar ({ request, response }) {
    try {
      const data = request.only(['nome', 'email', 'cpf', 'password', 'cargo', 'perfil_id', 'unidade_armazenadora_id']);
      const usuario = await Usuarios.create(data);

      return usuario;
    } catch (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }

  async buscarUsuario ({ params, response }) {
    try {
      let usuario = await Usuarios.query()
        .where('id', params.id)
        .with('perfil')
        .with('unidade')
        .first();
      return usuario;
    } catch (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }

  async alterar({ request, response, params }) {
    try {
      const id = params.id;
      const { nome, email, cpf, password, cargo, perfil_id, unidade_armazenadora_id } = request.only(['nome', 'email', 'cpf', 'password', 'cargo', 'perfil_id', 'unidade_armazenadora_id']);
      const usuario = await Usuarios.find(id);
      usuario.nome = nome;
      usuario.email = email;
      usuario.cpf = cpf;
      usuario.password = password;
      usuario.cargo = cargo;
      usuario.perfil_id = perfil_id;
      usuario.unidade_armazenadora_id = unidade_armazenadora_id;
      await usuario.save(); 
      return usuario
    } catch  (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }

  async deletar ({ params, response }) {
    try {
      const usuario = await Usuarios.find(params.id);
      await usuario.delete();
      return usuario;
    } catch (error) {
      return response.status(500).send({ code: error.code, message: error.message});
    }
  }

}

module.exports = UserController
