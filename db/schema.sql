DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL, 
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department (id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role (id),
    FOREIGN KEY (manager_id) 
    REFERENCES employee (id)   
);

UPDATE employee
SET manager_id = 1 WHERE id = 2;
UPDATE employee
SET manager_id = 3  WHERE id = 4;
UPDATE employee
SET manager_id = 5  WHERE id = 6;
UPDATE employee
SET manager_id = 7  WHERE id = 8;