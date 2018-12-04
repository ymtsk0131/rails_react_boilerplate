password = "123456"

10.times do
    User.create(
        email: Faker::Internet.safe_email,
        password: password,
        password_confirmation: password,
        name: Faker::Name.name,
        introduction: Faker::Hacker.say_something_smart
    )
end
