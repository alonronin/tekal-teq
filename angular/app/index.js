require('../theme/index.less');

import angular from 'angular';
import main from './main';
import home from './home';

angular.module('tikal-teq', [
  main,
  home
])

.config(function($urlRouterProvider, $locationProvider){
  'ngInject';

  $urlRouterProvider.rule(function ($i, $location) {
    var path = $location.path();
    var normalized = path.toLowerCase();
    if (path != normalized) return normalized;
  });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(false);
})
;
