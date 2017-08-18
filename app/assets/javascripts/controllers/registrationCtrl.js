app.controller('RegistrationCtrl', ['$http', '$scope', '$location', 'UserSession', function($http, $scope, $location, UserSession) {
  $scope.signUp = function(form) {
    UserSession.registerUser(form, function(user) {
      $location.path('/')
    })
  }
}]);
