(function(){
	angular.module("app", ["ngMaterial","ShoppingCart","Inventory"])		
	
	//Material design theme config
	.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('teal')
	    .accentPalette('red');
	});
	
})();