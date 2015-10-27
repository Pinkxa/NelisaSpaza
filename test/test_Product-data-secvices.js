var mysql = require('mysql');
var assert = require('assert');
var ProductDataServices = require('../routes/Product-data-services');

var connection = mysql.createConnection ({
      host: 'localhost',
        user: 'root',
        password: 'linokuhlekamva',
        port: 3306,
        database: 'Nelisa'
    });

describe('test the ProductDataServices function', function(){

    it('getProduct should return a specific product', function(done){
        var productDataServices = new ProductDataServices(connection);
        productDataServices.getProduct(2, function(err, products) {
            assert.equal('Imasi', products.name);
            	done();
        });
    });

    it('addProduct should add a product', function(done){
        var productDataServices = new ProductDataServices(connection);
        productDataServices.addProduct(function(err, products) {
            assert.equal(products);
              done();
        });
    });

    it('updateProduct should update added product', function(done){
        var productDataServices = new ProductDataServices(connection);
        productDataServices.updateProduct(function(err, products) {
            assert.equal(products);
              done();
        });
    });

    it('deleteProduct should delete a specific product', function(done){
        var productDataServices = new ProductDataServices(connection);
        productDataServices.deleteProduct(function(err, products) {
            assert.equal(products);
              done();
        });
    });

    it('searchProduct should search a specific product when the first three letters typed', function(done){
        var productDataServices = new ProductDataServices(connection);
        productDataServices.searchProduct(function(err, products) {
            assert.equal(products);
              done();
        });
    });
});