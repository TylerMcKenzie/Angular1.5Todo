function TodoFormCtrl(Todo, TodoService, ActionCableChannel) {
  var ctrl = this


  ctrl.clearTodoForm = function() {
    ctrl.todoForm.todo = {}
    ctrl.todoForm.$setPristine()
    ctrl.todoForm.$setUntouched()
  }

  ctrl.addTodo = function(todo) {
    TodoService.new(todo)

    ctrl.clearTodoForm()
  }

  var consumer = new ActionCableChannel("TodosChannel")
  consumer.subscribe(function(data) {
    if(data.status === "created") {
      ctrl.todos.push(new Todo(data.todo))
    }
  })
}

app.component('todoForm', {
  bindings: {
    todos: '<'
  },
  controller: TodoFormCtrl,
  templateUrl: 'components/todoForm.html'
})
