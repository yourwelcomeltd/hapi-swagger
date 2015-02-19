
'use strict';
var chai 		= require('chai'),
	builder 	= require('../lib/builder.js');


var assert = chai.assert,


describe('getInfo', function() {

  it('test full use of options.info properties', function(done){ 
	 var info = {
	    'version': '1.0.0',
	    'title': 'Swagger Petstore',
	    'description': 'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
	    'termsOfService': 'http://helloreverb.com/terms/',
	    'contact': {
	      'name': 'Wordnik API Team',
	      'email': 'foo@example.com',
	      'url': 'http://madskristensen.net'
	    },
	    'license': {
	      'name': 'MIT',
	      'url': 'http://github.com/gruntjs/grunt/blob/master/LICENSE-MIT'
	    }
	}

	assert(builder.getInfo( {'info': info} ) === info);
    done();

  });

}