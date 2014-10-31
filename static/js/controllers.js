'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);


appControllers.controller('MessageListCtrl', ['$scope', 'Messages', '$location', '$routeParams', function ($scope, Messages, $location, $routeParams) {
       
        
        Messages.all().success(function(response){
           $scope.messages=response;
          
        });
        $scope.selectMessage = function (message) {
            $scope.selectedMessageId = message._id.$oid;
            $location.path('/message/' + message._id.$oid).search('dp', 'true');
        };
        $scope.hasSelectedMessage = function () {
            return $scope.selectedMessageId !== undefined || $scope.selectedMessageId !== null;
        };
        $scope.showDetailPanel = false;

        $scope.newMessage = function () {
            $location.path('/newMessage').search('dp', true);
        };

        $scope.unselectMessage = function () {
            $location.path('/index.html').search('dp', false);
        };
        $scope.$on('$routeChangeStart', function (angularEvent, next, current) {
            $scope.showDetailPanel = next.params.dp || false;
            $scope.selectedMessageId = next.pathParams.id;
        });
    }]);

appControllers.controller('MessageViewCtrl', ['$scope', '$routeParams', 'Messages', function ($scope, $routeParams, Messages) {
        Messages.byId($routeParams.id).success(function(message){
            $scope.message = message;
        });
    }]);

appControllers.controller('SendNewMessageCtrl', ['$scope', 'Messages','$route', '$location','$window', function ($scope, Messages,$route, $location,$window) {
        $scope.sendMessage = function (message) {
            message.received = Date.now();
            message.avatar = "img/person3.jpg";
            Messages.sendMessage(message)
                    .success(function () {
                        $location.path('/').search('dp', false).search();
                        //MessageListCtrl isn't managed by router so it wont reload the data
                        //using a different routing library would be better (for nested routes)
                        $window.location.reload(); 
                    }
                ).error(function (error) {
            }
            );
        };
    }]);