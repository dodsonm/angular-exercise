'use strict';

/* configurations */

var app = angular.module('app', ['app.controllers',
                                     'app.services',
                                     'app.directives',
                                     'app.filters']);

// route configurations
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/view1.html',
            controller: ''
        }).
        otherwise({
            redirectTo: '/'
        });
}]);