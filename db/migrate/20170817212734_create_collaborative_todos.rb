class CreateCollaborativeTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :collaborative_todos do |t|
      t.string :title
      t.boolean :completed
      t.integer :user_id
      t.integer :collaborative_todo_list_id

      t.timestamps
    end
  end
end
