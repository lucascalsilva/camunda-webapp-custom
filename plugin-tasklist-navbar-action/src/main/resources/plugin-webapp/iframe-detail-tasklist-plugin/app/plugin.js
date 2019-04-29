define(['angular'], function(angular) {

  var Configuration = ['ViewsProvider', function(ViewsProvider) {

    ViewsProvider.registerDefaultView('tasklist.navbar.action', {
      id: 'iframe-detail-tasklist-plugin',
      label: 'iframe Detail',
      url: 'plugin://iframe-detail-tasklist-plugin/static/app/iframe.html',
      priority: 800,
      controller: [
        '$scope', '$http','$rootScope','$location',
            function($scope, $http, $rootScope, $location) {
                var url = $location.protocol() + '://'
                    + $location.host() + ':'
                    + $location.port()
                    + '/rest/group/count?id=linkaccess&member='+$rootScope.authentication.name;

                $http.get(url).then(function (result) {
                    $scope.groupCount = result.data.count;
                });
             }
         ]});
      }]

  var ngModule = angular.module('tasklist.plugin.iframe-detail-tasklist-plugin', []);

  ngModule.config(Configuration);

  return ngModule;
});