'use strict';

angular.module('jhkallanApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


