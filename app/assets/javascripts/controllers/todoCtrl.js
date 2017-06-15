app.controller('TodoCtrl', [ '$scope', 'todos', 'Todo',
  function($scope, todos, Todo) {
    var ctrl = this

    ctrl.todos = todos
  }
])
