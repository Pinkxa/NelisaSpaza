CREATE TABLE sales
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id int NOT NULL,
  date Date,
  price int,
  quantity int,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
