'use strict';

angular
  .module('editliveangularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.tinymce'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tinymce', {
        templateUrl: 'views/tinymcepage.html',
        controller: 'TinyMceCtrl'
      })
      .when('/editlive', {
        templateUrl: 'views/editlivepage.html',
        controller: 'EditLiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
