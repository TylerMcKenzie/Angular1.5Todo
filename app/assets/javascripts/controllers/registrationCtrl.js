app.controller('RegistrationCtrl', ['$http', '$scope', '$location', 'Auth', function($http, $scope, $location, Auth) {
  $scope.signUp = function(form) {
    Auth.register(form).then(function(registeredUser) {
      $location.path('/users/profile');
    })
  }
}]);
