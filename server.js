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

function viewEmployees() {
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => startSearch());
}

function viewRoles() {
    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => startSearch());
}

function viewDepartments() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => startSearch());
}

function createRole() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            inquirer.prompt([
                {
                    name: "role",
                    message: "What's the role name?"
                },
                {
                    name: "salary",
                    message: "What's the salary?"
                },
                {
                    name: "department_id",
                    type: "list",
                    message: "Please list the department",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.addRole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => startSearch())
                })
        })
    }