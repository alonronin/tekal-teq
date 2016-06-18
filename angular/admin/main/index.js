'use strict';
import uiRouter from 'angular-ui-router';

import MainRoute from './main.route';
import MainCtrl from './main.ctrl';

var angular = require('angular');

export default angular.module('teq.admin.main', [
  uiRouter
])

.config(MainRoute)

.controller('MainCtrl', MainCtrl)

.name

;
