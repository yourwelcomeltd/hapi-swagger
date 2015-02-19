// for debugging of plugin and visual inspection of UI during manual tests

'use strict';
var Hapi            = require('hapi'),
    Joi             = require('joi'),
    Pack            = require('../package.json');


var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3000 
});


server.route({
    method: 'POST',
    path: '/foo/v1/bar',
    config: {
        description: '...',
        tags: ['api'],
        validate: {
            payload: Joi.object({
                outer1: Joi.object({
                    inner1: Joi.string()
                }),
                outer2: Joi.object({
                    inner2: Joi.string()
                })
            })
          },
          handler: function () {}
    }
});



// setup swagger options
var swaggerOptions = {
    basePath: 'http://localhost:3000',
    info: {
        title: 'visual inspection',
        description: 'for debugging of plugin and visual inspection of UI during test.',
        contact: 'glennjonesnet@gmail.com',
        license: 'MIT',
        licenseUrl: '/license'
    }
};



// adds swagger self documentation plugin
server.register({
        register: require('../lib/index.js'), 
        options: swaggerOptions
    }, function (err) {
        if (err) {
            console.log(['error'], 'plugin "hapi-swagger" load error: ' + err) 
        }else{
            console.log(['start'], 'swagger interface loaded')

            server.start(function(){
                console.log(['start'], Pack.name + ' - web interface: ' + server.info.uri);
            });
        }
    });

