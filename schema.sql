CREATE DATABASE product_schema;
USE product_schema;
CREATE TABLE product_category (
    id INT PRIMARY KEY,
    name VARCHAR(200),
    desc TEXT,
    created_at TIMESTAMP,
    modified_at TIMESTAMP
);

CREATE TABLE product (
    id INT PRIMARY KEY,
    deleted_at TIMESTAMP,
    name VARCHAR(200),
    product_inventory TEXT,
    FOREIGN KEY (id) REFERENCES product_inventory(category_id)
);

CREATE TABLE product_inventory (
    id INT PRIMARY KEY,
    SKU VARCHAR(250),
    quantity INT,
    category_id INT,
    created_at TIMESTAMP,
    inventory_id INT,
    modified_at TIMESTAMP,
    price DECIMAL,
    deleted_at TIMESTAMP,
    discount_id INT,
    created_at TIMESTAMP,
    discount TIMESTAMP,
    modified_at TIMESTAMP
);

CREATE TABLE discount (
    id INT PRIMARY KEY,
    deleted_at TIMESTAMP,
    name VARCHAR(200),
    desc TEXT,
    discount_percent DECIMAL,
    active BOOLEAN,
    created_at TIMESTAMP,
    modified_at TIMESTAMP,
    deleted_at TIMESTAMP
);