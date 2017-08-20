class CreateCollaborations < ActiveRecord::Migration[5.0]
  def change
    create_table :collaborations do |t|
      t.integer :user_id
      t.integer :collaborative_todo_list_id

      t.timestamps
    end
  end
end
