'use strict';

/* Services */
var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Messages', ['$resource','$http',
  function($resource,$http){
    return {
	  all:function() {
		return $http.get('/rest/messages');
	  },
	  byId:function(id) {
		  return $http.get('/rest/messages/'+id);
	  },
	  sendMessage:function(message) {
		  return $http.post('/rest/messages', message);
	  }
  };
  }]);