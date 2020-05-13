'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'UserController.index');
  Route.post('/login/', 'UserController.autenticacao');
  Route.post('/criar/', 'UserController.criar');
}).prefix('usuarios');