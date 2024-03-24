class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  VALID_PASSWORD_REGEX = /\A(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?!.*[\s\u3000]).*\z/
  VALID_URL_REGEX = /\A#{URI::regexp(%w(http https))}\z/
  VALID_YOUTUBE_REGEX = /\A.*youtube.*\z/
end
