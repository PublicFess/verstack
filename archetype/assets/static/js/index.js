(function(angular) {

  var module = angular.module('app', [
    'ui.router'
    ]);

  module.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]);

  module.config(['$urlRouterProvider', '$locationProvider', '$httpProvider',
    function($urlRouterProvider, $locationProvider, $httpProvider) {
      $urlRouterProvider.otherwise('/');
      $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }
  ]);

  module.config([ '$stateProvider',
    function($stateProvider) {

      $stateProvider.state('main', {
        url: '/main.html',
        templateUrl: '../html/main.html'
      });

    }
  ]);

})(angular);
