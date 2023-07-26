export const Utils = (function() {

    function domRemoveAllChildren(element) {
        while (element.lastElementChild) {
            element.removeChild(element.lastElementChild);
          }
    }

    return {
        domRemoveAllChildren
    }

})();
