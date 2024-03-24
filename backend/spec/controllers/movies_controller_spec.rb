require 'rails_helper'

RSpec.describe Api::V1::MoviesController do
  describe "GET index" do
    it 'should get index' do
      get :index
      expect(response.status).to eq(200)
    end
  end
end
