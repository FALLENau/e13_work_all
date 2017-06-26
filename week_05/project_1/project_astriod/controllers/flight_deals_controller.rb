require 'sinatra'
require 'sinatra/contrib/all'
require_relative '../models/deal.rb'
require_relative '../models/flight.rb'
require_relative '../models/ship.rb'
require_relative '../models/day.rb'
require_relative '../models/flight_deal.rb'

#INDEX
get "/flight_deals" do
  @deals = Deal.all()
  erb(:"deals/index")
end

#NEW
get "/flight_deals/new" do
  @deals = Deal.all
  @flights = Flight.all
  erb(:"flight_deals/new")
end

#CREATE
post "/flight_deals" do
  FlightDeal.new(params).save()
  redirect to "/flight_deals"
end
