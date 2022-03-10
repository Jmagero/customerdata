import React, { useState } from "react";

export const PageFour = (props) => {
    const { firstname, lastname, profession, state, street, zip, city, creditcard, type } = props.location.state;

    let page4 = (
        <div>
            <p>FirstName = {firstname}</p>
            <p>LastName = {lastname}</p>
            <p>Profession = {profession}</p>
            <p>Street = {street}</p>
            <p>City = {city}</p>
            <p>State = {state}</p>
            <p>Creditcard= {creditcard}</p>
            <p>Type = {type}</p>
        </div>
    );
    return page4;
}