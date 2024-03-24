require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'UserPassword Validation' do
    let(:user) { FactoryBot.build(:user, email: 'test-user@example.com', password: password, password_confirmation: password) }
    context 'When password is in proper format' do
      let(:password) { 'ValidPassword1!' }
      it 'success' do
        expect(user).to be_valid
      end
    end

    context 'When the password does not contain numbers' do
      let(:password) { 'InvalidPassword!' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When the password does not contain lowercase letters' do
      let(:password) { 'INVALIDPASSWORD1!' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When the password does not contain uppercase letters' do
      let(:password) { 'invalidpassword1!' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When the password does not contain special characters' do
      let(:password) { 'InvalidPassword1' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When password contains spaces' do
      let(:password) { 'Invalid Password1!' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When the password contains double-byte spaces' do
      let(:password) { 'Invalid　Password1!' }
      it 'invalid error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When the password is 8 characters or less' do
      let(:password) { 'IP1!' }
      it 'too_short error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :too_short }).to be true
      end
    end

    context 'When the password contains an email address string' do
      let(:password) { 'test-useraA1!' }
      it 'password_matches_email error' do
        user.valid?
        expect(user.errors.details[:password].any? { |e| e[:error] == :password_matches_email }).to be true
      end
    end
  end
end
