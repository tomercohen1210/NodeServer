(function () {
    var app = angular.module("App",["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl:"Html/base.html",
                controller:"baseCtrl"
            })

            .otherwise({redirectTo:"/"})
    });
}());