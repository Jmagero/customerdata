import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const PageTwo = (props) => {
    const [ street, setStreet] = useState("");
    const [ city, setCity ] = useState("");
    const [ zip, setZip ] = useState("");
    const [ state, setState ] = useState("");
    const history = useHistory();
    const location = useLocation();
    console.log(location.state);

    const firstname = location.state.firstname;
    const lastname = location.state.lastname;
    const profession = location.state.profession;

    const goToPageOne = (e) => {
        e.preventDefault();
        history.push('/pageone',
        {   firstname : firstname, 
            lastname : lastname, 
            profession: profession,
        })
    }

    const goToPageThree = (e) => {
        e.preventDefault();
        history.push('/pagethree', 
        {   
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
            <div>
                <h5>Street</h5>
                <input
                    type="text"
                    name="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value) }
                />
            </div>
            <div>
                <h5>City</h5>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value) }
                />
            </div>
            <div>
                <h5>Zip</h5>
                <input
                    type="text"
                    name="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value) }
                />
            </div>
            <div>
                <select
                    type="radio"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value) }>
                        <option>Iowa</option>
                        <option>Califonia</option>
                </select>
            </div>
            <button onSubmit={goToPageOne}>Previous</button>
            <button onSubmit={goToPageThree}>Next</button>
        </form>
    </div>
    );
    return page2;
}