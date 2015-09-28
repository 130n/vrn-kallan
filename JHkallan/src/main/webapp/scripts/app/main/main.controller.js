'use strict';

angular.module('jhkallanApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.carousel = [
            {
                title:'ett',
                ingress:'blabla blalba blabla blabla',
                img: 'assets/images/carousel.svg',
                alt:'ett'
            },
            {
                title:'två',
                ingress:'oaskdok oaksdoaksdok' +
                'lalalalalalal' +
                ' ok oaksdok okdas',
                img: 'assets/images/hipster.png',
                alt:'alternativ'
            }
        ];
    });
