angular.module('app.services.quiz', [])

.factory('QuizService', ['$http', function ($http) {

    var service = {};

    service.getQuestions = function () {

        return $http.get('/quiz/questions/all/');

    };

    service.sendUser = function (user) {
        return $http.post('/quiz/result/', user);
    }

    return service;


}]);