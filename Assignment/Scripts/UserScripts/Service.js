app.service("crudAJService", function ($http) {

    //get All Books
    this.getUsers = function () {
        return $http.get("Home/GetAllUsers");
    };

    // get Book by bookId
    this.getUser = function (userId) {
        var response = $http({
            method: "post",
            url: "Home/GetUserById",
            params: {
                id: JSON.stringify(userId)
            }
        });
        return response;
    }

    // Update Book 
    this.updateUser = function (user) {
        var response = $http({
            method: "post",
            url: "Home/UpdateUser",
            data: JSON.stringify(user),
            dataType: "json"
        });
        return response;
    }

    // Add Book
    this.AddUser = function (user) {
        var response = $http({
            method: "post",
            url: "Home/AddUser",
            data: JSON.stringify(user),
            dataType: "json"
        });
        return response;
    }

    //Delete Book
    this.DeleteUser = function (userId) {
        var response = $http({
            method: "post",
            url: "Home/DeleteUser",
            params: {
                userId: JSON.stringify(userId)
            }
        });
        return response;
    }
});