
export const Contact = (function() {

    function draw(container) {
        const contact = document.createElement("div");
        contact.innerText = "CONTACTS";
        container.appendChild(contact);
    }

    return {
        draw
    }



})();

