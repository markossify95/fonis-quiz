angular.module('app.route',[])

.config(['$routeProvider',function($routeProvider){
    
    
   $routeProvider

		.when('/home',{
			templateUrl:'D:\\PyCharm\\quiz\\kviz\\static\\kviz\\views\\home.html',
			controller:'HomeController'
		})

		.when('/quiz/:id',{
			templateUrl:'D:\\PyCharm\\quiz\\kviz\\static\\kviz\\views\\quiz.html',
			controller:'QuizController'
		})

		.otherwise({ redirectTo: '/home' });
}]);