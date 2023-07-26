
export const Menu = (function() {

    function draw(container) {
        const menu = document.createElement("div");
        menu.innerText = "MENU";
        container.appendChild(menu);
    }

    return {
        draw
    }



})();

