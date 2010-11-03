class Actor < ActiveRecord::Base
  validates_uniqueness_of :name
  validates_presence_of :name
  belongs_to :model
  belongs_to :ai, :class_name => 'AI'
end
