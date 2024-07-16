import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(params) {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(params) {
  return (
    <header className="header">
      <h1>KONKONTE, PIZZA AND GOB3 GROUP OF COMPANIES.</h1>;
    </header>
  );
}

function Menu(params) {
  const pizza = pizzaData;
  //const pizza = [];
  const numPizza = pizza.length;

  return (
    <main className="menu">
      <h2>OUR MENU FOR YOU ARE AS FOLLOWS:</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Auhentic Italian cuisine. 6 creative dishes to from.Gob3 is also
            available
          </p>

          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaoObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Still on fire so wait small</p>
      )}
    </main>
  );
}

function Pizza({ pizzaoObj }) {
  //if (pizzaoObj.soldOut) return <p>Already bought o akroma de ko</p>;
  return (
    <li className={`pizza ${pizzaoObj.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzaoObj.photoName} alt="pizza" />; {pizzaoObj.name}
        <p>{pizzaoObj.ingredients}</p>
        <span>{pizzaoObj.soldOut ? "Sold Out" : pizzaoObj.price}</span>
      </div>
    </li>
  );
}

function Footer(params) {
  const hour = new Date().getHours();
  const openHour = 21;
  const closeHour = 2;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p className="order">
          <h2>
            You Sit There aaa Now You dey Come. Is {closeHour}:00pm, So uunless
            you come tomorrow by {openHour}am
          </h2>
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are here from {openHour}:00 to {closeHour}:00. So you can come
      </p>
      <button className="btn">ORDER</button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
