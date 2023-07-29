export const Utils = (function() {

    function domRemoveAllChildren(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
          }
    }

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
            text-align: center;
        `;
        container.appendChild(text_container);
    }

    function getImageElement(image, extra_style) {
        let img = new Image();
        img.src = image;

        img.style = `
            width: 100%;
            height: 100%;
            object-fit: cover;
        ` + (extra_style || "");

        return img;
    }

    
    return {
        domRemoveAllChildren,
        drawTitle,
        drawText,
        getImageElement
    }

})();
