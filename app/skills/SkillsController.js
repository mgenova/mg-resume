(function(){
    
    
    var SkillsController = function ($scope, $route) {
        
          $scope.$route = $route;
    }
   
    
   
    
    
    
    
    
    SkillsController.$inject = ['$scope', '$route'];

    angular.module('myApp').controller('SkillsController', SkillsController);
                
    
    

    
    
           
        
}());