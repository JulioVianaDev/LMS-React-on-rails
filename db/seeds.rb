@ctypes  = ['cooking','cs','math','writing']
Course.delete_all

10.times do
    Course.create(
        title: Faker::Game.title,
        desc: Faker::Game.genre,
        ctype: @ctypes.sample
    )
end

Course.all.each do |course|
    puts "Course: #{course.title}"
    puts "Desc: #{course.desc}"
    puts "Ctype: #{course.ctype}"

end