# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Gig.delete_all()
Venue.delete_all()
Album.delete_all()
Artist.delete_all()

a1 = Artist.create({ name: 'Oasis' })
a2 = Artist.create({ name: 'Iron Maiden' })

Album.create({ title: 'Piece of Mind', artist: a2 })
Album.create({ title: 'Roll with it', artist: a1 })

v1 = Venue.create({ name: 'Hammersmith Odeon', location: 'London'})
v2 = Venue.create({ name: 'Playhouse', location: 'Edinburgh'})

Gig.create({ price: 15, date: '2017-01-14', artist: a1, venue: v1 })
Gig.create({ price: 15, date: '2018-04-14', artist: a2, venue: v2 })
