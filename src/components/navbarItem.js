export const NavbarItem = function(id,name, custom_style, on_click) {
    let _active = false;

    // COMPONENT DRAW CODE HERE
    let _item;


    let _style =  `
        padding: 0em 1em;
        margin: 0em 0.5em;
        cursor: default;
        font-size: 1.1em;
        border-radius: 10px 10px 0 0;
        user-select: none;
    ` + (custom_style || "");

    let _active_style =  `
        background-color: var(--primary-color-hover);
        color: black;
    `;

    let _hover_style = _active_style;


    function onClick() {
        if (!_active) {
            on_click();
            activate();
        }
        
    }

    function activate() {
        _active = true;
        _item.style = _style + _active_style

    }

    function deactivate() {
        _active = false;
        _item.style = _style;
    }

    function draw(container) {

        _item = document.createElement("div");

        _item.style = _style;
        

        _item.onmouseover = function() {
            if (!_active) {
                _item.style = _style + _hover_style;
            }
        };

        _item.onmouseout = function() {
            if (!_active) {
                _item.style = _style;
            }
        }


        _item.id = id;
        _item.innerText = name;
        _item.onclick = onClick;

        container.appendChild(_item);
    }

    return {
        draw,
        onClick,
        deactivate,
        activate
    }
}