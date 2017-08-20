class Collaboration < ApplicationRecord
  belongs_to :user
  belongs_to :collaborative_todo_list
end
