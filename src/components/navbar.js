export const Navbar = (function () {
    // items is an array oof objectslike [{name : "", on_click: function...}] fopr us in tab switching
    
    const _container = document.createElement("div");

    let _logo = null;

    let _title = null;

    let _items = [];

    function setLogoImage(image) {
        _logo = new Image();
        _logo.src = image;

        _logo.style = `
            width: 100px;
            height: 100px;
        `
    }

    function drawLogo(container) {
        const _logo_container = document.createElement("div");

        if (_logo) {
            _logo_container.appendChild(_logo)
        }

        container.appendChild(_logo_container);
       
    }

    function setTitle(title) {
        _title = title;

    }

    function drawTitle(container) {
        const _title_container = document.createElement("div");

        if (_title) {
            _title_container.appendChild(new Text(_title));
        }
        
        container.appendChild(_title_container);
       
    }

    function setNavbarItems(new_items) {
        _items = new_items;
    }

    function drawItems(container) {
        let items_container = document.createElement("div");
        
        items_container.style = `
            display: flex;
        `;

        _items.forEach(function ({name, on_click}) {

            let item = document.createElement("div");
            item.style = `
                padding: 0.2em;
                background-color: red;
            `;
            item.innerText = name;
            item.onclick = on_click;

            items_container.appendChild(item);
        });
        container.appendChild(items_container);
    }
    
    function draw(parent) {
        
        _container.style = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        `;

        drawLogo(_container);
        drawTitle(_container);
        drawItems(_container);
       
        parent.appendChild(_container);
    }

    return {
        draw,
        setLogoImage,
        setTitle,
        setNavbarItems
    }

})();