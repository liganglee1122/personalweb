define(['controllers/controllers'],
    function(controllers) {
        controllers.controller('homeController', ['$scope',
            function($scope) {
              debugger;
              $scope.name="ligang";
              $scope.clicktest=function()
              {
                debugger;
                alert("clicktest");
              }
            }
        ]);
    });