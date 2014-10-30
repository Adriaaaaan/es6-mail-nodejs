'use strict';

/* Controllers */

var appControllers = angular.module('appControllers',[]);


appControllers.controller('MessageListCtrl',['$scope','Messages','$location',function($scope,Messages){
	$scope.messages = Messages.all.query();
	$scope.selectMessage = function(message){
		$scope.selectedMessage=message;
	};
	$scope.hasSelectedMessage = function(){
		return $scope.selectedMessage!==undefined || $scope.selectedMessage!=null
	};
	$scope.unselectMessage = function(){
		$scope.selectedMessage=null;
	}
}]);

appControllers.controller('MessageViewCtrl',['$scope', '$routeParams','Messages',function($scope,$routeParams,Messages){
	$scope.message = Messages.byId.get({id:$routeParams.id});
}]);