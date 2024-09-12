import React from 'react';
import './App.css';
import Employee  from "./components/Employee";

function App() {
    console.log('we are about to list the employees');
    const showEmployees = true;
  return (
    <div className="App">
        {showEmployees ? (
        <>
          <Employee name="Hector" role="developer" />
          <Employee name="Carlos"/>
          <Employee name="John"/>
          <Employee />
          <Employee />

        </>
        ) : (
            <p>You cannot see the employees</p>
        )}
    </div>
  );
}

export default App;
