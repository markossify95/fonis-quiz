angular.module('app.services.quiz',[])

.factory('QuizService',['$http',function($http){
    
    var service={};
    
    service.getQuestions=function(){
        
        return $http.get('/quiz/questions/all/');
        
    };
    
    
    return service;
}]);