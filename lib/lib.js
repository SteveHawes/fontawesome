angular.module('fontawesomekitLib',['servoy'])
.factory("fontawesomekitLib",function($services) 
{
	return {
		load: function(kitIdentifier) {
			if(kitIdentifier) {
				var headNode = document.getElementsByTagName('head')[0];
				
				var existingNodes = document.querySelector('[src^="https://kit.fontawesome.com/]"');
				if(existingNodes) {
					headNode.removeChild(existingNodes[0]);
				}
				
				existingNodes = document.querySelector('[src^="https://kit-free.fontawesome.com/]"');
				if(existingNodes) {
					headNode.removeChild(existingNodes[0]);
				}
				
				document.getElementsByTagName('html')[0].classList.remove("fontawesome-i2svg-active", "fontawesome-i2svg-complete");
				
				var newNode = document.createElement('script');
				newNode.src = "https://kit.fontawesome.com/" + kitIdentifier + ".js";
				newNode.type = 'text/javascript';
				newNode.async = false;
				headNode.appendChild(newNode);
			}
		}
	}
})