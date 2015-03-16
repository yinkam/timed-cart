angular.module("Inventory")

//custom directive for inventory view

.directive("inventoryContent", function(){
	return{
		restrict: 'E',
		templateUrl: 'js/app/inventory/partial/inventory-content.html'
	};

});