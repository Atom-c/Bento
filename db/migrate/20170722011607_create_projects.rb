class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.integer :creator_id
      t.integer :team_id
      t.integer :index, default: 0

      t.timestamps
    end
  end
end
