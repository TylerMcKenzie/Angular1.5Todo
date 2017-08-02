class Todo < ApplicationRecord
  after_create :broadcast_create
  after_update_commit :broadcast_update
  after_destroy :broadcast_delete

  def broadcast_create
    ActionCable.server.broadcast 'todos', { status: 'created', todo: self }
  end

  def broadcast_update
    ActionCable.server.broadcast 'todos', { status: 'updated', todo: self }
  end

  def broadcast_delete
    ActionCable.server.broadcast 'todos', { status: 'deleted', id: id }
  end

  validates_presence_of :title
end
