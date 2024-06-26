// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  let employees = [];
  let addEmployees = true;

  //Loop to collect employee detials until user chooses to stop.
  while (addEmployees) {
    const firstName = prompt("What is the employee's first name?");
    const lastName = prompt("What is the employee's last name?");
    const salary = parseFloat(prompt("What is the employee's salary?"));

    //Construct an employee object and add to the array.
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employees.push(employee);
    addEmployees = confirm("Would you like to add another employee?");
  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Calculate and display the average salary
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseFloat(employeesArray[i].salary);
  }
  const averageSalary = totalSalary / employeesArray.length;
  //Log the average salary
  console.log(
    `The average salary between our ${
      employeesArray.length
    } employee(s) is ${averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const random = Math.floor(Math.random() * employeesArray.length);
  console.log(
    `Congratulations to ${employeesArray[random].firstName} ${employeesArray[random].lastName}, our random drawing winner!`
  );
};

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
