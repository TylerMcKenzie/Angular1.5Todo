function TodosCtrl() {
  var ctrl = this

  ctrl.orderFilter = []

  ctrl.addTodosFilter = function(filter) {
    if(!ctrl.orderFilter.includes(filter)) {
      ctrl.orderFilter.push(filter)
    }
  }

  

  ctrl.clearCompletedTodos = function() {
      ctrl.todos = ctrl.todos.filter(function(todoItem) {
        if(!todoItem.completed) {
          return todoItem
        }
      })
    }

  ctrl.removeTodo = function(todo) {
    ctrl.todos.map(function(todoItem, i) {
      if(todo.id === todoItem.id) {
        ctrl.todos.splice(i, 1)
      }
    })
  }
}

app.component('todos', {
  bindings: {
    todos: '<',
  },
  controller: TodosCtrl,
  templateUrl: 'components/todos.html'
})
