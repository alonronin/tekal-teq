'use strict';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import MainRoute from './main.route';
import MainCtrl from './main.ctrl';

var angular = require('angular');

export default angular.module('teq.admin.main', [
  uiRouter,
  ngResource
])

.config(MainRoute)

.controller('MainCtrl', MainCtrl)

.service('User', function ($resource) {
  var resource = $resource('/api/user');

  this.get = function () {
    return resource.get().$promise;
  }
})

  .name

;
