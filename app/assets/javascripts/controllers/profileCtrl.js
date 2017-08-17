app.controller('ProfileCtrl', ['$scope', 'Auth', '$location', function($scope, Auth, $location) {
  if(Auth.isAuthenticated()) {
    Auth.currentUser().then(function(user) {
      $scope.user = user;
    })
  } else {
    $location.path('/')
  }
}])
