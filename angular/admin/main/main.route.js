'use strict';

export default function MainRoute ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      controller: 'MainCtrl as main',
      template: require('./main.html'),
      resolve: {
        user: (User) => {
          return User.get();
        }
      }
    })

}

