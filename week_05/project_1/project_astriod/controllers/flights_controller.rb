require 'sinatra'
require 'sinatra/contrib/all'
require_relative '../models/flight.rb'
require_relative '../models/deal.rb'
require_relative '../models/ship.rb'
require_relative '../models/day.rb'

#INDEX
get '/flights' do
  @flights = Flight.all()
  erb(:'flights/index')
end

#NEW
get '/flights/new' do
  @ships = Ship.all
  @flights = Flight.all
  erb(:"flights/new")
end

#CREATE
post '/flights' do
  flight = Flight.new(params)
  flight.save()
  redirect to ('/flights')
end
