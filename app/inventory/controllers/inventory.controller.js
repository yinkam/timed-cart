//controller refernces the inventory module
angular.module("Inventory")

.controller('InventoryController', function($scope,CartService, InventoryService){
	var store = this;
	store.items = [];

	//get item list in json data file from inventory service and store
	InventoryService.getItems().success(function(data){
		store.items = data;
	});
	
	//add item clicked by user to cart
	$scope.add = function(item){
		CartService.add(item); 	
	};
});