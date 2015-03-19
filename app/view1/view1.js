'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Hub', 'signalRHubProxy', function($scope, Hub, signalRHubProxy) {
	var clientPushHubProxy = signalRHubProxy(signalRHubProxy.defaultServer, 'clientPushHub', { logging: true });
    var serverTimeHubProxy = signalRHubProxy(signalRHubProxy.defaultServer, 'serverTimeHub');
    console.log(clientPushHubProxy);
    clientPushHubProxy.on('serverTime', function (data) {
       	console.log("SignalR time", data);
    });
    $scope.get = function(){
    	console.log("get");
	    serverTimeHubProxy.invoke('getServerTime', function (data) {
	           console.log(data);
	        });
	};
}]);