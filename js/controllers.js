'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('MessageListCtrl', function ($scope, Messages, $state) {  
        Messages.all().success(function(response){
           $scope.messages=response;   
        });

        $scope.selectMessage = function (message) {
			$state.go('messages.detail',{id:message._id,dp:true});
            $scope.selectedMessageId = message._id;
			$scope.showDetailPanel = true;
        };
		
		$scope.deleteMessage = function (message) {
			Messages.deleteMessage(message._id).success(function(){
				var index = $scope.messages.indexOf(message)
				$scope.messages.splice(index, 1);
			});
        };

        $scope.hasSelectedMessage = function () {
            return $scope.selectedMessageId !== undefined || $scope.selectedMessageId !== null;
        };

        $scope.selectedMessageId=$state.params.id;
		$scope.showDetailPanel = $state.params.dp;
		
        $scope.newMessage = function () {
            $state.go('messages.new');
        };

        $scope.unselectMessage = function () {
            $state.go('messages.index',{dp:false});
			$scope.showDetailPanel = false;
        };
    });

	appControllers.controller('MessageViewCtrl', function ($scope, $stateParams, Messages) {
        Messages.byId($stateParams.id).success(function(message){
            $scope.message = message;
			$scope.message.selected=true;
        });
    });

appControllers.controller('SendNewMessageCtrl', function ($scope, Messages,$state) {
        $scope.sendMessage = function (message) {
            message.received = Date.now();
            message.avatar = "img/person3.jpg";
            Messages.sendMessage(message)
				.success(function (message) {
				  debugger
					$state.go('messages.detail', {id: message._id, dp: true}, {
						reload: true,
						inherit: false,
						notify: true
					});
				}
            );
        };
    });