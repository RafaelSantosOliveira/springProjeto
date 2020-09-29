CREATE DATABASE codificando_db;
USE codificando_db;

CREATE USER 'rafael10'@'localhost' IDENTIFIED BY '933';
GRANT ALL PRIVILEGES ON  codificando_db.* TO 'rafael10'@'localhost';