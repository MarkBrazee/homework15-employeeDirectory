import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import EmployeeList from "./components/EmployeeList";
import Title from "./components/Title";
import "./App.css";
import Table from "./components/Table";

// sortEmployee = (lastName) => {
//   const employees = this.state.employees.sort(
//     (employee) => employee.lastName === lastName
//   );
//   this.setState({ employees });
// };

// Map over this.state.friends and render a Employee component for each employee object
function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <Table>
        {employees.map((employee) => (
          <EmployeeList
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            phone={employee.phone}
            occupation={employee.occupation}
            residence={employee.residence}
          />
        ))}
      </Table>
      {/* <span onClick={this.sortByName}>lastName</span>; */}
    </Wrapper>
  );
}

export default App;

// Continuing to work on sorting the last names in the table and filtering the employees by one property.
