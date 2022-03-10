import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";


export const PageThree = (props) => {
    const [ creditcard, setCreditCard] = useState(" ");
    const [ type, setType ] = useState("");
    const history = useHistory();
    const location = useLocation();
  
    const { firstname, lastname, profession, state, street, zip, city } = location.state;

    const goToPageFour = () => {
        history.push('/pagefour', 
        {   firstname : firstname, 
            lastname : lastname, 
            profession: profession,
            street : street,
            city : city,
            zip : zip,
            state : state,
            creditcard : creditcard,
            type : type
        }
        )}

    const goToPageThree = () => {
        props.history.push('/pagethree', 
        {firstname : firstname, 
            lastname : lastname,
             profession: profession,
             street : street,
             city : city,
             zip : zip,
             state : state
         })
    }
    let page3 = (
    <div>
        <div>
            <p>FirstName = {firstname}</p>
            <p>LastName = {lastname}</p>
            <p>Profession = {profession}</p>
            <p>Street = {street}</p>
            <p>City = {city}</p>
            <p>State = {state}</p>
        </div>
        <form>
            <input
                type="text"
                name="Creditcard"
                value={creditcard}
                onChange={(e) => setCreditCard(e.target.value) }
            />
             <select
                type="radio"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value) }>
                <option>Visa</option>
                <option>Mastercard</option>
            </select>
            <button onSubmit={goToPageFour}>Next</button>
            <button onSubmit={goToPageThree}>Previous</button>
        </form>
    </div>
    );
    return page3;
}