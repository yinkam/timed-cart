//controller refernces the inventory module
angular.module("Inventory")

.controller('InventoryController', function($scope,CartService, InventoryService, timerService){
	var store = this;
	store.items = [];

	//get item list in json data file from inventory service and store
	InventoryService.getItems().success(function(data){
		store.items = data;
	});
	
	//add item clicked by user to cart and start timer	
	$scope.add = function(item){
		CartService.add(item); 
		timerService.startTimer(.5);
	};

	//mouse event on over 
	$scope.hoverIn=function(){
		this.showButton = true;
	};

	$scope.hoverOut=function(){
		this.showButton = false;
	};
});