angular.module('app.route', [])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        $routeProvider

            .when('/home', {
                templateUrl: '/static/kviz/views/home.html',
                controller: 'HomeController'
            })

            .when('/quiz/:id', {
                templateUrl: '/static/kviz/views/quiz.html',
                controller: 'QuizController'
            })
            .when('/final', {
                templateUrl: '/static/kviz/views/final.html',
                controller: 'FinalController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);