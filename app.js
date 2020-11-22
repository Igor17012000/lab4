(function () {
    'use strict';

    

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];

    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;

        var shoppingList = ShoppingListFactory();

        list2.item = shoppingList.getbuyProducts();
    }
	
var factory2 = new ShoppingListService();

    function ShoppingListService() {
        var service = this;

        var items = [
            {
                name: 'Яблук',
                quantity: 10
            },
            {
                name: 'Мандаринок',
                quantity: 9
            },
            {
                name: 'Шоколадок',
                quantity: 3
            },
            {
                name: 'Чіпсів',
                quantity: 6
            },
            {
                name: 'пепсі',
                quantity: 8
            },
        ];
        var buyProducts = [];

        service.removeItem = function (itemIndex) {
            buyProducts.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getbuyProducts = function () {
            return buyProducts;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }

})();