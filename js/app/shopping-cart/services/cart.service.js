angular.module('ShoppingCart')

.factory('CartService',function(){		
	
	var count =0;
	var cart = {};
		

	return{
		//get items from cart
		get: function(){
			return cart;		
		},		

		// add an item to cart
		add: function(item){
			//check if item already in cart and increment quantity
			if (cart[item.id]){
				cart[item.id].incart +=1;
			}
			//add new item to cart
				else{
					cart[item.id] ={
						product: item,
						incart: 1,
					}
				}	
			count++; //keep track of number of items in cart			
		},

		//remove item from cart
		remove: function(item){
			if (cart[item.id]){
				cart[item.id].incart -=1;
				if(cart[item.id].incart ===0){
					delete cart[item.id];						
				}
				count--;
			}				
		},

		//get total amount of items in cart
		total: function(carts){
			angular.forEach(bought, function(value, key){
				
			}, purchase);
		},


		count: function(){
			return count;
		},	

		//reset cart and tracker
		reset: function(){
			cart ={};
			count = 0;
		}		
	};
})