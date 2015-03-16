//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("ShoppingCart")

.controller('CartController', function($scope, CartService, PurchaseService){		
	
	// get all items in cart
	$scope.getCart = function(){
		return CartService.get();
	};
	
	//tract number of items in cart
	$scope.count =function(){
		return CartService.count();
	};

	//add items from cart to purchased on checkout
	$scope.addtoPurchased = function(){
		PurchaseService.add(CartService.get());
	};

	//remove item from cart
	$scope.removeProduct = function(product){
		CartService.remove(product);
	};

});

