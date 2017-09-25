define(['../directive/directives'],
    function(directives) {
		debugger;
        directives.directive("testDirect", function() {
            return {
                scope: true,
                template: ['<div><h1>自定义指令!</h1><br/><button ng-click="clickMe()">ClickMe</button></div>'].join(""),
                controller: function($scope) {
                    $scope.clickMe = function() {
                        alert("testDirectController.clickMe");
                    }
                }
            }
        });
    });