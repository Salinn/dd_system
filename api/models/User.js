/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email:{
      type:"email",
      unique: true
    },
    facebookId: {
      type: 'string',
      unique: true
    },
    name:{
      type: 'string'
    },
    brother:{
      type:"boolean"
    },
    dues_owed:{
      type:"float"
    },
    ritual_num:{
      type:"int"
    },
    gender:{
      in: ["male", "female", "na"]
    },
    role:{
      type:"string",
      in: ['Brother', 'Guest', 'Friend', 'Driver', 'Finance', 'Admin']
    }

  },

  beforeCreate: function (attrs, next) {
    if (attrs.gender == "female"){
      attrs.dues_owed = 200
    } else {
      attrs.dues_owed = 400
    }
    next();
  }

};

