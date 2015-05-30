(function(){
    
    
    var HomeController = function ($scope, $route) {
        
          $scope.$route = $route;
    }
   
    
    
    
    
    
    
    HomeController.$inject = ['$scope', '$route'];

    angular.module('myApp').controller('HomeController', HomeController);
                
    
    

    
    
           
        
}());