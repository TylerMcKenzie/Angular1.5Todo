function UserSession($http, Auth, $rootScope) {
  this._$http = $http;
  this._auth = Auth;
  this._currentUser = false; 

  this.listen($rootScope);
}

UserSession.prototype.listen = function($rootScope) {
  var userSession = this

  $rootScope.$on('devise:login', function(e, user) {
    userSession._currentUser = user;
    console.log('login')
  })

  $rootScope.$on('devise:new-registration', function(e, user) {
    userSession._currentUser = user;
    console.log('signup')
  })

  $rootScope.$on('devise:logout', function(e, user) {
    userSession._currentUser = false;
    console.log('logout')
  })
}

UserSession.prototype.exists = function() {
  return this._auth.isAuthenticated()
}

UserSession.prototype.loginUser = function(user, promiseHandler, errHandler) {
  this._auth.login(user).then(promiseHandler, errHandler);
}

UserSession.prototype.registerUser = function(user, promiseHandler, errHandler) {
  this._auth.register(user).then(promiseHandler, errHandler)
}

UserSession.prototype.logoutUser = function(user, promiseHandler, errHandler) {
  this._auth.logout(user).then(promiseHandler, errHandler);
}

UserSession.prototype.getCurrentUser = function() {
  return this._currentUser
}

UserSession.prototype.reclaimSession = function() {
  var that = this;
  
  that._auth.currentUser().then(function(user) {
    that._currentUser = user
    console.log(that)
  })
}

app.service('UserSession', ['$http', 'Auth', '$rootScope', UserSession])
