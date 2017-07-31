function TodoService($http) {
  function getAll() {
    return $http.get('/todos')
  }

  function newTodo(todo) {
    return $http.post('/todos', todo)
  }

  function updateTodo(todoId, todo) {
    return $http.put('/todos/'+todoId, todo)
  }

  function deleteTodo(todoId) {
    return $http.delete('/todos/'+todoId)
  }

  return {
    all: getAll,
    new: newTodo,
    update: updateTodo,
    delete: deleteTodo
  }
}

app.factory('TodoService', TodoService)
