angular.module('ShoppingCart')

.factory('PurchaseService', function(CartService){
	var purchase = [];
	
	return{
		get: function(){
			return purchase;
		},
		add: function(carts){
			var bought = carts;				
			angular.forEach(bought, function(value, key){
				this.push(value);
			}, purchase);
			CartService.reset();			
		},		
	};
});
