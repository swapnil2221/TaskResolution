myApp.controller('homeCtrl', ['$scope', function ($scope) {

    var vm = this;
}]);
myApp.controller('subjectList', ['$scope', '$http', function ($scope, $http) {
    $scope.data = null;
     $http({
        method: 'GET',
        url: 'https://localhost:44346/api/subject/get'
     }).then(function successCallback(response) {
         $scope.data = response.data

    }, function errorCallback(response) {

    });
}]);

myApp.controller('studentList', ['$scope', '$http', function ($scope, $http) {
    $scope.data = null;
    $http({
        method: 'GET',
        url: 'https://localhost:44346/api/student/list'
    }).then(function successCallback(response) {
        $scope.data = response.data

    }, function errorCallback(response) {

    });
}]);

myApp.controller('registerSubject', ['$scope', '$http', function ($scope, $http) {
    $scope.data = null;
    $scope.msz = "Data saved sucessfully";
    $scope.isDisplay = false;  
    function clear() {
        $scope.sName = "";
        $scope.sCode = "";
    }
    $scope.save = function () {
        $http({
            method: 'POST',
            url: 'https://localhost:44346/api/subject/post',
            data: {
                Name: $scope.sName,
                Code: $scope.sCode

            }
        }).then(function successCallback(response) {
            clear();
            $scope.isDisplay = true;

        }, function errorCallback(response) {
            $scope.msz = response;
        });
    }
}]);

myApp.controller('registerStudent', ['$scope', '$http', function ($scope, $http) {
    $scope.subjectObj = [];
    console.log("hello");
    $scope.data = null;
    $scope.subjectDropdown = null;
    $scope.msz = "Data saved sucessfully";
    $scope.isDisplay = false;
    function clear() {
        $scope.rNo = '';
        $scope.fname = '';
        $scope.mname = '';
        $scope.lname='';
        $scope.dob = '';
        $scope.subjectObj = null;  
        $scope.isDisplay = true;
    }
    function loadDropDown() {
        
        $http({
            method: 'GET',
            url: 'https://localhost:44346/api/subject/get'
        }).then(function successCallback(response) {
            $scope.subjectDropdown = response.data

        }, function errorCallback(response) {

        });
    }
    loadDropDown();
    $scope.save = function () {
        console.log("hello");
        $http({
            method: 'POST',
            url: 'https://localhost:44346/api/student/post',
            data: {
                Number: $scope.rNo,
                FirstName: $scope.fname,
                MidName: $scope.mname,
                LastName: $scope.lname,
                BirthDate: $scope.dob,
                Subjects: $scope.subjectObj            
            }
        }).then(function successCallback(response) {
            clear();           

        }, function errorCallback(response) {
            $scope.msz = response;
        });
    }

    $scope.subjectChecked = function (item) {
        if (item.checked) {
            $scope.subjectObj.push(
                {
                    ID: item.ID,
                    Name: item.Name,
                    Code: item.Code
                });
        }
        console.log(item);
    }
}]);
