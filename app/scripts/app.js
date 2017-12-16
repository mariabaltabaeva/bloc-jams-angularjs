(function() {
     function config($stateProvider, $locationProvider) {
      $locationProvider
       .html5Model({
         enabled: true,
         requireBAse: false
       });
      $stateProvider
       .state('landing', {
         url: '/',
         templateUrl: '/templates/landing.html'
       })
       .state('album', {
          url: '/album',
          temlpateUrl: '/templates/album.html'
       })
       .state('collection', {
         url: '/',
         templateUrl: '/templates/collection.html'
       });
      }
  angular
     .module('blocJams', ['ui.router']);
     .config(config);
   })();
