const express = require ('express');
const inquirer = require ('inquirer');
const mysql = require ('mysql2');

const PORT = process.env.PORT || 3001;
const app = express ();

app.use(express.urlencoded({extended: false}));
app.use (express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'MyNewPassword',
    database: 'employee_db'
  },
  console.log ('Connected to employee database.')
  );

  function startForm() {
    inquirer.prompt ([
        { 
        type: 'list',
        name: 'choice',
        message: 'Menu',
        Choices: [
        'View All Departments',
        'Add Department',
        'View All Roles',
        'Add Role',
        'View All Employees',
        'Add employee',
        'Update Employee Role',
        'Exit'
        ]}
    ])

.then(answers => {
    if (answers.choice == 'View All Departments'){
        viewAllEmployees();
    } else if (answers.choice == 'Add Department'){
        addDepartment();
    } else if (answers.choice == 'View All Roles'){
        viewAllRoles();
    } else if (answers.choice == 'Add Role'){
        addRole();
    } else if (answers.choice == 'View All Employees'){
        viewAllEmployees();
    } else if (answers.choice == 'Add Employee'){
        addEmployee();
    } else if (answers.choice == 'Update Employee Role'){
        updateEmployeeRole();
    } else{
        quit();
    }})
};

