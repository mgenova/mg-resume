(function(){
    
    var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

    myApp.config(function($routeProvider){

       $routeProvider 
       .when('/about/', {
           templateUrl: 'app/about/about.html',
           controller: 'AboutController'
        })
       .when('/contact/', {
           templateUrl: 'app/contact/contact.html',
           controller: 'ContactController'
        })
       .when('/hobbies/', {
           templateUrl: 'app/hobbies/hobbies.html',
           controller: 'HobbiesController'
        })
        .when('/home/', {
           templateUrl: 'app/home/home.html',
           controller: 'HomeController'
        })
       .when('/jobs/', {
           templateUrl: 'app/jobs/jobs.html',
           controller: 'JobsController'
        })
       .when('/skills/', {
           templateUrl: 'app/skills/skills.html',
           controller: 'SkillsController'
        })
        .otherwise({redirectTo:'/'});
   });

        
    // CONTROLLERS ============================================
    // Each controller will have its own pageClass variable,
    // which will be able to apply diffrent animations to each 
    // specific page.
        
     
        
    // about page controller
    myApp.controller('AboutController', function($scope) {
        $scope.pageClass = 'page-about';
    });

    // contact page controller
    myApp.controller('ContactController', function($scope) {
        $scope.pageClass = 'page-contact';
    });

    // hobbies page controller
    myApp.controller('HobbiesController', function($scope) {
        $scope.pageClass = 'page-hobbies';
    });
        
     // about page controller
    myApp.controller('AboutController', function($scope) {
        $scope.pageClass = 'page-home';
    });    
        
    // jobs page controller
    myApp.controller('JobsController', function($scope) {
        $scope.pageClass = 'page-jobs';
    });
        
    // skills page controller
    myApp.controller('SkillsController', function($scope) {
        $scope.pageClass = 'page-skills';
    });

        
        
        
        
}());