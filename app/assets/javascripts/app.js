var app = angular.module('InstanTodo', ['ngRoute', 'Devise', 'ngActionCable', 'templates'])

app.run(['$http', '$rootScope', 'Auth', function($http, $rootScope, Auth) {
  // Fix header issues with rails http
  $http.defaults.headers.common['Accept'] = 'application/json';
  $http.defaults.headers.common['Content-Type'] = 'application/json';

  $rootScope.$on('$locationChangeStart', function(event) {

  //   Auth.currentUser().then(function() {
  //     alert("LOGGED IN")
  //   }, function(err) {
  //     console.log(err)
  //   });
  });

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
          todos: [ 'TodoService','Todo', function(TodoService, Todo) {
            var todos = []
            TodoService.all()
                       .then(function(res) {
                         res.data.map(function(todo) {
                           todos.push(new Todo(todo))
                         })
                       }, function(err) {
                          console.log(err)
                       })

            return todos

          }]
        },
        resolveAs: 'todos'
      })
      .when('/users/sign_up', {
        templateUrl: 'user/signup.html',
        controller: 'RegistrationCtrl'
      })
      .when('/users/sign_in', {
        templateUrl: 'user/signin.html',
        controller: 'LoginCtrl'
      })
      .when('/users/profile', {
        templateUrl: 'user/profile.html',
        controller: 'ProfileCtrl'
      });

  }
])
