// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

 
//  // TODO: Get user input to create and return an array of employee objects

const collectEmployees = function() {
 let employees = [];
  let forward = true; 
 while (forward) {
  let firstName = prompt("enter your first name");
  let lastName = prompt("enter your last name");
  let salary = Number(prompt("enter your salary"));
  employees.push({firstName:firstName, lastName:lastName, salary:salary});  //worked with Duffey, Micah, Sam
  forward = confirm("click ok to continue or cancel to stop");
 }
  return employees;
}
 
// Display the average salary
let salary = 0
const displayAverageSalary = function(employeesArray) {      // worked with Micah
for(let i = 0; i< employeesArray.length; i++) {
      salary += Number(employeesArray[i].salary);
}
console.log(employeesArray.length)
console.log(salary/(employeesArray.length))
console.log(`The avg salary of our employess is $${salary/employeesArray.length}`)
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const getRandomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(getRandomEmployee)
  console.log(`our random winner is ${getRandomEmployee.firstName}  ${getRandomEmployee.lastName}`)
    // TODO: Select and display a random employee
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
