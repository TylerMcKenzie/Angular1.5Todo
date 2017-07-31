function TodoFormCtrl(Todo, TodoService) {
  var ctrl = this

  ctrl.clearTodoForm = function() {
    ctrl.todoForm.todo = {}
    ctrl.todoForm.$setPristine()
    ctrl.todoForm.$setUntouched()
  }

  ctrl.addTodo = function(todo) {
    var newTodo

    TodoService.new(todo)
        .then(function(res) {
          console.log(res.data)
          newTodo = new Todo(res.data)

          ctrl.todos.push(newTodo)
        },
        function(err) {
          console.log(err)
        })

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
