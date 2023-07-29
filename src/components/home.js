import { InfoWidgets } from "./info_widgets";
import { Button } from './button.js';
export const Home = (function() {

    function getBookWidget() {
        let container = document.createElement("div");
        container.style = `
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `;
        let book_button = Button();
        book_button.setText("Book Now");
        book_button.setOnclick(() => {
            alert("Booking popup would open");
        });
        book_button.draw(container);

        return container;
    }

    function draw(container) {
        const home = document.createElement("div");
        home.style = `height: 100%; width: 80ch;`;

        let opening_times = `
            Mon - Fri : 11AM - 11PM
            Sat       : 12PM - 2AM
            Sun       : Closed
            `;
        let opening_config = {
            type : "info",
            title: "Hours",
            text: opening_times,
        };

        let contact_config =  {
            type : "info",
            title: "Contact",
            text: `
            07714860360
            `,
        };

        let welcome_config =  {
            type : "info",
            title: `
            Best
            Burger
            In
            Town
            `,
            text: "",
            custom_style : `
                color: var(--primary-color);
                background-color: transparent;
                border: 0;
                text-align: center;
            `,

        };

        let widget_items = {
            "left" : contact_config,    
            "middle" : welcome_config, 
            "right" : opening_config,  
            "bottom" :  {
                type: "custom",
                element: getBookWidget()
            }
        };

        let widgets = InfoWidgets();
        widgets.draw(home, widget_items);
                
        container.appendChild(home);
    }

    return {
        draw
    }


})();

