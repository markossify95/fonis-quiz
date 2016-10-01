angular.module('app.home', [])

.controller('HomeController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', 'toastr', 'QuizService',
                             function ($scope, $routeParams, $log, $location, $rootScope, toastr, QuizService) {



        $routeParams.id = 0;
        $rootScope.title = 'My app';
        $rootScope.correctAnswers = 0;
        $scope.firstName = '';
        $scope.lastName = '';
        $rootScope.questions = {};
        $scope.q = {};

        function activate() {
            QuizService.getQuestions().then(function (res) {
                $rootScope.questions = res.data;

                $scope.q = $rootScope.questions[0];
                //$log.log($scope.q);
            });
        }
        activate();

        $scope.go = function () {
            $location.path('/quiz/' + $routeParams.id);
            $rootScope.firstName = $scope.firstName;
            $rootScope.lastName = $scope.lastName;
            $routeParams.id = $rootScope.questions[$routeParams.id].pk;
            //$log.info($routeParams.id);
        };





}]);