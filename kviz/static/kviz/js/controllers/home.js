angular.module('app.home', [])

.controller('HomeController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', 'toastr', 'QuizService',
                             function ($scope, $routeParams, $log, $location, $rootScope, toastr, QuizService) {



        $routeParams.id = 0;
        $rootScope.title = 'My app';


        $rootScope.correctAnswers = 0;
        $rootScope.counterOfQuestions = 0;


        $scope.firstName = '';
        $scope.lastName = '';
        $scope.email = '';
        $rootScope.questions = {};
        $scope.q = {};

        function start() {
            QuizService.getQuestions().then(function (res) {
                $rootScope.questions = res.data;

                $scope.q = $rootScope.questions[0];
                //$log.log($scope.q);
                console.log("USPESNO start()!\n");
            });
        }
        start();

        $scope.go = function () {
            
            console.log("POZVANA go()\n");
            $location.path('/quiz/' + $routeParams.id);
            $rootScope.firstName = $scope.firstName;
            $rootScope.lastName = $scope.lastName;
            $rootScope.email = $scope.email;


        };





}]);