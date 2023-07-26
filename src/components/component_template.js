export const ComponentName = (function() {

    function draw(container) {
        const component_contents = document.createElement("div");
        // COMPONENT DRAW CODE HERE
        container.appendChild(component_contents);
    }

    return {
        draw
    }


})();
