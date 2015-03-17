angular.module('ShoppingCart')

.factory('CartService',function(){		
	
	var count =0;
	var cart = {};
	var total_amount = 0;
		

	return {
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
				count--; //subtract count only when item quantity is 0
			}				
		},

		//get total amount of items in cart
		total: function(){
			total_amount =0;
			angular.forEach(cart, function(value, key){
				total_amount += value.product.price *value.incart;
			});
			
			return total_amount;
		},


		count: function(){
			return count;
		},	

		//reset cart and tracker
		reset: function(){
			cart ={};
			count = 0;
			total = 0;
		}		
	};
})