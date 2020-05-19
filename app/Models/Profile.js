'use strict'

const Model = use('Model')

class Profile extends Model {

  static get foreignKey() {
    return 'perfil_id';
}

}

module.exports = Profile
