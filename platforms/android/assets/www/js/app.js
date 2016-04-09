angular.module('ionicApp', ['ionic','ngAnimate'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  })

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('BedroomSize', {
      url: '/Bedroom-Size',
      templateUrl: 'templates/BedroomSize.html',
      controller: 'BedroomSizeCtrl'
  })
  .state('AddDoors', {
      url: '/Add-Doors',
      templateUrl: 'templates/AddDoors.html',
      controller: 'AddDoorsCtrl'
  })
  .state('AddWindows', {
      url: '/Add-Windows',
      templateUrl: 'templates/addwindows.html',
      controller: 'AddWindowsCtrl'
  })
  .state('AddFurniture', {
      url: '/Add-Furniture',
      templateUrl: 'templates/AddFurniture.html',
      controller: 'AddFurnitureCtrl'
  })
    .state('Layout', {
      url: '/Layout',
      templateUrl: 'templates/Layout.html',
      controller: 'LayoutCtrl'
  })
  $urlRouterProvider.otherwise('/Bedroom-Size');
});
