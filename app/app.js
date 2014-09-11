/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('customersApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/customers.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'app/partials/customerOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: 'app/partials/orders.html'
            })
        .otherwise({ redirectTo: '/customers' });
});

app.directive('map', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<ul ng-repeat="brand in locations"> <li ng-repeat="(brandName , products) in brand"">{{brandName}} <ul ng-repeat="x in products"><li ng-click="abc(x.id);">{{x.product}}</li></ul></li>  </ul>',
        scope: {
            // creates a scope variable in your directive
            // called `locations` bound to whatever was passed
            // in via the `locations` attribute in the DOM
            locations: '=locations'
        },
        link: function(scope, element, attrs) {
//            scope.$watch('locations', function(locations) {
//                angular.forEach(locations, function(location, key) {
//                    console.log(location)
//                });
//            });
            scope.abc = function(id){
                alert(id);
            }
        }
    };
});




