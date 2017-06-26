require 'sinatra'
require 'sinatra/contrib/all'
require_relative '../models/deal.rb'
require_relative '../models/flight.rb'
require_relative '../models/ship.rb'
require_relative '../models/day.rb'
require_relative '../models/flight_deal'

#INDEX
get "/" do
  @deals = Deal.all()
  erb(:"deals/index")
end

#NEW
get "/deals/new" do
  @deals = Deal.all
  @days = Day.all
  @ships = Ship.all
  erb(:"deals/new")
end

#SHOW
get '/deals/:id' do
  @deal = Deal.find(params["id"].to_i())
  erb(:"deals/show")
end

#CREATE = create new deal by admin
post "/deals" do #note: changed /deal to /deals
  Deal.new(params).save()
  redirect to('/')
end
