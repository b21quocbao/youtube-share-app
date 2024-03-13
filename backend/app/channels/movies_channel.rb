class MoviesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'movies_channel'
  end
  def unsubscribed
  end
end