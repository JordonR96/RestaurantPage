// task is basically done just add more stuff
// https://eckben.github.io/bearysBreakfastBar/
// TODO make it look nice. and add actual content
// TODO give everythimg an id to match its filename
// TODO see if i can refactor and actually use component template in my components to reduce boilerplate

import jb_logo from '../assets/images/jb_logo.jpeg';
import {Utils} from './utils.js';

import { Navbar } from "./navbar.js";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

export const App = (function() {
    const page_container = document.createElement("div");


    function drawPage(new_component) {
        Utils.domRemoveAllChildren(page_container);
        new_component.draw(page_container);
    }

    
    // TODO THIS WILL BE MORE LIKE REFRESH JUST DOING INITIAL
    function drawPageContainer(container, style) {
        // get space to draw pages
        // TODO make properly flexible - scroll bar maybe
        page_container.style = `
            flex-grow: 1;
        `;
        container.appendChild(page_container);
    }

    function drawNavigation(container) {
        Navbar.setLogoImage(jb_logo);
        // No title looks better in this case
        Navbar.setTitle("");

        // nav items home is active to start
        const navbar_items = [
            {
                name: "Home",
                on_click: () => drawPage(Home),
                active: true,
            }, 
            {
                name: "Menu",
                on_click: () => drawPage(Menu),
            },
            {
                name: "Contact",
                on_click: () => drawPage(Contact),
            }
        ]

        Navbar.setNavbarItems(navbar_items);
        Navbar.draw(container);
    }

    function draw(container) {
        const app = document.createElement("div");
        app.style = `
            height: 100%;
            display: flex;
            flex-direction: column;
        `;

        drawNavigation(app);
        
        drawPageContainer(app);        

        container.appendChild(app);

    }

    return {
        draw
    }


})();

