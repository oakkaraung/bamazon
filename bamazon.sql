DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INTEGER(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255),
price INTEGER(10),
stock_quantity INTEGER(10)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("TV", "Electronics", 500, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("iPhone", "Electronics", 1000, 3);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("iPad", "Electronics", 1500, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Hoodie", "Clothing", 30, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Coat", "Clothing", 50, 12);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Socks", "Clothing", 5, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Jeans", "Clothing", 40, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Laptop", "Electronics", 500, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Cups", "Kitchen", 2, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Pan", "Kitchen", 20, 20);

SELECT * FROM products;