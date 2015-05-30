(function(){
    
    
    var JobsController = function ($scope, $route) {
        
          $scope.$route = $route;
    }
   
    
   
    
    
    
    
    
    JobsController.$inject = ['$scope', '$route'];

    angular.module('myApp').controller('JobsController', JobsController);
                
    
    

    
    
           
        
}());