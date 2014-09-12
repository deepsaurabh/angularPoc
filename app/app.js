

var app = angular.module('pocApp', ['ngRoute','ui.bootstrap']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'BrandController',
                templateUrl: 'app/partials/brand.html'
            })
        
        .when('/customers/:productID',
            {
                controller: 'BrandController',
                templateUrl: 'app/partials/brand.html'
            })
        .otherwise({ redirectTo: '/customers' });
});




