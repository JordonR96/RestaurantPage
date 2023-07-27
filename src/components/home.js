
export const Home = (function() {
    // TODO refactor some of this to be reused
    function drawTitle(container, title_text) {
        let title = document.createElement("div");
        title.innerText = title_text
        title.style = `
            font-size: 1.5rem;
            font-weight: bold;
        `;
        container.appendChild(title);
    }

    function drawText(container, text) {
        let text_container = document.createElement("div");
        text_container.innerText = text
        text_container.style = `
        `;
        container.appendChild(text_container);
    }

    function drawInfoWidget(container, title_text, main_text) {
        let widget = document.createElement("div");
        widget.style = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background-color: var(--secondary-color);
            padding: 1em;
            min-height: 150px;
        `;
        drawTitle(widget, title_text);
        drawText(widget, main_text);

        container.appendChild(widget);


    }

    function draw(container) {
        const home = document.createElement("div");
        home.style = `
            height: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
            padding: 2rem 1rem;
            background-color: var(--primary-color);
        `;

        drawInfoWidget(home, "Welcome to JR's", "");

        // TODO better opening times
        let opening_times = `
            Mon - Fri : 11AM - 11PM
            Sat       : 12PM - 2AM
            Sun       : Closed
        `
        drawInfoWidget(home, "Hours", opening_times);

        drawInfoWidget(home, "Address", "70 Best Burger Rd");
        
        drawInfoWidget(home, "Address", "70 Best Burger Rd");
        
        // TODO book table widget w button + add booking page
        container.appendChild(home);
    }

    return {
        draw
    }


})();

