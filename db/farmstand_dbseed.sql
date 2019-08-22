DROP DATABASE IF EXISTS farmstand_db;

CREATE DATABASE farmstand_db;

use farmstand_db;

SELECT * FROM products;
SELECT * FROM users;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT primary key,
    product_name VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NULL default 0,
    stock_quantity INTEGER (4)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT primary key,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(25) NOT NULL
)
-- INSERT INTO products
-- VALUES
-- (1, product_name, department, price, stock_quantity, createdAt, updatedAt),


INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("carrots", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("lettuce", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("zucchini", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("snap peas", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("snow peas", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("kale", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("spinach", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("green beans", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("beets", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("swiss chard", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("cucumbers", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("sweet peppers", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("sweet onions", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("cherry tomatoes", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("slicer tomatoes", "veggie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("rhizome purbple", "flower", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("bouquets", "flower", 00.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("rhubarb", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("strawberry-rhubarb", "pie", 00.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("raspberry-rhubarb", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("apple", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("blackberry", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("blueberry", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("cherry", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("peach", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("raspberry", "pie", 5.00, 0, current_timestamp, current_timestamp);

INSERT INTO products (product_name, department, price, stock_quantity, createdAt, updatedAt)
VALUES ("yumble-berry", "pie", 5.00, 0, current_timestamp, current_timestamp);