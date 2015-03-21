//This is the cart controller that controls all the data between the shopping cart, inventory and purchased section

angular.module("ShoppingCart")

.controller('CartController', function($scope, $mdDialog, timerService, CartService, PurchaseService){		
	
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

	//confirm dialog before purchase
	$scope.showConfirm = function(ev) {
	    var confirm = $mdDialog.confirm()
	     
	      .title('Are you sure you want to purchase these items?')
	      .ariaLabel('Lucky day')
	      .ok('Purchase')
	      .cancel('Back To Cart')
	      .targetEvent(ev);
	    $mdDialog.show(confirm).then(function() {

			//move items from cart to purchased on confirm
			PurchaseService.add(CartService.get());

	    }, function() {
	      
	    });
	 };

});

