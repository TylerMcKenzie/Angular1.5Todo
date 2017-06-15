var app = angular.module('InstanTodo', ['ngRoute', 'templates'])

app.run(['$http', function($http) {
  // Fix header issues with rails http
  $http.defaults.headers.common['Accept'] = 'application/json';
  $http.defaults.headers.common['Content-Type'] = 'application/json';
}]);

app.config([
  '$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'index/index.html',
        controller: 'TodoCtrl',
        controllerAs: '$ctrl',
        resolve: {
          todos: function(Todo) {
            return [
              new Todo({ id: 0, title: 'task1', completed: false }),
              new Todo({ id: 1, title: 'task2', completed: false })
            ]
          }
        },
        resolveAs: 'todos'
      })
      .otherwise({
        redirectTo: '/'
      });

  }
])
