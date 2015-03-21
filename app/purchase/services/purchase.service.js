//This service manages data from cart to purchased
angular.module('Purchase')

.factory('PurchaseService', function(CartService){
	var purchase = [];
	
	return{
		get: function(){
			return purchase;
		},

		//add items from cart to purchased, reset cart when sucessfull
		add: function(carts){
			var bought = carts;				
			angular.forEach(bought, function(value, key){				
				this.push(value);

				//reduce number of items available for purchase on checkout
				value.product.instore -= value.incart;
				
			}, purchase);
			CartService.reset();			
		},		
	};
});
