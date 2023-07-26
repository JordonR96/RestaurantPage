
export const Home = (function() {

    function draw(container) {
        const home = document.createElement("div");
        home.innerText = "HOME";
        container.appendChild(home);
    }

    return {
        draw
    }


})();

