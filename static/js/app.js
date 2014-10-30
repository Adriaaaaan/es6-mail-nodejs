'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'appServices',
  'appControllers',
  'appDirectives']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/message/:id',{
		templateUrl:'partials/messages-view.html',
		controller: 'MessageViewCtrl'
	}).when('/newMessage',{
		templateUrl:'partials/messages-new.html',
		controller: 'SendNewMessageCtrl'
	}).when('/',{
		templateUrl:'partials/messages-welcome.html'
	}).otherwise({
		redirectTo:'/'
	})
}]);

