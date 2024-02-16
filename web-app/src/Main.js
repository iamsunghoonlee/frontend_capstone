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
            <p>Please try this</p>
        </div>
    );
}

function CustomersSay() {
    return (
        <article class="art1">
            <h3>Article1</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </article>
    );
}

function Chicago() {
    return(
        <div class="location">
            <h3>Chicago</h3>
            <p>We are located in Chicago</p>
        </div>
    );
}

function BookingPage(){
    return (
        <div class="booking">
            <h3>Book a Table</h3>
            <p>Book a table for your special occasion</p>
        </div>
    );
}

function Main () {
    return(
        <>
            <Body/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
            <BookingPage/>
        </>
    );
}

export default Main;
