
'use strict';
var Hoek        = require('hoek'),
    Boom        = require('boom'),
    Joi         = require('joi'),
    Path        = require('path'),
    schemas     = require('../lib/schemas');


var builder = module.exports = {};


// builds swagger JSON
builder.getSwaggerJSON = function( options ){
    return {test:'test'}
}


// checks the format of options.info
builder.getInfo = function( options ){
    var info;
    if( options.info ){
      Joi.assert(options.info, schemas.info, 'Error with swagger option.info');  
    }
    return info;
}
