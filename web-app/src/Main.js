import React, { useEffect } from "react";
import './Main.css';

function Body () {
    return (
        <div class="main_container">
            <h1>Little Lemon</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
    );
}

function Specials() {
    return (
        <div class="special_container">
            <h1>New Menu</h1>
            <p>Please try these dishes</p>
        </div>
    );
}

function WeAre() {
    return (
        <article class="art1">
            <h1>We Are</h1>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </article>
    );
}

function Chicago() {
    return(
        <div class="location">
            <h1>Chicago</h1>
            <p>We are located in Chicago</p>
        </div>
    );
}

function Main () {

    return(
        <>
            <Body/>
            <Specials/>
            <WeAre/>
            <Chicago/>
        </>
    );
}

export default Main;
