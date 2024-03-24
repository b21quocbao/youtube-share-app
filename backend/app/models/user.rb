# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  validates :password, format: { with: VALID_PASSWORD_REGEX }, allow_blank: true
  validate :password_not_matching_other_info

  def password_not_matching_other_info
    return if password.blank?
    if email.present?
      email_parts = email.split('@')
      if password.include?(email_parts.first) || password.include?(email_parts.last)
        errors.add(:password, :password_matches_email)
      end
    end
  end
end
