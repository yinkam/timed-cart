angular.module("Inventory")

//custom directive for inventory view

.directive("inventoryContent", function(){
	return{
		restrict: 'E',
		templateUrl: 'app/inventory/partial/inventory-content.html'
	};

});