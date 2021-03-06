class CreateCreatures < ActiveRecord::Migration
  def self.up
    create_table :creatures do |t|
      t.string :name
      t.float :scale
      t.string :orientation, :limit => 3000
      
      t.references :actor
      #t.timestamps
    end
  end

  def self.down
    drop_table :creatures
  end
end
