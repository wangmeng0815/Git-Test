var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "partials/PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "partials/Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "partials/Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "partials/Page3.html"
        });
	
})
