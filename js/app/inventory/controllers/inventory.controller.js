angular.module("Inventory")

.controller('InventoryController', function($scope,CartService, InventoryService){
	var store = this;
	store.items = [];

	InventoryService.getItems().success(function(data){
		store.items = data;
	});
	
	$scope.add = function(item){
		CartService.add(item);
		
	};

});