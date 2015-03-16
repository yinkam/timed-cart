angular.module("Inventory")

.factory("InventoryService", function($http){
	
	return{
		getItems: function(){
			return  $http.get('items.json');
		}
	};
});