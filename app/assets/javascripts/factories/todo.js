app.factory('Todo', function($http, TodoService) {
  function Todo(data) {
    this.id = data.id
    this.title = data.title
    this.completed = data.completed || false
  }

  Todo.prototype.update = function(attribute, newValue) {
    if(this[attribute] !== undefined && attribute !== "id") {
      this[attribute] = newValue
    }
  }

  Todo.prototype.getTitle = function() {
    return this.title
  }

  Todo.prototype.getCompleted = function() {
    return this.completed
  }

  Todo.prototype.destroy = function() {
    TodoService.delete(this.id)
  }

  return Todo
})
