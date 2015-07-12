'use strict';

angular.module('jhkallanApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
