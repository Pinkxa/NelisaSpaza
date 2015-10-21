CREATE TABLE suppliers
(
    Id int NOT NULL auto_increment primary key,
	  shop VARCHAR(255) NOT NULL
);

CREATE TABLE categories 
(
   Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   category_name VARCHAR(15)
);

CREATE TABLE products 
(
	Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	Category_Id int not NULL,
	product_name VARCHAR(15),
	FOREIGN KEY (category_Id) REFERENCES categories(Id)
);

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

CREATE TABLE sales
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id int NOT NULL,
  date Date,
  price int,
  quantity int,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE  users
(
id int NOT NULL auto_increment primary key,
Usename VARCHAR(30) NOT NULL,
Password VARCHAR(100) NOT NULL,
Role VARCHAR(15) NOT NULL
);
)
