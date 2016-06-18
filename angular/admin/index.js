require('../theme/index.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import main from './main';
import home from './home';

angular.module('teq.admin', [
  uiRouter,
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
