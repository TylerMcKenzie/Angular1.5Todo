var app = angular.module('InstanTodo', ['ngRoute', 'ngActionCable', 'templates'])

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
          todos: function(TodoService, Todo) {
            var todos = []
            TodoService.all()
                       .then(function(res) {
                         res.data.map(function(todo) {
                           todos.push(new Todo(todo))
                         })
                       }, function(res) {
                          console.log(res)
                       })

            return todos

          }
        },
        resolveAs: 'todos'
      });

  }
])
