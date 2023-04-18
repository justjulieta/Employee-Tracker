const inquirer = require('inquirer');
const db = require("./db");
require("console.table");

function init() {
    startSearch();
}

function startSearch() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option below",
            name: "choice",
            choices: [
                {
                    name: "Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Employees",
                    value: "VIEW_EMPLOYEES"
                },

                {
                    name: "Department Add",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Role Add",
                    value: "ADD_ROLE"
                },
                {
                    name: "Employee Add",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Employee Update",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }

    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_DEPARTMENT":
                createDepartment();
                break;
            case "ADD_ROLE":
                createRole();
                break;
            case "ADD_EMPLOYEE":
                createEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    }
    )
    .catch(error => {
        console.error(error);
        process.exit(1);
      });
}
