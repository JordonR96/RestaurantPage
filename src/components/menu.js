import { MenuItem } from './menu_item.js';
import big_double from '../assets/images/big_double.jpg';
import big_chicken from '../assets/images/big_chicken.jpg';
import burger_meal from '../assets/images/burger_meal.jpg';
import dirty_nachos from '../assets/images/dirty_nachos.jpg';

// meal
// Photos from https://unsplash.com

  
export const Menu = (function() {

    const menu_items = [
    {
        name : "Big Double",
        image : big_double,
        price : "£3.00",
        description: "2 Prime Beef patties with our signature sauce."
    }, 
    {
        name : "Big Chicken",
        image : big_chicken,
        price : "£3.00",
        description: "Crispy battered chicken breast with a generous heap of our house slaw."

    }, 
    {
        name : "Big Meal",
        image : burger_meal,
        price : "£5.00",
        description: "One of our burgers with perfectly crispy fries and a drink of your choice."
    }, 
    {
        name : "Dirty Nachos",
        image : dirty_nachos,
        price : "£5.00",
        description : "Crispy tortilla chips covered in a mix of ground beef and spicy veggies."
    }, 
    ]

    function createMenuItem(item_config) {

        return MenuItem(item_config);

    }

    function draw(container) {
        const menu = document.createElement("div");
        menu.style = `
            margin: 4rem 0;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;
            width: 80ch;
        `;
        
        menu_items.forEach(menu_item => menu.appendChild(createMenuItem(menu_item)));
        
        
        container.appendChild(menu);
    }

    return {
        draw
    }



})();

