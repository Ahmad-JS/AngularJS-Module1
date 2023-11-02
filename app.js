(function(){
'use strict';

    angular.module('module1AssignmentApp', [])

    .controller('module1AssignController', function($scope, $filter){

        $scope.inputItem = "";
        $scope.inputResult = "";
        $scope.checkItems = function(){
            var tots = 0;
            var splitItem = $scope.inputItem.split(",");
            console.log(splitItem.length);
            if(splitItem.length > 3)
            {
                document.getElementById("resultType").style.color = "#F00";
                $scope.inputResult = "Too much!";
            }
            else if($scope.inputItem == "")
            {
                document.getElementById("resultType").style.color = "#F00";
                $scope.inputResult = "Please enter data first";
            }
            else{
                document.getElementById("resultType").style.color = "#0F0";
                $scope.inputResult = "Enjoy";
            }
        }
    });
})();
