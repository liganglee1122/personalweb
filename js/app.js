define(
    [
        'angular',
        'angularRoute',
        'controllers/homeController',
        'directive/testDirect'
    ],
    function(angular) {
    	              debugger;
        return angular.module('app', ['ngRoute', 'controllers', 'directives']);
    }
);