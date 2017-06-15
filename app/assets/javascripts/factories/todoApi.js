function TodoAPI($http) {
  function getAll() {
    return $http.get('/todo')
  }

  function updateTodo(todoId) {
    return $http.put('/todo/'+todoId)
  }

  function deleteTodo(todoId) {
    return $http.delete('/todo/'+todoId)
  }

  return {
    all: getAll,
    update: updateTodo,
    delete: deleteTodo
  }
}

app.factory('TodoService', TodoAPI)
