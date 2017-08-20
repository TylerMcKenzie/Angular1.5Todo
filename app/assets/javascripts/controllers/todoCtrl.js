app.controller('TodoCtrl', [ '$scope', 'todos', 'Todo', 'currentUser',
  function($scope, todos, Todo, currentUser) {
    var ctrl = this

    ctrl.todos = todos

    console.log(currentUser)
    if(currentUser) {
      ctrl.user = currentUser
    }
  }
])
