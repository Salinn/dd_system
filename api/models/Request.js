/**
 * Request.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    user_id:{
      type:"int",
      required:true
    },
    start_location:{
      type:"string",
      required:true
    },
    end_location:{
      type:"string",
      required:true
    },
    num_people:{
      type:"int",
      required:true
    },
    request_time:{
      type:"date"
    },
    pickup_time:{
      type:"date"
    },
    estimated_time:{
      type:"time"
    }
  }
};

