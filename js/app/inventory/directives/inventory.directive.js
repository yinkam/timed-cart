angular.module("Inventory")

.directive("inventoryContent", function(){
	return{
		restrict: 'E',
		templateUrl: 'js/app/inventory/partial/inventory-content.html'
	};

});