module.exports = function(connection){
    this.get = function(id, cb, err){
        if (err) return cb(err, null);
        connection.query('select name from products where id = ?', id, function(err, products){
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });
    }
}