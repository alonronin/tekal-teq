'use strict';
import uiRouter from 'angular-ui-router';

import HomeRoute from './home.route';
import HomeCtrl from './home.ctrl';

var angular = require('angular');

export default angular.module('teq.home', [
  uiRouter
])

.config(HomeRoute)

.controller('HomeCtrl', HomeCtrl)

.name

;
