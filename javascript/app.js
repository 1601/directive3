/**
 * Created by darlomiguelilagan on 13/06/2016.
 */

var app = angular.module('directiveTest',[]);

'use strict';
app.directive('currency', function () {
    return{
        restrict: 'E',
        controller: function ($filter, $scope, $interval) {
            var timeout;
            $scope.ispressing = function () {
                if(timeout) {
                    clearTimeout(timeout); timeout = null;
                }
                   timeout = setTimeout(updateEvent,2000);
            };

            function updateEvent() {
                var n = 0;
                n  = format( $scope.obj.text );
                $scope.obj.currency = parseFloat(n.toString().replace(/\,/g, "")); //Backend
                $scope.obj.text = n; //UI
            }

            function format(num) {
                var x = ( num || "").toString().replace(/\,/g, "").replace(/\./g, "");//   x = (parseFloat(x) / 100).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); //Formatting
                return x = $filter('number')((parseFloat(x) / 100), 2);
            }

            $scope.$watch(function(scope) { return $scope.obj.currency; },
                function(newValue, oldValue) {
                    if(angular.isDefined($scope.obj) && angular.isDefined($scope.obj.currency)) {
                        $scope.obj.text = $scope.obj.currency;
                         var x = ( $scope.obj.text || "").toString().replace(/\,/g,"").replace(/\./g,"");
                         $scope.obj.text = (parseFloat(x) / 100).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); //Formatting
                    }
                 }
            );

        },
        scope:{
            obj: "=ngModel"
        },
        template: "<div id='container'><input id='currencyInputField' type='text' ng-model='obj.text' ng-change='ispressing()'/> <div id='click' ></div>"
    }
});

