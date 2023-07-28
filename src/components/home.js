import { InfoWidgets } from "./info_widgets";
export const Home = (function() {

    function getBookWidget() {
        let container = document.createElement("div");
        container.innerText = "Book Now";

        return container;
    }

    function draw(container) {
        const home = document.createElement("div");
        home.style = `height: 100%;`;

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
            title: "Contacts",
            text: "Phone : 07714860360Email : jordonrowley1996@gmail.com",
        };

        let welcome_config =  {
            type : "info",
            title: "Welcome to JR's",
            text: "",
            custom_style: `
                background-color : var(--primary-complementary-color);
                color: white;
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

