'use strict';

/* Services */
var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Messages', ['$resource','$http',
  function($resource,$http){
    return {
		all:$resource('rest/messages', {}, {
		query: {method:'GET', isArray:true}
	  }),
	  byId:$resource('rest/messages/:id', {}, {
		query: {method:'GET', isArray:false}
	  }),
	  sendMessage:function(message) {
		  return $http.post('/rest/messages/send', message);
	  }
  };
  }]);