import "./navbar.css"

export function Navbar(img, name , items) {
    // items is an array or arrays like [item_name, onClick] fopr us in tab switching
    
    const _container = document.createElement("div");
    _container.classList.add("navbar")
    function draw(parent) {
        // Add the image to our existing div.
        const logo = new Image();
        logo.src = img;

        _container.appendChild(logo);
    

        parent.appendChild(_container)
    }

    return {
        draw
    }

}