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
    gender:{
      in: ["male", "female", "na"]
    },
    phone_number:{
      type: 'string'
    }
  }


  //beforeCreate: function (attrs, next) {
  //  if (attrs.gender == "female"){
  //    attrs.dues_owed = 200
  //  } else {
  //    attrs.dues_owed = 400
  //  }
  //
  //  attrs.ritual_num = attrs.ritual_num +  Math.floor(Math.random() * (10000 - 10 + 1) + 10);
  //  next();
  //}

};

