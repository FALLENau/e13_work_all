require 'sinatra'
require 'sinatra/contrib/all'
require_relative '../models/flight.rb'
require_relative '../models/deal.rb'
require_relative '../models/ship.rb'
require_relative '../models/day.rb'

#INDEX
get '/ships' do
  @ships = Ship.all()
  erb(:'ships/index')
end
