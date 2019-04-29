var angular = require('camunda-commons-ui/vendor/angular');
var createCamApiMock = require('./create-cam-api-mock');
var ViewsProvider = require('./views-provider-mock');
var $routeProvider = require('./route-provider-mock');
var localConfMock = require('./local-conf-mock');

var ngModule = angular.module('common-tests-module', []);

ngModule.value('camAPI', createCamApiMock());
ngModule.provider('Views', function() {
  return ViewsProvider;
});

ngModule.provider('$route', function() {
  return $routeProvider;
});

ngModule.factory('localConf', function() {
  return localConfMock;
});

module.exports = ngModule;
