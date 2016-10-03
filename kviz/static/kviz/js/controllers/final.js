angular.module('app.final', [])

.controller('FinalController', ['$scope', '$rootScope', '$location', 'QuizService',
                                function ($scope, $rootScope, $location, QuizService) {

        
            $rootScope.title='Čestitamo!!!';
            $scope.user = $rootScope.firstName + ' ' +$rootScope.lastName;
            $scope.score = $rootScope.correctAnswers;
                                    
}]);