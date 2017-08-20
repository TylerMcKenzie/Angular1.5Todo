var app = angular.module('InstanTodo', ['ngRoute', 'Devise', 'ngActionCable', 'templates'])

app.run(['$http', '$rootScope', 'UserSession', function($http, $rootScope, UserSession) {
  // Fix header issues with rails http
  $http.defaults.headers.common['Accept'] = 'application/json';
  $http.defaults.headers.common['Content-Type'] = 'application/json';

  $rootScope.$on('$locationChangeStart', function(event) {
  });

  if(!UserSession.exists()) {
    UserSession.reclaimSession()
  }

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

          }],
          currentUser: ['UserSession', function(UserSession) {

            if(UserSession.exists()) {
              return UserSession.getCurrentUser()
            } else {
              return false;
            }

          }]
        }
      })
      .when('/users/sign_up', {
        templateUrl: 'user/signup.html',
        controller: 'RegistrationCtrl',
        resolve: {
          
        }
      })
      .when('/users/sign_in', {
        templateUrl: 'user/signin.html',
        controller: 'LoginCtrl',
        resolve: {
         
        }
      })
      .when('/users/profile', {
        templateUrl: 'user/profile.html',
        controller: 'ProfileCtrl'
      });

  }
])
