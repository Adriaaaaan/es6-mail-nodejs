'use strict';

/* Directives */
var appDirectives = angular.module('appDirectives',[]);

appDirectives.directive('messagesListItem',function(){
	return {
		restrict: 'E',
		templateUrl:'partials/messages-list-item.html',
		scope: {
			message: '=message'
		}
	};
});