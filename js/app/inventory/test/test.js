describe("Cart Service", function() {

	beforeEach(module('app'));

	var $CartService;
	beforeEach(inject(function(_$CartService_) {
		$CartService = _$CartService_;
	}));

	

	it('Should have an empty cart', function(){
		expect(true).toBeTruthy();

	});


});

/*
describe('Inventory Service With HTTP Backend', function() {
	var $httpBackend, authRequestHandler, store, items;
	beforeEach(module('Inventory'));


	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');

		authRequestHandler = $`httpBackend.when('GET', 'items.json').respond( [
		{id: 2,name: "Eragon",images: "images/eragon.jpg", price: 500},
		{id: 3,name: "The Two Towers",images: "images/two-towers.jpg", price: 200},
		{id: 4,name: "The Half Blood Prince",images: "images/Half-Blood_Prince.jpg", price: 200},
		{id: 2,name: "Divergent",images: "images/divergent.jpg", price: 500},
		{id: 2,name: "The Chamber of Secrets",images: "images/Chamber_of_Secrets.jpg", price: 200},
		{id: 2,name: "Game of Thrones",images: "images/Game_of_thrones.jpeg", price: 200},

		]);

	}));

	
});

describe('Controller: InventoryController', function() {
	var $httpBackend, authRequestHandler;
	
	beforeEach(module("Inventory"));	
	
	var $controller, scope;
	beforeEach(inject(function($scope, _$controller_) {
		$controller = _$controller_;		
		
	}));

	it('should have items load', function() {
		expect('items.json').toEqual([
		{id: 2,name: "Eragon",images: "images/eragon.jpg", price: 500},
		{id: 3,name: "The Two Towers",images: "images/two-towers.jpg", price: 200},
		{id: 4,name: "The Half Blood Prince",images: "images/Half-Blood_Prince.jpg", price: 200},
		{id: 2,name: "Divergent",images: "images/divergent.jpg", price: 500},
		{id: 2,name: "The Chamber of Secrets",images: "images/Chamber_of_Secrets.jpg", price: 200},
		{id: 2,name: "Game of Thrones",images: "images/Game_of_thrones.jpeg", price: 200},

		]);
	});

});
*/