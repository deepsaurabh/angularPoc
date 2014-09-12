app.directive('map', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<ul ng-repeat="brand in locations"> <li ng-repeat="(brandName , products) in brand"">{{brandName}} <ul ng-repeat="x in products"><a href = "#/customers/{{x.id}}">{{x.product}}</a></ul></li>  </ul>',
        scope: {
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
                // $state.go('customers/:id')
            }
        }
    };
});
