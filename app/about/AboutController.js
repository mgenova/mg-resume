(function(){
    
    
    var AboutController = function ($scope, $route) {
        
        $scope.$route = $route;
    }
   
    
    
    
    
    
    AboutController.$inject = ['$scope', '$route'];

    angular.module('myApp').controller('AboutController', AboutController);
                
    
    

    
    
           
        
}());