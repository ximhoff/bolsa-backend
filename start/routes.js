'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'UserController.index');
  Route.get('/:id', 'UserController.buscarUsuario');
  Route.post('/login/', 'UserController.autenticacao');
  Route.post('/criar/', 'UserController.criar');
}).prefix('usuarios');

Route.group(() => {
  Route.get('/', 'ProfileController.index');
}).prefix('perfis');

Route.group(() => {
  Route.get('/', 'StorageUnitController.index');
}).prefix('unidades');