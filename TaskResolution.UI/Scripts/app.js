var myApp = angular.module('agularApp', ['ngRoute']);



myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            redirectTo: function () { return '/home'}
        })
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'homeCtrl'
        })

        .when('/subjectlist', {
            templateUrl: '/views/Subject/SubjectList.html',
            controller: 'subjectList'
        })
        .when('/registersubject', {
            templateUrl: '/views/Subject/RegisterSubject.html',
            controller: 'registerSubject'
        })
        .when('/registerstudent', {
            templateUrl: '/views/Student/RegisterStudent.html',
            controller: 'registerStudent'
        })
        .when('/studentlist', {
            templateUrl: '/views/Student/StudentList.html',
            controller: 'studentList'
        })
        .otherwise({
            redirectTo: '/home',
            controller: 'homeCtrl'
        });
    $locationProvider.html5Mode(false).hashPrefix('!');
}]);




