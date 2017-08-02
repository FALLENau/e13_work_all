my_number = 7

puts "What is my favourite number?"
value = gets.chomp().to_i()


while (value != my_number) do
  puts "Nope, try again!"
  if value < my_number
    puts "Higher..."

  else
    puts "Lower.."

  end
  value = gets.chomp().to_i()
end

# Zsolts Example
# while (value != my_number) do
#   puts "Nope, try higher!" if < 
#
#   end
#   value = gets.chomp().to_i()
# end

puts "Yep, the was it"
