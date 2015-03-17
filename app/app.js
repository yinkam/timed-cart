(function(){
	//this is the main app module
	angular.module("app", ["ngMaterial","ShoppingCart","Inventory","Purchase"])		
	
	//Material design theme config
	.config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('default')
	    .primaryPalette('teal')
	    .accentPalette('red');
	});
	
})();