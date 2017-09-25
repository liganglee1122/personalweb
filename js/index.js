require.config({  
    paths: {  
        //库文件  
        //"responsive": "lib/responsive-nav",  
        "angular": "lib/angular",
        "angularRoute": "lib/angular-route",
        "jquery": "lib/jquery-1.12.4"
    },  
    shim: {  
        angular: {  
            exports: "angular"  
        },  
        angularRoute: {  
            deps: ["angular"]  
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
}); 

require(["routes",'jquery'],function(){
	angular.bootstrap(document, ["app"]);
});