var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope) {
    $scope.name = "LiGang";
	$scope.student={};
	$scope.student.name="stuname";
    $scope.isNgIf = true;

    $scope.languages = [
        { key: 'zh', value: 'CN' },
        { key: 'en', value: 'US' }
    ];

    $scope.clickNgifBtn = function() {
    	console.log(this.innername);
    	console.log(this.student.name);
    	console.log(this.$parent.student.name);
        console.log($scope.student.name);
        console.log("clickNgifBtn");
    }

    $scope.clickMe = function($event) {
        debugger;

        var arrCopySrc = [1, 2, 3];

        var arrExtSrc = [1, 2, 3];

        var arrCopyDst = angular.copy(arrCopySrc);

        var arrExtDst = angular.extend(arrExtSrc);

        arrCopyDst[0] = 4;

        arrExtDst[0] = 4;

        console.log(arrCopySrc);
        console.log(arrExtSrc);

        console.log(arrCopyDst);
        console.log(arrExtDst);


        // console.log($scope.name);
        // console.log(document.getElementById('sidebar').getAttribute('key'));
        //var sidebar = document.getElementById('sidebar');
        //var scope = angular.element(sidebar).scope();
    }

});

app.directive("testDirect", function() {
    return {
        template: "<h1>自定义指令!</h1>"
    };
});