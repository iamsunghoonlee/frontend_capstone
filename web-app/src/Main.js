import React, { useEffect } from "react";
import { useReducer } from "react";

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
            <h1>Article1</h1>
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
function BookingForm(props) {
    const [formData, setFormData] = React.useState({date:"", time:"", guests:"", occasion:""});
    // const [availableTimes, setAvailableTimes] = React.useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

    function changeHandler(e){
        setFormData({...formData, [e.target.name]:e.target.value});
        console.log(e.target.name);
        console.log(e.target.name);
    };

    function submitHandler(e){
        e.preventDefault();
        // props.onAdd(formData);
        setFormData({date:"", time:"", number:"", occasion:""})
   
    };

    return (
        <>
            <h1>Book a Table</h1>
            <p>Book a table for your special occasion</p>
            <form className="booking-form" onSubmit={submitHandler}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={formData.date} onChange={changeHandler}/>
                
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={formData.time} onChange={changeHandler}>
                    {props.availableTimes.map(time => (
                        <option>{time}</option>
                    ))};
                </select>
                
                <label htmlFor="guests">Number of guests</label>
                <input type="number" name="guests" placeholder="Guest Number" min="1" max="10" id="guests" value={formData.guests} onChange={changeHandler}/>
                
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={changeHandler}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>    
                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    );
};


function BookingPage(props){
    return (
        <div class="booking">
            <BookingForm availableTimes={props.availableTimes}/>
        </div>
    );
}

function Main () {
    // const [availableTimes, setAvailableTimes] = React.useState([])

    const initializeTimes = () => {
        const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
        return availableTimes;
    };
    
    //Reducer Function
    const updatedTimes = (state, action) => {
        if (action.type === 'update_time') return state;
    } 
    //useReducer
    const [availableTimes, dispatch] = useReducer(updatedTimes, initializeTimes());

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
            .then((response) => response.fetchAPI(date))
            .then((response) => response.fetchAPI(date))
            // how to receive data from this and update 
    }, [])

    return(
        <>
            <Body/>
            <Specials/>
            <BookingPage availableTimes={availableTimes} onChange={() => dispatch({type: 'update_time'})}/>
            <CustomersSay/>
            <Chicago/>
        </>
    );
}

export default Main;
