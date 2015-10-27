module.exports = function(connection){
    this.getProduct = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('select name from products where id = ?', id, function(err, products){
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });
    }

    this.addProduct = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('insert into products set ?', id, function(err, products) {
          if (products && products.length > 0){
            return cb(null, products[0]);
          }

          cb(null, null);
        });
    };

     this.updateProduct = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('UPDATE products SET ? WHERE id = ?', id, function(err, products){
          if (products && products.length > 0){
            return cb(null, products[0]);
          }

          cb(null, null);
        });
    };

    this.deleteProduct = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('DELETE FROM products WHERE id = ?', id, function(err,products){
          if (products && products.length > 0){
            return cb(null, products[0]);
          }

          cb(null, null);
        });
    };

    this.searchProduct = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('SELECT name from products where name LIKE ?', id, function(err, products) {
           if (products && products.length > 0){
            return cb(null, products[0]);
          }

          cb(null, null);
        });
    };
}