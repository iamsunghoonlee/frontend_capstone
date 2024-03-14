import { Link } from 'react-router-dom';

import './Main.css';

function Body () {
    return (
        <section>
            <div class="main_container">
                <h1>Little Lemon</h1>
                <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <img src="./asset/"
        </section>
    );
}

function Specials() {
    return (
        <section>
            <div class="special_container">
                <h1>New Menu</h1>
                <p>Please try these dishes</p>
            </div>
        </section>
    );
}

function WeAre() {
    return (
        <section>
            <article class="we_are">
                <h1>About Us</h1>
                <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
            </article>
        </section>
    );
}

function Chicago() {
    return(
        <section>
            <div class="location">
                <h1>Chicago</h1>
                <p>We are located in Chicago</p>
            </div>
        </section>
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
