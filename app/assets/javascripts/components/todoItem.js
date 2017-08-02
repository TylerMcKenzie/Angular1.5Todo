function TodoItemCtrl(TodoService) {
  var ctrl = this

  ctrl.editing = false

  ctrl.setStatus = function() {
    ctrl.todo.update('completed', !ctrl.todo.completed)

    TodoService.update(ctrl.todo.id, { completed: ctrl.todo.getCompleted() })
  }

  ctrl.openTitleEditor = function() {
    ctrl.editing = true
  }

  ctrl.closeTitleEditor = function() {
    ctrl.editing = false
  }

  ctrl.editTitle = function() {
    ctrl.openTitleEditor()

    ctrl.edit = ctrl.todo.getTitle()
  }

  ctrl.saveEdit = function() {
    ctrl.todo.update('title', ctrl.edit)

    TodoService.update(ctrl.todo.id, { title: ctrl.todo.getTitle() })

    ctrl.closeTitleEditor()
  }

  ctrl.cancelEdit = function() {
    ctrl.closeTitleEditor()
  }
}

app.component('todoItem', {
  bindings: {
    todo: '<',
    onRemoveTodo: '<'
  },
  controller: ['TodoService', TodoItemCtrl],
  templateUrl: 'components/todoItem.html'
})
