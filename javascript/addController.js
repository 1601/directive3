/**
 * Created by darlomiguelilagan on 17/06/2016.
 */

app.controller('AddController',function ($scope,$filter) {
    init();
    $scope.add = function () {
        $scope.result.currency = $scope.num1.currency + $scope.num2.currency;
        console.log($scope.result.currency);
    }

    function init() {
        $scope.num1={};
        $scope.num2={};
        $scope.result={};
        $scope.num1.currency =  1023.01;
        $scope.num2.currency =  1000.25;
        // $scope.result.currency =  123.25;
    }

});