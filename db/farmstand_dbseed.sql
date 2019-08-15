DROP DATABASE IF EXISTS farmstand_db;

CREATE DATABASE farmstand_db;

use farmstand_db;

SELECT * FROM products;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT primary key,
    product_name VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NULL default 0,
    stock_quantity INTEGER (4)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("carrots", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("lettuce", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("zucchini", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("snap peas", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("snow peas", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("kale", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("spinach", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("green beans", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("beets", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("swiss chard", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("cucumbers", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("sweet peppers", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("sweet onions", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("cherry tomatoes", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("slicer tomatoes", "veggie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("rhizome purbple", "flower", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("bouquets", "flower", 00.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("rhubarb", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("strawberry-rhubarb", "pie", 00.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("raspberry-rhubarb", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("apple", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("blackberry", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("blueberry", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("cherry", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("peach", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("raspberry", "pie", 5.00, 0);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("yumble-berry", "pie", 5.00, 0);