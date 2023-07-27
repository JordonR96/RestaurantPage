export const Utils = (function() {

    function domRemoveAllChildren(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
          }
    }

    return {
        domRemoveAllChildren
    }

})();
