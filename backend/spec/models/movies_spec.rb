require 'rails_helper'

RSpec.describe Movie, type: :model do
  describe 'Movie link Validation' do
    let(:movie) { FactoryBot.build(:movie, link: link) }
    context 'When link is in proper format' do
      let(:link) { 'https://www.youtube.com/watch?v=NTcIto7df44' }
      it 'success' do
        expect(movie).to be_valid
      end
    end

    context 'When wrong url format' do
      let(:link) { 'abc://google.com' }
      it 'invalid error' do
        movie.valid?
        expect(movie.errors.details[:link].any? { |e| e[:error] == :invalid }).to be true
      end
    end

    context 'When not youtube link format' do
      let(:link) { 'https://www.google.com' }
      it 'invalid error' do
        movie.valid?
        expect(movie.errors.details[:link].any? { |e| e[:error] == :invalid }).to be true
      end
    end
  end
end
