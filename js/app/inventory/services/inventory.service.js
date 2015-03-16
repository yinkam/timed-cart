angular.module("Inventory")

//custom inventory service to get item list from json file ising wbeserver request
//the app must be hosted for this to work

.factory("InventoryService", function($http){
	
	return{
		getItems: function(){
			return  $http.get('items.json');
		}
	};
});