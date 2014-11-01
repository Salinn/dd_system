/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email:{
      type:"email"//,
      //required:true//,
      //unique: true
    },
    facebookId: {
      type: 'string',
      required: true,
      unique: true
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
    role:{
      type:"string",
      //required:true,
      in: ['Brother', 'Guest', 'Friend', 'Driver', 'Finance', 'Admin']
    }

  }

};

