'use strict';

export default function HomeRoute ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main.home', {
      url: '/',
      controller: 'HomeCtrl as home',
      template: require('./home.html')
    })
}

