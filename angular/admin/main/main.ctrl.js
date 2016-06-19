'use strict';

export default function MainCtrl($scope, $log, user) {
  'ngInject';

  this.title = 'Tikal TEQ Admin';
  this.user = user;

  $log.debug('user', user);
}
