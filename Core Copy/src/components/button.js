export const Button = function() {
    const _button = document.createElement("div");
    let _style =  `
        font-weight: 600;
        font-size: 1.2rem;
        padding: 0.5em 1em;
        background-color: var(--primary-color);
        max-width: 200px;
        border-radius: 5px;
        transition: all 150ms ease;
        cursor: default;
    `;
    _button.style = _style;

    _button.onmouseover = function() {
        
        _button.style = _style + `
            transform: scale(1.1);
            color: white;
            background-color: var(--secondary-color);
            `;
        
    };

    _button.onmouseout = function() {
        
        _button.style = _style ;
        
    };

    

    function setText(text) {
        _button.innerText = text;
    }

    function setOnclick(on_click) {
        _button.onclick = on_click;
    }

    function draw(container) {
        // COMPONENT DRAW CODE HERE
        container.appendChild(_button);
    }

    return {
        draw,
        setText,
        setOnclick
    }


};
