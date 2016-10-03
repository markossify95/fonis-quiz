angular.module('app.quiz', [])

    .controller('QuizController', ['$scope', '$routeParams', '$log', '$location', '$rootScope', 'toastr', 'QuizService',
        function ($scope, $routeParams, $log, $location, $rootScope, toastr, QuizService) {


            $rootScope.title = 'Quiz!';
            $scope.user = 'nepoznati';

            $scope.activate = function () {
                if ($rootScope.counterOfQuestions === 4) {
                    var user = {
                        name: $rootScope.firstName,
                        surname: $rootScope.lastName,
                        score: $rootScope.correctAnswers,
                        email: $rootScope.email
                    };
                    QuizService.sendUser(user).then(function (res, err) {
                        if (res) {
                            $log.log(res);
                        } else {
                            $log.log(err);
                        }
                        $location.path('/final');
                    });
                }
                $scope.user = $rootScope.firstName + ' ' + $rootScope.lastName;
            };
            $scope.activate();

            $scope.noQuestion = parseInt($routeParams.id) + 1;


            $scope.question = $rootScope.questions[parseInt($routeParams.id)];
            $log.log($rootScope.questions[parseInt($routeParams.id)]);
            $scope.noQuestion = parseInt($routeParams.id) + 1;
            $scope.q1 = $scope.question.fields;
            $scope.q2 = $scope.question.fields;
            $scope.q3 = $scope.question.fields;
            $scope.q4 = $scope.question.fields;


            $scope.submit = function () {

                if (myForm.answer.value === 'true') {
                    toastr.success('Odgovor na ' + $scope.noQuestion + '. pitanje je tacan!');
                    $routeParams.id++;
                    $rootScope.correctAnswers++;
                    $location.path('/quiz/' + $routeParams.id);

                } else {
                    toastr.error('Odgovor na ' + $scope.noQuestion + '. pitanje je netacan!');
                    $routeParams.id++;
                    $location.path('/quiz/' + $routeParams.id);

                }
                $rootScope.counterOfQuestions++;
                $log.info($rootScope.correctAnswers + '/' + $rootScope.counterOfQuestions);

            };


        }]);