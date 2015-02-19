
'use strict';
var Joi 	= require('joi');


var schemas = module.exports = {};

schemas.options = Joi.object({
    auth: Joi.boolean(),
    basePath: Joi.string(),
    protocol: Joi.string(), 
    documentationPath: Joi.string(),
    jsonPath: Joi.string(),
    swaggeruiPath: Joi.string(),
});


schemas.swagger = Joi.string().valid('2.0').required();

schemas.info = Joi.object({
    title: Joi.string().required(),
    version: Joi.string(),
    description: Joi.string(),
    termsOfService: Joi.string(),
    contact: Joi.object({
    		name: Joi.string(),
    		url: Joi.string(),
    		email: Joi.string(),
    	}),
    license: Joi.object({
    		name: Joi.string(),
    		url: Joi.string(),
    	}),
});




