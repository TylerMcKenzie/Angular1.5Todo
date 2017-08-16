class TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
  end

  def new
    todo = Todo.new(todo_params)

    if todo.save
      head :ok
      render json: @todo
    else
      render json: { error: "Failed to create todo." }
    end
  end

  def update
    @todo = Todo.find(params[:id])

    @todo.assign_attributes(todo_params)

    if @todo.save
      head :ok
      render json: { msg: "Todo update successful." }
    else
      render json: { msg: "Error updating Todo." }
    end
  end

  def delete
    @todo = Todo.find(params[:id])

    if @todo.destroy
      head :ok
      render json: { msg: "Todo successfully deleted." }
    else
      render json: {error: "Something broke :/"}
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
