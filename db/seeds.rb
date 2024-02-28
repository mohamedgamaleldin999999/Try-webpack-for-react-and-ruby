greetings = ["Hello", "Hi", "Greetings", "Welcome", "Salutations"]

greetings.each do |greeting|
  Greeting.create(message: greeting)
end
