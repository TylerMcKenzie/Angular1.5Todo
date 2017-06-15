app.factory('Todo', function($http) {
  function Todo(data) {
    this.id = data.id
    this.title = data.title
    this.completed = data.completed || false
  }

  Todo.prototype.update = function(attribute, newValue) {
    if(this[attribute] !== undefined) {
      this[attribute] = newValue

    } else {
      throw new Error('Attribute does not exist.')
    }
  }

  Todo.prototype.getTitle = function() {
    return this.title
  }

  return Todo
})
