class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all

    render json: { code: 200, status: 'success', body: movies.as_json(include: %i[user]) }
  end

  def create
    movie = Movie.new(
      title: Faker::Movie.title,
      user: current_api_v1_user,
      like: Faker::Number.between(from: 1, to: 100),
      dislike: Faker::Number.between(from: 1, to: 100),
      description: Faker::Lorem.paragraph,
      link: request.params['link']
    )

    if movie.save
      render json: { code: 200, status: 'success',
                     body: movie.as_json }
    else
      render json: { code: 400, status: 'error',
                     body: movie.errors.full_messages }
    end
  end
end
