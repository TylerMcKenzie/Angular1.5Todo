class CollaborativeTodoList < ApplicationRecord
  has_many :collaborations, :class_name => "Collaboration", :foreign_key => "collaborative_todo_list_id"
  has_many :collaborators, :through => :collaborations, :source => :user
  has_many :collaborative_todos
end
