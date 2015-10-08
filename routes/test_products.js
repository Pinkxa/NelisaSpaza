var products = require('/routes/products');

	describe('get', function() {
		it('should return the list of products in products table', function(done){
			var products = new Products(connection);
				products.get([id], function(err,rows){
					assert.equal('milk', products.name);
						done();
				});
		});
	});



