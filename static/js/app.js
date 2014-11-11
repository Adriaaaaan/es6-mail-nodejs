'use strict';

/* App Module */

var app = angular.module('app', [
  'ui.router',
  'appServices',
  'appControllers',
  'appDirectives']);


app.config(['$stateProvider',function($stateProvider){
	$stateProvider
		.state('messages', {
		  url: "/messages",
		  abstract:true,
		  templateUrl: "partials/messages.html",
		  controller:'MessageListCtrl'
		}).state('messages.detail',{
			parent:'messages',
			url:'/view/:id?dp',
			templateUrl:'partials/messages-view.html',
			controller: 'MessageViewCtrl'
		}).state('messages.index',{
			parent:'messages',
			url:'',
			templateUrl:'partials/messages-welcome.html'
		}).state('messages.new',{
			parent:'messages',
			url:'/newMessage?dp',
			templateUrl:'partials/messages-new.html',
			controller: 'SendNewMessageCtrl'
		});
}]);

app.run(['$state', function ($state) {
   $state.transitionTo('messages.index');
}])

