import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('tikal-teq', [
    uiRouter
])

.controller('MyCtrl', function($scope){
    this.title = 'working!';
})

;