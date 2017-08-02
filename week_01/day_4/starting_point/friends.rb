def get_name(person)
  return person[:name]
end

def get_tv_show(person)
  return person[:favourites][:tv_show]
end

def get_food(person, food)
  return person[:favourites][:things_to_eat].include?(food)
  # Zsolt Example: Loops----
end

def add_friend(person, friend)
  person[:friends].push(friend)
end

def remove_friend(person, friend)
  person[:friends].delete_at(0)
end

def total_funds(people)
  total = 0
  for person in people
      total += person[:monies]
  end
  return total
end
#
# def lend_money()
#   giver[:monies] -= value
#   reciver[:monies] += value
# end
#
# def all_foods(people)
#   foods = []
#   for person in people
#     result << person if people
# end
