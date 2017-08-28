class Venue < ActiveRecord::Base
  has_many( :gigs )
  has_many( :artist, { through: :gigs })
end
