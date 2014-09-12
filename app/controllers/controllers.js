
app.controller('BrandController', function ($scope,$routeParams, customersService) {


    init();

    function init() {
        $scope.locations = customersService.getBrands();
        $scope.customer = 'Deep Saurabh';

           
        var ProductID = ($routeParams.productID) ? parseInt($routeParams.productID) : 0;
        if (ProductID > 0) {
            $scope.product = customersService.getProduct(ProductID);
            console.log($scope.product);
        }


    }
    $scope.abc = function(id){
        alert(id);
    }

});

