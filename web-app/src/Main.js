import { Link } from 'react-router-dom';
import './Main.css';
import restaurantImage from './asset/ll-food.jpg';
import bruschettaImage from './asset/bruschetta.jpeg';
import greekSaladImage from './asset/greek-salad.jpeg';
import lemonDessertImage from './asset/dessert.jpeg';
// import './WeekSpecials.css';

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
            <img
                className="res_food"
                src={restaurantImage}
                alt="Restaurant food"
            />
        </section>
    );
}

const MealCard = ({ meal }) => {
    return (
      <article className="meal-card">
        <div className="meal-card-image">
          <img src={meal.image} alt={meal.name} />
        </div>
        <div className="meal-card-header">
          <h3>{meal.name}</h3>
          <span>{meal.price}</span>
        </div>
      </article>
    );
};

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
  },
];

const Specials = () => {
    return (
      <section className="container grid week-specials">
        <div className="week-specials-header">
          <h1>This week specials!</h1>
        </div>
        {meals.map((meal, index) => 
          <MealCard key={index} meal={meal} />
        )}
      </section>
    );
  };


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
