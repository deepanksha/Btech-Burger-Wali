import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assests/burger1.png";
import burger2 from "../../assests/burger2.png";
import burger3 from "../../assests/burger3.png";


const Menu = () => {

  const addToCartHandler = (itemNum) =>{

  };
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard price={200} itemNum={1} burgerSrc={burger1} title="Cheese Burger" handler={addToCartHandler} delay={0.1}/>

        <MenuCard price={500} itemNum={2} burgerSrc={burger2} title="Veg Cheese Burger" handler={addToCartHandler} delay={0.5} />

        <MenuCard price={1800} itemNum={3} burgerSrc={burger3} title="Cheese Burger with French Fries" handler={addToCartHandler}  delay={0.8}/>
      </div>
    </section>
  )
}

export default Menu