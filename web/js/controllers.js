'use strict';

/* Controllers */

var appControllers = angular.module('appControllers',[]);

appControllers.controller('LoginCtrl',['$scope','$location','$rootScope',function($scope,$location,$rootScope){
	$scope.login = function() {
		var config = {
			'client_id': '166936375869-lgfc4su9d0bnm44oj1g90abc8iap8fjo.apps.googleusercontent.com',
			'scope': 'https://www.googleapis.com/auth/gmail.readonly',
			immediate:true
		};
		gapi.auth.authorize(config, function(authResult){
			if(authResult && !authResult.error) {
				gapi.client.load('gmail', 'v1').then(function(){
					$rootScope.loggedIn = true;
					$location.path( "/messages" );
				},function(){
					$location.path( "/" );
				});
			} else {
				$location.path( "/" );
			}
		});
	};
}]);

appControllers.controller('MessageListCtrl',['$scope','$location','Gmail',function($scope,$location,Gmail){
	if(gapi.client===undefined || gapi.client.gmail===undefined) {
		$location.path( "/" );
	}
	$scope.messages = [];
	$scope.getMessages = function(){
		return Gmail.getMessageIds("elhobito@gmail.com","").then(function(messages){
			$scope.messages = messages;
		});
	};
}]);
appControllers.controller('MessageBodyCtrl',['$scope','Gmail',function($scope,Gmail){
		
}]);