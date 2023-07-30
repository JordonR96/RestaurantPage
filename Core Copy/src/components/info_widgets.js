import {Utils} from "./utils.js"

export const InfoWidgets = function() {

    // type: info
    function drawInfoWidget(container, position, {title, text, custom_style}) {
        console.log(position)
        let widget = document.createElement("div");
        widget.style = `
            grid-area : ${position};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            padding: 1.5em;
            min-height: 150px;
            background-color: var(--primary-color);
        ` + custom_style;
        Utils.drawTitle(widget, title);
        Utils.drawText(widget, text);

        container.appendChild(widget);

    }

    // type: custom
    function drawCustomWidget(container, position, {element}) {
        let widget = document.createElement("div");
        
        widget.style =  `grid-area : ${position};`;
        widget.appendChild(element);
        container.appendChild(widget);

    }

    // draw provided widgets object, keys are left middle right and bottom 
    // values are objects {type, title, text, element} type is either info or custom
    function draw(container, widget_items) {
        
        const info_widget_container = document.createElement("div");

        info_widget_container.style =  `
            height: 100%;
            display: grid;
            grid-template-columns : repeat(3, minmax(33%, 1fr));
            grid-template-rows : repeat(3, 1fr);
            grid-template-areas: 
                "left middle right"
                "left middle right"
                "bottom bottom bottom";
            gap: 0.2rem;
            padding: 2rem 1rem;
        `;

        for (let [position, config] of Object.entries(widget_items)) {
            if (config.type === "info") {
                drawInfoWidget(info_widget_container, position, config);
            } else if(config.type ==="custom") {
                drawCustomWidget(info_widget_container, position, config);
            }
            
        };

        container.appendChild(info_widget_container);
    }

    return {
        draw
    }

};
