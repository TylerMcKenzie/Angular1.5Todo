class CreateCollaborativeTodoLists < ActiveRecord::Migration[5.0]
  def change
    create_table :collaborative_todo_lists do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
