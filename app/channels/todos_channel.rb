class TodosChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'todos'
  end
end
