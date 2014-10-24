'use strict';

/* Services */
var appServices = angular.module('appServices',[]);

appServices.factory('Gmail',['$filter',
	function($filter){
		return {
			getMessageIds:function(userId, query,callback) {
				return new RSVP.Promise(function(resolve, reject){
					var messages = [];
					return gapi.client.gmail.users.messages.list({
					  'userId': userId,
					  'q': query
					}).execute(function(response){
						var emailPromises = [];
						var emails = [];
						angular.forEach(response.messages,function(message){
							emailPromises.push(new RSVP.Promise(function(resolve, reject){
								gapi.client.gmail.users.messages.get({'userId': userId,id:message.id}).execute(function(email){
									var subject = $filter('filter')(email.payload.headers, {name: "Subject"}, true);
									var from = $filter('filter')(email.payload.headers, {name: "From"}, true);
									subject = subject[0] || {value:''};
									from = from[0] || {value:''};
									var body="";
									try {
										body = atob(email.payload.body.data) || "Tm8gQ29udGVudA==";
									} catch (error){
										
									}
									resolve({
										subject:subject.value,
										from:from.value,
										snippet:email.snippet,
										body:body
									})
								});
							}).then(function(email){
								emails.push(email);
							}));
						});
						RSVP.all(emailPromises).then(
							function(success){
								debugger
								resolve(emails);
							},
							function(error){
								reject(error);
							}
						);
					});
				});
			}
		};
	}]);