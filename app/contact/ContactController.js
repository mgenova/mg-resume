(function(){
    
    
    var ContactController = function ($scope, $route) {
        
          $scope.$route = $route;
    }
   
    
   
    
    
    
    
    
    ContactController.$inject = ['$scope', '$route'];

    angular.module('myApp').controller('ContactController', ContactController);
                
    
    

    
    
           
        
}());