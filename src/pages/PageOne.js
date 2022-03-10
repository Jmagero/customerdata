import React, { useState } from "react";

export const PageOne = (props) => {
    const [ firstname, setFirstName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ profession, setProfession ] = useState("");

    const goToPageTwo = (e) => {
        e.preventDefault()
        props.history.push('/pagetwo', {firstname : firstname, 
            lastname : lastname, profession: profession})
    }

    return (
        <form onSubmit={goToPageTwo}>
            <h1>Please enter your personal information</h1>
            <div>
                <h5>FirstName</h5>
                <input
                    type="text"
                    name="FirstName"
                    value={firstname}
                    onChange={e => setFirstName(e.target.value) }
                />
            </div>
            <div>
                <h5>LastName</h5>
                <input
                    type="text"
                    name="LastName"
                    value={lastname}
                    onChange={e => setLastName(e.target.value) }
                />
            </div>
            <div>
                <h5>Profession</h5>
                <select 
                type="radio"
                name="Profession"
                value={profession}
                onChange={e => setProfession(e.target.value) }
                >
                <option>Programmer</option>
                <option>Manager</option>
                <option>Tester</option>
                <option>Architect</option>
                </select>
            </div>
         <button type="submit">Next</button>
        </form>
    );
}