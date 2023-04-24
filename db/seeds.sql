INSERT INTO department (department_name)
VALUES ('Sales'), 
       ('Engineering'),
       ('Finance'),
       ('Legal');
       

INSERT INTO role (role_title, salary, department_id)
VALUES ('Sales Lead', 1, 1),
       ('Salesperson', 40000, 1),
       ('Lead Engineer', 170000, 2),
       ('Software Engineer', 240000, 2),
       ('Account Manager', 840000, 3),
       ('Accountant', 420000, 3),
       ('Legal Team Lead', 240000, 4),
       ('Lawyer', 760000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Paul', 'Nguyen', 1, NULL),
       ('Amanda', 'Solis', 2, 1),
       ('Cecilia', 'Nunez', 3, NULL),
       ('Naomi', 'Genesis', 4, 3),
       ('Omar', 'Mateo', 5, NULL),
       ('Kuna', 'Ramirez', 6, 5),
       ('Ellie', 'Ruiz', 7, NULL),
       ('Ollie', 'Venecio', 8, 7);