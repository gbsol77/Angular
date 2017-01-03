app.controller("mvcCRUDCtrl", function ($scope, crudAJService) {
    $scope.divUser = false;
    GetAllUsers();
    //To Get all user records  
    function GetAllUsers() {
        debugger;
        var getUserData = crudAJService.getUsers();
        getUserData.then(function (user) {
            $scope.users = user.data;
        }, function () {
            alert('Error in getting user records');
        });
    }

    $scope.editUser = function (user) {
        var getUserData = crudAJService.getUser(user.Id);
        getUserData.then(function (_user) {
            $scope.user = _user.data;
            $scope.userId = user.Id;
            $scope.userName = user.Name;
            $scope.userFName = user.FName;
            $scope.userCity = user.City;
            $scope.userCountry = user.Country;
            $scope.Action = "Update";
            $scope.divUser = true;
        }, function () {
            alert('Error in getting user records');
        });
    }

    $scope.AddUpdateUser = function () {
        var User = {
            Name: $scope.userName,
            FName: $scope.userFName,
            City: $scope.userCity,
            Country: $scope.userCountry
        };
        var getUserAction = $scope.Action;

        if (getUserAction == "Update") {
            User.Id = $scope.userId;
            var getUserData = crudAJService.updateUser(User);
            getUserData.then(function (msg) {
                GetAllUsers();
                alert(msg.data);
                $scope.divUser = false;
            }, function () {
                alert('Error in updating user record');
            });
        } else {
            var getUserData = crudAJService.AddUser(User);
            getUserData.then(function (msg) {
                GetAllUsers();
                alert(msg.data);
                $scope.divUser = false;
            }, function () {
                alert('Error in adding user record');
            });
        }
    }

    $scope.AddUserDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divUser = true;
    }

    $scope.deleteUser = function (user) {
        var getUserData = crudAJService.DeleteUser(user.Id);
        getUserData.then(function (msg) {
            alert(msg.data);
            GetAllUsers();
        }, function () {
            alert('Error in deleting User record');
        });
    }

    function ClearFields() {
        $scope.userId = "";
        $scope.userName = "";
        $scope.userFName = "";
        $scope.userCity = "";
        $scope.userCountry = "";
    }
    $scope.Cancel = function () {
        $scope.divUser = false;
    };
});