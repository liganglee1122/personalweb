define([
    "app"
], function(app) {

    //app是Angular应用对象  
    app.config(['$routeProvider',
        function($routeProvider) {
              debugger;
            $routeProvider
                .when('/search', {
                    templateUrl: 'template/search.html',
                    controller: 'SearchCtrl'
                })
                .otherwise({ redirectTo: '/LmpSumQut' });

        }
    ]);

});