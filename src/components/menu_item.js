import { Utils } from "./utils";
export function MenuItem({name, image, price, description}) {
    let _width = "300px";
    let _height = "300px";
    let _details = document.createElement("div");
    _details.style = `
        width: ${_width};
        height: ${_height};
        padding: 0.5rem;
        position: absolute;
        background-color: rgba(117,117,117,0.3);
        color: white;
    `;

    let _description = document.createElement("div");
    _description.innerText = description;
    _description.style.display = "none";
    
    
    function drawDetails(container) {
        
        let name_element = document.createElement("div");
        name_element.innerText = name;
        _details.appendChild(name_element);

        let price_element = document.createElement("div");
        price_element.innerText = price;
        _details.appendChild(price_element);

        
        _details.appendChild(_description);


        container.appendChild(_details);
    }

    const item = document.createElement("div");
    item.style = `
        width: ${_width};
        height: ${_height};
        object-fit: cover;

    `;
    const menu_image = Utils.getImageElement(image)
    
    item.onmouseover = function() {
        
        // _details.style.display = "none";
        _description.style.display = "block";
        
    };

    item.onmouseout = function() {
        
        // _details.style.display = "block";
        _description.style.display = "none";
    }
    // details must be added after image;
    drawDetails(item);
    item.appendChild(menu_image);

    return item;

}