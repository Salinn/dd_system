/**
* Request.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    attributes: {
      current_location:{
        type:"string",
        required:true
      },
      destination:{
        type:"string",
        required:true
      },
      num_people:{
        type:"int",
        required:true
      },
      user_id:{
        type:"int",
        required:false
      },
      when_picked_up:{
        type:"datetime",
        required:true
      },
      driver_id:{
        type:"int",
        required:true
      }

    }
  }
};

