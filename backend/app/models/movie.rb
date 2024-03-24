class Movie < ApplicationRecord
  belongs_to :user, required: true

  validates :title, presence: true, length: { maximum: 50 }
  validates :link, format: VALID_URL_REGEX
  validates :link, format: VALID_YOUTUBE_REGEX
end
