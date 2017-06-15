function TodoFormCtrl(Todo) {
  var ctrl = this

  var index = ctrl.todos.length


  ctrl.clearTodoForm = function() {
    ctrl.todoForm.todo = {}
    ctrl.todoForm.$setPristine()
    ctrl.todoForm.$setUntouched()
  }

  ctrl.addTodo = function(todo) {
    todo.id = index++
    ctrl.todos.push(new Todo(todo))
    
    ctrl.clearTodoForm()
  }
}

app.component('todoForm', {
  bindings: {
    todos: '<'
  },
  controller: TodoFormCtrl,
  templateUrl: 'components/todoForm.html'
})
