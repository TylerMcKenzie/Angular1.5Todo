function TodoItemCtrl($element) {
  var ctrl = this

  ctrl.editing = false

  ctrl.setStatus = function() {
    ctrl.todo.update('completed', !ctrl.todo.completed)
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
  controller: TodoItemCtrl,
  templateUrl: 'components/todoItem.html'
})
