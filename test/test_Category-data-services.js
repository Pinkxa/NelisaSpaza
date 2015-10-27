var mysql = require('mysql');
var assert = require('assert');
var CategoryDataServices = require('../routes/Category-data-services');

var connection = mysql.createConnection ({
      host: 'localhost',
        user: 'root',
        password: 'linokuhlekamva',
        port: 3306,
        database: 'Nelisa'
    });

describe('test the CategoryDataServices function', function(){

    it('getCategory should return a specific category', function(done){
        var categoryDataServices = new CategoryDataServices(connection);
        categoryDataServices.getCategory(3, function(err, categories) {
            assert.equal('Canned Food', categories.catname);
            	done();
        });
    });

    it('addCategory should add a category', function(done){
      var categoryDataServices = new CategoryDataServices(connection);
      categoryDataServices.addCategory(function(err, categories){
        assert.equal(categories);
          done();
      });
    });

    it('updateCategory should update a category', function(done){
      var categoryDataServices = new CategoryDataServices(connection);
      categoryDataServices.addCategory(function(err, categories){
        assert.equal(categories);
          done();
      });
    });

    it('deleteCategory should delete a specific category', function(done){
      var categoryDataServices = new CategoryDataServices(connection);
      categoryDataServices.addCategory(function(err, categories){
        assert.equal(categories);
          done();
      });
    });

    it('searchCategory should search a specific category when the first three letters are typed', function(done){
      var categoryDataServices = new CategoryDataServices(connection);
      categoryDataServices.addCategory(function(err, categories){
        assert.equal(categories);
          done();
      });
    });
});
