angular.module('fontawesomekitLib', ['servoy'])
  .factory("fontawesomekitLib", function ($services) {
    return {
      load: function (kitIdentifier) {
        kitIdentifier = kitIdentifier || '8c0a8876ae';
        var headNode = document.getElementsByTagName('head')[0];

        var existingNodes = headNode.querySelectorAll('[src^="https://kit.fontawesome.com/"]');
        existingNodes.forEach(function (element) {
          headNode.removeChild(element);
        });

        var existingNodes = headNode.querySelectorAll('[src^="https://kit-free.fontawesome.com/"]');
        existingNodes.forEach(function (element) {
          headNode.removeChild(element);
        });

        var existingNodes = headNode.querySelectorAll('[src^="https://kit-pro.fontawesome.com/"]');
        existingNodes.forEach(function (element) {
          headNode.removeChild(element);
        });

        document.getElementsByTagName('html')[0].classList.remove("fontawesome-i2svg-active", "fontawesome-i2svg-complete");

        var newNode = document.createElement('script');
        newNode.src = "https://kit.fontawesome.com/" + kitIdentifier + ".js";
        newNode.type = 'text/javascript';
        newNode.async = false;
        headNode.appendChild(newNode);
      }
    }
  })