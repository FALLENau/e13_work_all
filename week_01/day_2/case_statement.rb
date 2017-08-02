puts "Enter the score:"
score = gets.chomp.to_i

result = case score
  when 10
    "You da man! genius!"
  when 8..9.99
    "merit!"
  when 5..7.99
    "pass... only just FOO"
  when 4..4.99
    "resit TT"
  else
    "!!!!! I PITTY THE FOO WHO FAILS !!!!!!!"
end

puts result
