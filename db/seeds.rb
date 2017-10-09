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
notebook3 = Notebook.create!(title: "Fun Fact",user_id: user1.id)
# notebook4 = Notebook.create!(title: "Sorting Algorithm",user_id: user1.id)


tag1 = Tag.create!(name: "welcome", user_id: user1.id)
tag2 = Tag.create!(name: "ruby", user_id: user1.id)
tag3 = Tag.create!(name: "python", user_id: user1.id)
tag4 = Tag.create!(name: "this", user_id: user1.id)
tag5 = Tag.create!(name: "JS", user_id: user1.id)
tag6 = Tag.create!(name: "AJAX", user_id: user1.id)
tag7 = Tag.create!(name: "test", user_id: user1.id)


note1 = Note.create!(title:"Welcome to NoteBeyond", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"8f9a2\",\"text\":\"Capture, organize, and share notes from anywhere. Your best ideas are always with you and always in sync!\",\"type\":\"code-block\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":105,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id: notebook3.id)

note2 = Note.create!(title:"Ruby vs Python", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"dv8f2\",\"text\":\"Python is perhaps the most similar language to Ruby. Both are dynamic, reflective, object-oriented, multi-paradigm scripting languages. They even use similar syntax! Here are the primary linguistic differences:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":166,\"length\":44,\"style\":\"UNDERLINE\"},{\"offset\":166,\"length\":44,\"style\":\"ITALIC\"},{\"offset\":166,\"length\":44,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e4d94\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"65kdc\",\"text\":\"Python doesn't support blocks.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3ogfg\",\"text\":\"Python has a richer set of data structures.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"41uuf\",\"text\":\"Python is inflexible: there's one best way of doing things!\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ajajh\",\"text\":\"Whitespace is syntactically significant in Python.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bnsi3\",\"text\":\"Python is less object-oriented. It has primitive data types, which are more fundamental than objects (not everything in Python is an object!), and many of its object-oriented features were late additions.\",\"type\":\"ordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id: notebook1.id)

note3 = Note.create!(title:"This and That", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"9fem1\",\"text\":\"This\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"eftdf\",\"text\":\"Consider this example:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":22,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"95i5n\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"aplkt\",\"text\":\"let cat = {\\n  purr: function () {\\n    console.log(\\\"meow\\\");\\n  },\\n  purrMore: function () {\\n    for (let i = 0; i < 10; i ++) {\\n      this.purr();\\n    }\\n  }\\n};\\n\\ncat.purr();\\ncat.purrMore()\",\"type\":\"code-block\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id: notebook2.id)

note4 = Note.create!(title: "AJAX Remote Form", body: "{\"entityMap\":{},\"blocks\":[{\"key\":\"ddg0j\",\"text\":\"Using AJAX, let's write an event handler that, when the user clicks the \\\"submit\\\" button, will submit the form data in the background.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"lf77\",\"text\":\"jQuery comes with a serialize method which translates a set of form elements as a URL encoded string. In this case the name/value attributes of each input element within our form serve as key/value pairs. Since HTTP request data is just structured text which can be decoded on the server side, this will work quite nicely.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":20,\"length\":9,\"style\":\"CODE\"},{\"offset\":119,\"length\":4,\"style\":\"CODE\"},{\"offset\":124,\"length\":5,\"style\":\"CODE\"},{\"offset\":149,\"length\":5,\"style\":\"CODE\"},{\"offset\":20,\"length\":9,\"style\":\"UNDERLINE\"},{\"offset\":119,\"length\":10,\"style\":\"UNDERLINE\"},{\"offset\":149,\"length\":5,\"style\":\"UNDERLINE\"},{\"offset\":20,\"length\":9,\"style\":\"BOLD\"},{\"offset\":119,\"length\":10,\"style\":\"BOLD\"},{\"offset\":149,\"length\":5,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5bac3\",\"text\":\"Let's see it go!\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}", user_id:user1.id, notebook_id:notebook2.id)

note5 = Note.create!(title:"Why test?", body: "{\"entityMap\":{},\"blocks\":[{\"key\":\"8sj9q\",\"text\":\"Yes, making sure the dang thing actually works is important. But beyond the obvious, why take the time to write tests?\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"b1o7p\",\"text\":\"To make sure the dang thing works\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":33,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":33,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"248es\",\"text\":\" Yes, that's obvious, but dagnabit, it's important!\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8pp7u\",\"text\":\"Increase flexibility & reduce fear (of code)\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":44,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":44,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"cj5b1\",\"text\":\"You've written a whole bunch of functionality, multiple other developers have worked on the code, you're deep into the project... And then you realize you have to refactor big chunks of it. Without automated tests, you'll be walking on eggshells, frightened of the codebase and the various landmines that are surely lying in wait.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"9t0vg\",\"text\":\"With tests, you can aggressively refactor with confidence. If anything breaks, you'll know. And you'll know exactly what the expectations are for the module you're refactoring, so as long as it meets the specs, you're good.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"76vdu\",\"text\":\"Make collaboration easier\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":25,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":25,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"bstef\",\"text\":\"Complex applications are built by teams of developers. It may be that not all those developers will actually get the chance to talk to one another (they're busy, they may live in different places, some of them may have left the company, new people just joined, it's a huge project, etc.).\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"158dk\",\"text\":\"Specs allow teams to have confidence that each module performs a specific task and reduces the need for expensive coordination. The specs themselves become an effective form of communication.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"lnpe\",\"text\":\"Produce documentation\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":21,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":21,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"bc8co\",\"text\":\"If the tests are written well, the tests can serve as documentation for the codebase. Need to know what such and such module does? Check out the specs. This is related to easing collaboration.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}", user_id: user1.id, notebook_id:notebook1.id)

note6 = Note.create!(title: "What makes 10x engineer", body:"{\"entityMap\":{},\"blocks\":[{\"key\":\"1j566\",\"text\":\"They are great at reading and accurately assimilating large and complicated codebases quickly. Asking other people how something works involves multiple round trip times, grokking code well transforms this activity from something that happens slowly at the rate of multi human speed to something that happens instantaneously in terms of their own intrinsic mental latency. In the overall scheme of things (i.e. beyond a version 1.0 product) for any codebase of significant complexity, the maximum amount of time is spent reading code rather than writing it, so optimizing their read times is a must. This also means they tend to write code that works right the first time around, so they spend less time debugging in the first place. \",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":94,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"ffk3\",\"text\":\"Human activity is not linear with respect to time spent working vs. output product. Most people need some level of ramp up to \\\"get in the zone\\\" where they are running at their peak potential. The 10X programmers get in the zone quicker and are more resilient to dropping out of it in the face of external context switching due to non coding activities.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":83,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"27khd\",\"text\":\"They know when one surgically placed line will work wonders, and they know when to rip out a large section of code and rewrite it. They have the right intuition about what edge cases which might require special handling are not important to fix, since handling the corner cases often takes a disproportionate amount of time to implement.\",\"type\":\"blockquote\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":59,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":59,\"style\":\"BOLD\"},{\"offset\":83,\"length\":32,\"style\":\"STRIKETHROUGH\"},{\"offset\":83,\"length\":32,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}}]}", user_id:user1.id, notebook_id:notebook3.id)


tagging1 = Tagging.create!(note_id: note1.id, tag_id: tag1.id);
tagging2 = Tagging.create!(note_id: note2.id, tag_id: tag2.id);
tagging3 = Tagging.create!(note_id: note2.id, tag_id: tag3.id);
tagging4 = Tagging.create!(note_id: note3.id, tag_id: tag4.id);
tagging5 = Tagging.create!(note_id: note3.id, tag_id: tag5.id);
tagging6 = Tagging.create!(note_id: note4.id, tag_id: tag5.id);
tagging7 = Tagging.create!(note_id: note4.id, tag_id: tag6.id);
tagging6 = Tagging.create!(note_id: note5.id, tag_id: tag2.id);
tagging7 = Tagging.create!(note_id: note5.id, tag_id: tag7.id);







