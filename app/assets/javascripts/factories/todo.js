app.factory('Todo', function($http, TodoService) {
  function Todo(data) {
    this.id = data.id
    this.title = data.title
    this.completed = data.completed || false
  }

  Todo.prototype.update = function(attribute, newValue) {
    if(this[attribute] !== undefined) {
      this[attribute] = newValue

      TodoService.update(this.id, this)
                 .then(function(res) {
                   console.log(res.data)
                 },
                 function(err) {
                   console.log(err)
                 })
    } else {
      throw new Error('Attribute does not exist.')
    }
  }

  Todo.prototype.getTitle = function() {
    return this.title
  }

  Todo.prototype.destroy = function() {
    TodoService.delete(this.id)
  }

  return Todo
})
