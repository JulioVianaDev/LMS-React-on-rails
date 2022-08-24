@ctypes  = ['cooking','cs','math','writing']
Course.delete_all
User.delete_all
10.times do
    Course.create(
        title: Faker::Game.title,
        desc: Faker::Game.genre,
        ctype: @ctypes.sample
    )
    5.times do 
        User.create(
            first: Faker::Name.first_name, 
            last: Faker::Name.last_name,
            image: Faker::Avatar.image ,
        )
    end
end


Course.all.each do |course|
    puts "Course: #{course.title}"
    puts "Desc: #{course.desc}"
    puts "Ctype: #{course.ctype}"

end

User.all.each do |user|
    puts "User: #{user.first}"
    puts "User: #{user.last}"
    puts "User: #{user.image}"
end