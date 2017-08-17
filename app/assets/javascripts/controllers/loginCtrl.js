app.controller('LoginCtrl', ['$http', '$scope', '$location', 'Auth', function($http, $scope, $location, Auth) {
  $scope.signIn = function(form) {
    Auth.login(form).then(function(currentUser) {
      $location.path('/users/profile');
    })
  }
}])
