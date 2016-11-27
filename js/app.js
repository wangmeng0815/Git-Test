var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'index.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'homeCtrl'
		})
		.state('help', {
			url: '/help',
			templateUrl: 'partials/help.html',
			controller: 'helpCtrl'
		})
		.state('setting', {
			url: '/setting',
			templateUrl: 'partials/setting.html',
			controller: 'settingCtrl'
		})
		.state('help.page1', {
			url: '/page/page1',
			templateUrl: 'partials/helpPage1.html'
		})
		.state('help.page2', {
			url: '/page/page2',
			templateUrl: 'partials/helpPage2.html'
		})
		.state('house', {
			url:'/house',
			templateUrl: 'partials/house.html'
		})
		.state('content', {
			url:'/content',
			view: {
//				'': {
//					templateUrl: 'partials/content.html'
//				},
				'/list@content': {
					templateUrl: 'partials/list.html',
					controller: 'listCtrl'
				},
				'/detail@content':{
					templateUrl: 'partials/detail.html',
					controller: 'detailCtrl'
				}
			}
		});
}).run(["$rootScope", function($rootScope, $state, $stateParams) {//这里的run方法只会在angular启动的时候运行一次。
	
	/* 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入 */
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]).factory('showService', function(){
	 var shows = [{
        id: 1,
        name: 'Walking Dead',
        description: 'The Walking Dead is an American post-apocalyptic horror drama television series developed by Frank Darabont. It is based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. It stars Andrew Lincoln as sheriff\'s deputy Rick Grimes, who awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies.'
    },
    {
        id: 2,
        name: 'Breaking Bad',
        description: 'Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. The show originally aired on the AMC network for five seasons, from January 20, 2008 to September 29, 2013. The main character is Walter White (Bryan Cranston), a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series.'   
    },
    {
        id: 3,
        name: '7D',
        description: 'The 7D is an American animated television series produced by Disney Television Animation, and broadcast on Disney XD starting in July 7, 2014. It is a re-imagining of the titular characters from the 1937 film Snow White and the Seven Dwarfs by Walt Disney Productions'
    }];


    return {
        list: function(){
            return shows;
        },
        find: function(id){
            return _.find(shows, function(show){return show.id == id});
        }
    }
})
