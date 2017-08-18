class CollaborativeTodoList < ApplicationRecord
  has_many :collaborations, :class_name => "Collaboration", :foreign_key => "user_id"
  has_many :collaborators, :through => :collaborations, :source => "user_id"
  has_many :collaborative_todos
end
