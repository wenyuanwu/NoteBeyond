# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.delete_all

Notebook.delete_all

User.delete_all 

Tagging.delete_all

Tag.delete_all

user1 = User.create!(username: "Guest", password: "guestpassword")
# user2 = User.create!(username: "user2", password: "123456")


notebook1 = Notebook.create!(title: "Ruby 101",user_id: user1.id)
notebook2 = Notebook.create!(title: "Funky JS",user_id: user1.id)
notebook3 = Notebook.create!(title: "Cooding Bootcamp",user_id: user1.id)
notebook4 = Notebook.create!(title: "Sorting Algorithm",user_id: user1.id)
notebook5 = Notebook.create!(title: "Random Thoughts",user_id: user1.id)

# tag1 = Tag.create!(name: "tag1", user_id: user1.id)
# tag2 = Tag.create!(name: "tag2", user_id: user1.id)


# note1 = Note.create!(title:"note1", body:"body1", user_id: user1.id, notebook_id: notebook1.id)
# note2 = Note.create!(title:"note2", body:"body2", user_id: user1.id, notebook_id: notebook2.id)
# note3 = Note.create!(title:"note3", body:"body3", user_id: user2.id, notebook_id: notebook1.id)