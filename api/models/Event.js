/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string'
    },
    organization_id:{
      type: 'integer'
    },
    request_id:{
      type: 'integer'
    },
    allowed:{
      type: 'string' //Maybe change this?
    },
    max_invites:{
      type: 'integer'
    },
    address:{
      type: 'string'
    },
    start_time:{
      type: 'date'
    }
  }
};

