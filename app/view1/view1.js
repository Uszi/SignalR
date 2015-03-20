'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', 'Hub', 'signalRHubProxy', function($scope, $rootScope, Hub, signalRHubProxy) {
	var hub = new Hub('ChatHub', {
		listeners: {
			'addNewMessageToPage': function(data, obj){
				$rootScope.$apply(function () {
					$scope.color = obj;
				})
				
			}
		},
		rootPath: 'http://signalr-uszo.azurewebsites.net/signalr'
	});
}]);