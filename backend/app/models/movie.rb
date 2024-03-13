class Movie < ApplicationRecord
  belongs_to :user, required: true
end
