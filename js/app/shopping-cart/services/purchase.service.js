//This service manages data from cart to purchased
angular.module('ShoppingCart')

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
			}, purchase);
			CartService.reset();			
		},		
	};
});
