// src/data/SpecialOffer/customizePizzaData.js

import carrotIcon from '../../assets/Images/Customise Pizza/Carrot.svg';
import meatIcon from '../../assets/Images/Customise Pizza/Meat.svg';
import fishIcon from '../../assets/Images/Customise Pizza/Whole Fish.svg';
import pizzaIcon from '../../assets/Images/Customise Pizza/Ellipse 6.svg';
import heroBanner from '../../assets/Images/restaurent/SpecialOffer/Rectangle 53.svg';

export const customizePizzaHeroImage = heroBanner;
export const smallPizzaIcon = pizzaIcon;

export const MAX_FREE_TOPPINGS = 4;

// Default selected toppings (Figma screenshot ke mutabiq)
export const defaultSelectedToppings = ['cheese', 'onions', 'chicken-tikka', 'tuna'];

export const toppingCategories = [
  {
    id: 'vegitable',
    name: 'Vegitable Toppings',
    icon: carrotIcon,
    toppings: [
      { id: 'cheese', name: 'Cheese' },
      { id: 'green-peppers', name: 'Green peppers' },
      { id: 'tomato', name: 'Tomato' },
      { id: 'mushrooms', name: 'Mushrooms' },
      { id: 'sweetcors', name: 'Sweetcors' },
      { id: 'jalapenos', name: 'Jalapeneos' },
      { id: 'olives', name: 'Olives' },
      { id: 'pineapples', name: 'Pineapples' },
      { id: 'onions', name: 'Onions' },
    ],
  },
  {
    id: 'meat',
    name: 'Meat Toppings',
    icon: meatIcon,
    toppings: [
      { id: 'chicken', name: 'Chicken' },
      { id: 'beef', name: 'Beef' },
      { id: 'salami', name: 'Salami' },
      { id: 'pepperoni', name: 'Pepperoni' },
      { id: 'chicken-tikka', name: 'Chicken Tikka' },
      { id: 'fish', name: 'Fish' },
    ],
  },
  {
    id: 'seafood',
    name: 'Seafood Toppings',
    icon: fishIcon,
    toppings: [
      { id: 'tuna', name: 'Tuna' },
      { id: 'anchovies', name: 'Anchovies' },
      { id: 'prawns', name: 'Prawns' },
    ],
  },
];
