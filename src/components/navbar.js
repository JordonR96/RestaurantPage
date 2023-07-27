import {NavbarItem} from "./navbarItem.js"
export const Navbar = (function () {
    // items is an array oof objectslike [{name : "", on_click: function...}] fopr us in tab switching
    
    const _container = document.createElement("div");

    let _logo = null;

    let _title = null;

    let _items = [];

    let _item_elements = [];
    

    function setLogoImage(image) {
        _logo = new Image();
        _logo.src = image;

        _logo.style = `
            width: 100%;
            height: 100%;
        `
    }

    function drawLogo(container) {
        // TODO add alt
        const _logo_container = document.createElement("div");
        _logo_container.style = `
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120px;
        `;

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

    function deactivateAll(callback) {
        // Note - this only sets to inactive and affects styles and doesnt click anything else;
        _item_elements.forEach(item => item.deactivate());
    }

    function drawItems(container) {
        let items_container = document.createElement("div");
        items_container.id = "navbar_item_container";
        
        items_container.style = `
            display: flex;
        `;

        _items.forEach(function ({name, on_click, active}, i) {
            let item = NavbarItem(`navbar_item_${i}`, name, function() {
                // deactivate all, only one active at a time.
                deactivateAll(on_click);
                on_click();
            });

            item.draw(items_container)

            if (active) {
                // items are not active by default so if we want this one to be active perform same action as clicking
                item.onClick();
            }
            // store reference to each item we have
            _item_elements.push(item);
        });
        container.appendChild(items_container);
    }
    
    function draw(parent) {
        
        _container.style = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            background-color: var(--primary-color);
            border-bottom: 2px solid black;
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