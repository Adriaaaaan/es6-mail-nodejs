'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'appServices',
  'appControllers',
  'appDirectives']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/message/:messagesId',{
		templateUrl:'partials/messages-view.html',
		controller: 'MessageViewCtrl'
	}).when('/',{
		templateUrl:'partials/messages-welcome.html'
	}).otherwise({
		redirectTo:'/'
	})
}]);

