require 'test_helper'

class ApplicationCable::ConnectionTest < ActionCable::Connection::TestCase
  test 'connection' do
    connect
  end
end
