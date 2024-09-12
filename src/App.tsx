import React from 'react';
import './App.css';
import Employee  from "./components/Employee";
import { useState} from "react";

function App() {
    console.log('we are about to list the employees');
    const [role, setRole] = useState("Doctor");

    const showEmployees = true;
  return (
    <div className="App">
        {showEmployees ? (
        <>
            <input type="text" onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
            }} />
          <Employee name="Hector" role="developer" />
          <Employee name="Carlos" role={role}/>
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
