import React, { useState } from "react";

export const PageTwo = (props) => {
    const [ street, setStreet] = useState(" ");
    const [ city, setCity ] = useState(" ");
    const [ zip, setZip ] = useState(" ");
    const [ state, setState ] = useState("");

    const { firstname, lastname, profession } = props.location.state;

    const goToPageOne = () => {
        props.history.push('/pageone',
        {   firstname : firstname, 
            lastname : lastname, 
            profession: profession,
        })
    }

    const goToPageThree = () => {
        props.history.push('/pagethree', 
        {   firstname : firstname, 
            lastname : lastname, 
            profession: profession,
            street : street,
            city : city,
            zip : zip,
            state : state
        })
    }
    let page2 = (
    <div>
        <div>
            <p>FirstName = {firstname}</p>
            <p>LastName = {lastname}</p>
            <p>Profession = {profession}</p>
        </div>
        <form>
            <input
                type="text"
                name="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value) }
            />
            <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value) }
            />
            <input
                type="text"
                name="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value) }
            />
             <select
                type="radio"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value) }>
                    <option>Iowa</option>
                    <option>Califonia</option>
            </select>
            <button onSubmit={goToPageOne}>Previous</button>
            <button onSubmit={goToPageThree}>Next</button>
        </form>
    </div>
    );
    return page2;
}