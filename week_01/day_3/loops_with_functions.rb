chicken_hashes = [
  { name: "Margaret", age: 2, eggs: 0 },
  { name: "Hetty", age: 1, eggs: 2 },
  { name: "Henrietta", age: 3, eggs: 1 },
  { name: "Audrey", age: 2, eggs: 0 },
  { name: "Mabel", age: 5, eggs: 1 },
]

def egg_counter(chickens)
  total_eggs = 0

  for chicken in chickens
    total_eggs += chicken[:eggs]
  end
  return total_eggs
end

def find_chicken_by_name(name, chickens)
    for chicken in chickens
      return chicken if chicken[:name] == name
    end

    return "Chicken not found"
end

puts find_chicken_by_name("Mabel", chicken_hashes)
