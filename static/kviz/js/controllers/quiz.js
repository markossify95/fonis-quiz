angular.module('app.quiz', [])

.controller('QuizController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', 'toastr',
                              function ($scope, $routeParams, $log, $location, $rootScope, toastr) {



        $rootScope.title = 'Quiz!';
        $scope.user = $rootScope.firstName + ' ' + $rootScope.lastName;



        $scope.question = $rootScope.questions[$routeParams.id];
        $scope.q1 = $scope.question.fields;
        $scope.q2 = $scope.question.fields;
        $scope.q3 = $scope.question.fields;
        $scope.q4 = $scope.question.fields;
        
        //$log.log($scope.question.fields);
        /*$scope.$watch('myForm.answer.value', function () {
            var q = myForm.answer.value;
            myForm.answer.value = q;
        });*/
        $scope.submit = function (){
            
            if(myForm.answer.value==='true'){
                toastr.success('Tacno');
                $routeParams.id++;
                $rootScope.correctAnswers++;
                $location.path('quiz/'+$routeParams.id);
                
            }
            else{
                toastr.error('Netacno');
                $routeParams.id++;
                $location.path('quiz/'+$routeParams.id);
                
            }
        };



}]);