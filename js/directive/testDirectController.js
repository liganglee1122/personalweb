define(
    function() {
        return function($scope) {
            $scope.clickMe = function() {
                alert("testDirectController.clickMe");
            }
        };
    });