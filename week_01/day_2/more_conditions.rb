zsolt_hungry = true
zsolt_tired = true

puts "Zsolt is hungry" if (zsolt_hungry && zsolt_tired)


zsolt_tired = false

puts "Zsolt is grumpy" if (zsolt_hungry || zsolt_tired)
