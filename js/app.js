var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $stateProvider
      .state('home', {
        templateUrl: 'js/home/homeTmpl.html',
        url: '/',
        controller: 'homeCtrl'
      })
      .state('teams', {
        templateUrl: 'js/teams/teamTmpl.html',
        url: '/teams/:team',
        controller: 'teamCtrl',
        resolve: {
          teamData: function(teamService, $stateParams){
            return teamService.getTeamData($stateParams.team);
          }
        }
      });

      $urlRouterProvider.otherwise('/');

});
