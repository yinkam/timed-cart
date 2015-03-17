//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("Purchase")

.controller('PurchaseController', function($scope, CartService, PurchaseService){	
	
	//get items from purchased
	$scope.getPurchase = function(){
		return PurchaseService.get();
	};
});
