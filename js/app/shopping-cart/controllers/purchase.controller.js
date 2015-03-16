//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("ShoppingCart")

.controller('PurchaseController', function($scope, CartService, PurchaseService){	
	
	$scope.getPurchase = function(){
		return PurchaseService.get();
	};
});
