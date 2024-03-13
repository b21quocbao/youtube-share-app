require 'test_helper'

class Api::V1::Auth::SessionsControllerTest < ActionDispatch::IntegrationTest
  test 'login success' do
    post api_v1_user_registration_url,
         params: { name: 'test', email: 'test@example.com', password: 'test123', password_confirmation: 'test123' }, as: :json

    post api_v1_user_session_url,
         params: { email: 'test@example.com', password: 'test123' }, as: :json
    assert_response :success
  end

  test 'login fail' do
    post api_v1_user_registration_url,
         params: { name: 'test', email: 'test@example.com', password: 'test123', password_confirmation: 'test123' }, as: :json

    post api_v1_user_session_url,
         params: { email: 'test@example.com', password: 'wrong' }, as: :json
    assert_response 401
  end
end
