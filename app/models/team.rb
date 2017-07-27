class Team < ApplicationRecord
  validates :owner_id, :team_name, presence: true

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

  has_many :projects,
  foreign_key: :team_id,
  class_name: :Project

  has_many :team_memberships,
	foreign_key: :team_id,
	class_name: :Membership

	has_many :users,
	through: :team_memberships,
	source: :user

end