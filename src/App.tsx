import React from 'react';
import './index.css';
import Employee from "./components/Employee";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function App() {
    console.log('we are about to list the employees');
    const [role, setRole] = useState("Doctor");
    const [employees, setEmployees] = useState(
        [
            {
                name: "Hector",
                role: "developer",
                img: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg"
            },
            {
                name: "Marie",
                role: "developer",
                img: "https://images.pexels.com/photos/7491620/pexels-photo-7491620.jpeg"
            },
            {
                name: "John",
                role: "developer",
                img: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg"
            },
            {
                name: "Abby",
                role: "developer",
                img: "https://images.pexels.com/photos/7491620/pexels-photo-7491620.jpeg"
            },
            {
                name: "Peter",
                role: "developer",
                img: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg"
            },
            {
                name: "Alexa",
                role: "developer",
                img: "https://images.pexels.com/photos/7491620/pexels-photo-7491620.jpeg"
            },
        ]
    )
    const showEmployees = true;
    return (
        <div className="App">
            {showEmployees ? (
                <>

                    <div className="flex flex-wrap justify-centers">
                        {employees.map((employee) => {
                            return (
                                <Employee
                                    key={uuidv4()}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                />
                            );
                        })}
                    </div>

                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
