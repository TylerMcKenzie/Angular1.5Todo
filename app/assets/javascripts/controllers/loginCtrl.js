app.controller('LoginCtrl', ['$http', '$scope', '$location', 'UserSession', function($http, $scope, $location, UserSession) {
  $scope.signIn = function(form) {
    UserSession.loginUser(form, function(user) {
      $location.path('/')
    })
  }
}])
