-- create database and table schema here
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL auto_increment PRIMARY KEY,
    burger_name VARCHAR(50) not null,
    devoured TINYINT(1) DEFAULT 0
);