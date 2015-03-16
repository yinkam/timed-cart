//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("ShoppingCart")

.controller('CartController', function($scope, CartService, PurchaseService){		
	
	$scope.getCart = function(){
		return CartService.get();
	};
	
	$scope.count =function(){
		return CartService.count();
	};
	$scope.addtoPurchased = function(){
		PurchaseService.add(CartService.get());
	};
	$scope.removeProduct = function(product){
		CartService.remove(product);
	};

});

