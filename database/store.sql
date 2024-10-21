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
