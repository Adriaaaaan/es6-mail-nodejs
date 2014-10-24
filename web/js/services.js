'use strict';

/* Services */
var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Messages', ['$resource',
  function($resource){
    return {
		all:$resource('rest/messages', {}, {
		query: {method:'GET', isArray:true}
	  }),
	  byId:$resource('rest/messages/:id', {}, {
		query: {method:'GET', isArray:false}
	  })
  }
  }]);