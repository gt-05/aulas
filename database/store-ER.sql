CREATE DATABASE store;

use store;

CREATE TABLE store.user (
	id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(45),
    surname VARCHAR(45),
    email VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE store.product (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(5, 2),
    slug VARCHAR(255),
    description TEXT,
    price_with_discount DECIMAL(5, 2),
    enabled BOOLEAN DEFAULT 0,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE store.product_option (
	id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    title VARCHAR(20),
    shape ENUM("square", "circle"),
    radius INT DEFAULT 0,
    type ENUM("text", "color"),
    `values` VARCHAR(255)
);

CREATE TABLE store.product_image (
	id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    path VARCHAR(255)
);

CREATE TABLE store.category (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    slug VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE store.product_category (
	product_id INT,
    category_id INT
);
