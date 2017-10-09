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
notebook3 = Notebook.create!(title: "Random Thoughts",user_id: user1.id)
# notebook4 = Notebook.create!(title: "Sorting Algorithm",user_id: user1.id)


tag1 = Tag.create!(name: "welcome", user_id: user1.id)
tag2 = Tag.create!(name: "ruby", user_id: user1.id)
tag3 = Tag.create!(name: "python", user_id: user1.id)


note1 = Note.create!(title:"Welcome to NoteBeyond", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"8f9a2\",\"text\":\"Capture, organize, and share notes from anywhere. Your best ideas are always with you and always in sync!\",\"type\":\"code-block\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":105,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id: notebook3.id)

note2 = Note.create!(title:"Ruby vs Python", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"dv8f2\",\"text\":\"Python is perhaps the most similar language to Ruby. Both are dynamic, reflective, object-oriented, multi-paradigm scripting languages. They even use similar syntax! Here are the primary linguistic differences:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":166,\"length\":44,\"style\":\"UNDERLINE\"},{\"offset\":166,\"length\":44,\"style\":\"ITALIC\"},{\"offset\":166,\"length\":44,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e4d94\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"65kdc\",\"text\":\"Python doesn't support blocks.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3ogfg\",\"text\":\"Python has a richer set of data structures.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"41uuf\",\"text\":\"Python is inflexible: there's one best way of doing things!\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ajajh\",\"text\":\"Whitespace is syntactically significant in Python.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bnsi3\",\"text\":\"Python is less object-oriented. It has primitive data types, which are more fundamental than objects (not everything in Python is an object!), and many of its object-oriented features were late additions.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id: notebook1.id)

# note3 = Note.create!(title:"note3", body:"body3", user_id: user2.id, notebook_id: notebook1.id)

tagging1 = Tagging.create!(note_id: note1.id, tag_id: tag1.id);
tagging2 = Tagging.create!(note_id: note2.id, tag_id: tag2.id);
tagging2 = Tagging.create!(note_id: note2.id, tag_id: tag3.id);






