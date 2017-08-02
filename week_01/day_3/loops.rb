# counter = 0
# my_number = 9
#
# while(counter <= my_number) do
#   puts "counter is #{counter}"
#   counter += 1
#   # line 6 is short hand for counter = counter + 1
# end
#
# while (true) do
#   puts "Type something: "
#   input = gets.chomp()
#   break if (input.downcase == "q")
#   puts "You typed #{input}"
# end
#
# numbers = [1,2,3,4,5]
#
# total = 0
#
# for number in numbers
#   total += number
# end
#
# puts total
#
# chickens = ["Margaret", "Hetty", "Henrietta", "Audrey", "Mabel"]
#
# for chicken in chickens
#   puts "hey #{chicken}"
# end

chicken_hashes = [
  { name: "Margaret", age: 2, eggs: 0 },
  { name: "Hetty", age: 1, eggs: 2 },
  { name: "Henrietta", age: 3, eggs: 1 },
  { name: "Audrey", age: 2, eggs: 0 },
  { name: "Mabel", age: 5, eggs: 1 },
]

total_eggs = 0

for chicken_hash in chicken_hashes
  puts "Whoo, eggs!" if chicken_hash[:eggs] > 0
  total_eggs += chicken_hash[:eggs]
end

puts  total_eggs
