'use strict';

/* Controllers */

var appControllers = angular.module('appControllers',[]);


appControllers.controller('MessageListCtrl',['$scope','Messages','$location','$routeParams',function($scope,Messages,$location,$routeParams){
	$scope.messages = Messages.all.query();
	$scope.selectMessage = function(message){
		$scope.selectedMessageId=message._id.$oid;
		$location.path('/message/'+message._id.$oid).search('dp', 'true');
	};
	$scope.hasSelectedMessage = function(){
		return $scope.selectedMessageId!==undefined || $scope.selectedMessageId!==null;
	};
	$scope.showDetailPanel = false;
	
	$scope.newMessage = function(){
		$location.path('/newMessage').search('dp', true);
	};
	
	$scope.unselectMessage = function(){
		$location.path('/index.html').search('dp', false);
	};
	$scope.$on('$routeChangeStart',function(angularEvent,next,current) {
		$scope.showDetailPanel = next.params.dp || false;
		$scope.selectedMessageId=next.pathParams.id;
	});
}]);

appControllers.controller('MessageViewCtrl',['$scope', '$routeParams','Messages',function($scope,$routeParams,Messages){
	$scope.message = Messages.byId.get({id:$routeParams.id});
}]);

appControllers.controller('SendNewMessageCtrl', ['$scope', 'Messages','$location',function($scope,Messages,$location) {
    $scope.sendMessage = function(message) {
		return Messages.sendMessage(message)
			.success(function(){
					console.log("success");
					$location.path('/index.html').search('dp', false);
				}
			).error(function(error){
					console.log("error: "+error);
				}
			);
    };
}]);