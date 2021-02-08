=begin
    let's try calculating factorial in Ruby
=end
puts("Enter Positive Integer to calculate factorial: ")
num = gets.chomp.to_i

factorial = 1
i=1
num.times do
    factorial *= i
    i += 1
end

puts num.to_s+'! = '+factorial.to_s
