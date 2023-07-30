// task is basically done just add more stuff
// https://eckben.github.io/bearysBreakfastBar/

import jb_logo from '../assets/images/jb_logo.jpeg';
import {Utils} from './utils.js';

import { Navbar } from "./navbar.js";
import { Home } from "./home.js";
import { Menu } from "./menu.js";

export const App = (function() {
    const page_container = document.createElement("div");


    function drawPage(new_component) {
        Utils.domRemoveAllChildren(page_container);
        new_component.draw(page_container);
    }

    
    function drawPageContainer(container, style) {
        // get space to draw pages
        page_container.style = `
            flex-grow: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
            }
        ]

        Navbar.setNavbarItems(navbar_items);
        Navbar.draw(container);
    }

    function draw(container) {
        const app = document.createElement("div");
        app.style = `
            height: 100%;
            width: 100%;
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

