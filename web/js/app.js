'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'appServices',
  'appControllers']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'partials/login-screen.html',
		controller: 'LoginCtrl'
	}).when('/messages',{
		templateUrl:'partials/messages-list.html',
		controller: 'MessageListCtrl'
	}).when('/messages/:messagesId',{
		templateUrl:'partials/messages-view.html',
		controller: 'MessageBodyCtrl'
	}).otherwise({
		redirectTo:'/'
	})
}]).run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.loggedIn === null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/login-screen.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/" );
        }
      }
    });
 });

