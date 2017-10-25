var app = angular.module('myApp', []);
app.controller('controll', function($scope) {

    $scope.toggle = true;
    $scope.list = {};
    var dataInsert = [];
    var count = 0;
    $scope.selected = null;
    $scope.opencreat = function() {
        if ($scope.toggle === true) {
            $scope.toggle = false;
        } else {
            $scope.toggle = true;
        }
        $scope.mode = null;
        $scope.IsVisible = false
    }

    $scope.datasubmit = function(user) {

        $scope.user.dateOut = new Date();
        $scope.user.id = count++;
        if (user.edit == true) {
            user.edit = true;
        } else {
            user.edit = false;
        }
        dataInsert.push(user);
        $scope.user = null;
        $scope.toggle = true;
        $scope.list = dataInsert;

    }
    $scope.goto_detail = function(user, editMode) {
        $scope.toggle = false;
        $scope.mode = editMode;
        $scope.user = user;
    }
    $scope.EditData = function(user) {
        $scope.lastUpadte = {};
        var dateOut1 = new Date();
        angular.forEach(dataInsert, function(value, key) {
            if (value.id == user.id) {
                value.title = user.title;
                value.comment = user.comment;
                value.dateOut = dateOut1
                value.edit = user.edit;
                lastUpadte = value;
            }
            // console.lo
        });

        $scope.lastUpadte = lastUpadte;
        $scope.list = dataInsert;
        $scope.user = null;
        $scope.toggle = true;
    }

    $scope.IsVisible = false;
    $scope.ShowHide = function() {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
        $scope.toggle = true;
    }

    $scope.reverse = true;
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };


});