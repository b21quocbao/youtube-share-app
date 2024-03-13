require 'test_helper'

class Api::V1::Auth::RegistrationsControllerTest < ActionDispatch::IntegrationTest
  test 'register success' do
    post api_v1_user_registration_url,
         params: { name: 'test', email: 'test@example.com', password: 'test123', password_confirmation: 'test123' }, as: :json
    assert_response :success
  end

  test 'invalid password' do
    post api_v1_user_registration_url,
         params: { name: 'test', email: 'test@example.com', password: 'test123', password_confirmation: 'different' }, as: :json
    assert_response 422
  end
end
