CREATE TABLE purchases
(
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   product_id int NOT NULL,
   supplier_id int,
   price Decimal,
   quantity int,
   FOREIGN KEY (Supplier_id) REFERENCES suppliers(id),
   FOREIGN KEY (Product_id) REFERENCES products(id)
   );
