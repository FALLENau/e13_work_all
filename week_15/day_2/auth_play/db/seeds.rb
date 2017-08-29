# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Account.destroy_all

user_one = User.create!({
  email: 'billy@awesome.com',
  password: 'password',
  password_confirmation: 'password'
})

user_two = User.create!({
  email: 'james@awesome.com',
  password: 'password',
  password_confirmation: 'password'
})

user_one.accounts.create({
  name: 'local', amount: 101.01
})

user_two.accounts.create({
  name: 'local', amount: 1000.01
})

user_two.accounts.create({
  name: 'offshore', amount: 99999.01
})
