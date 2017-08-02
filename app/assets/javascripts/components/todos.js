function TodosCtrl(Todo, ActionCableChannel) {
  var ctrl = this

  ctrl.orderFilter = []


  var consumer = new ActionCableChannel("TodosChannel")

  consumer.subscribe(function(data) {
    switch(data.status) {
      case "updated":
        for(var i = 0; i < ctrl.todos.length; i++) {
          if(data.todo.id === ctrl.todos[i].id) {
            ctrl.todos[i] = new Todo(data.todo)
          }
        }
      case "deleted":
        for(var i = 0; i < ctrl.todos.length; i++) {
          if(data.id === ctrl.todos[i].id) {
            ctrl.todos.splice(i, 1)
          }
        }
    }
  })

  ctrl.addTodosFilter = function(filter) {
    if(!ctrl.orderFilter.includes(filter)) {
      ctrl.orderFilter.push(filter)
    }
  }

  ctrl.clearCompletedTodos = function() {
      ctrl.todos = ctrl.todos.filter(function(todoItem) {
        if(!todoItem.completed) {
          return todoItem
        } else {
          todoItem.destroy()
        }
      })
    }


  ctrl.removeTodo = function(todo) {
    ctrl.todos.map(function(todoItem, i) {
      if(todo.id === todoItem.id) {
        ctrl.todos[i].destroy()
      }
    })
  }

}

app.component('todos', {
  bindings: {
    todos: '<',
  },
  controller: ['Todo', 'ActionCableChannel', TodosCtrl],
  templateUrl: 'components/todos.html'
})
