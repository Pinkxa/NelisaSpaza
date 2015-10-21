var mysql = require('mysql');
var assert = require('assert');
var Get = require('../routes/get');

describe('test the Get function', function(){
  
    var connection = mysql.createConnection ({
    	host: 'localhost',
      	user: 'root',
      	password: 'linokuhlekamva',
      	port: 3306,
      	database: 'Nelisa'
    });

    it('get should return a specific product', function(done){
        var get = new Get(connection);
        get.get(2, function(err, products) {
            assert.equal('Imasi', products.name);
            	done();
        });
    });
});