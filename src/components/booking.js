export const Booking = (function() {

    function draw(container) {
        const booking = document.createElement("div");
        booking.innerText = "Booking";
        // COMPONENT DRAW CODE HERE
        container.appendChild(booking);
    }

    return {
        draw
    }


})();
