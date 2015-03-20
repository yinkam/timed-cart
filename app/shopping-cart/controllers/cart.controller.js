//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("ShoppingCart")

.controller('CartController', function($scope, timerService, CartService, PurchaseService){		
	
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

	//get total amount of items in cart
	$scope.getTotal = function(){
		return CartService.total();

	};

	//get timer string to be displayed in cart
	$scope.getTimer = function(){
		return timerService.timeStr();
	};

	//listen for TimeUp broadcast when timer ends and reset cart
	$scope.$on('TimeUp', function(){
		CartService.reset();
	});

});

