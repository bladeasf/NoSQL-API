const mongoose = require('mongoose');
const { User, Thought } = require('../models');

const userData = [
  {
    _id: new mongoose.Types.ObjectId('6601df755c98aa0247cbb574'),
    username: 'Kat1',
    email: 'Kat1@example.com',
    friends: [], 
  },
  {
    _id: new mongoose.Types.ObjectId('6601df755c98aa0247cbb575'),
    username: 'Marine2',
    email: 'Marine2@example.com',
    friends: [], 
  },
  {
    _id: new mongoose.Types.ObjectId('6601f4e2b27f552b3e7cff46'), 
    username: 'Mako3',
    email: 'Mako3@example.com',
    friends: [], 
  },
 
  {
    _id: new mongoose.Types.ObjectId('6601f4e2b27f552b3e7cff47'), 
    username: 'Nate4',
    email: 'Nate4@example.com',
    friends: [], 
  },
];

const thoughtData = [
  {
    _id: new mongoose.Types.ObjectId(),
    thoughtText: "I'm Kat. I love listening to music.",
    username: 'Kat1',
  },
  {
    _id: new mongoose.Types.ObjectId(),
    thoughtText: "I'm Marine. We can listen to music together",
    username: 'Marine2',
  },
];

const reactionData = [
  {
    reactionBody: "That's a great thought, Kat!",
    username: 'Marine2',
  },
  {
    reactionBody: "Thanks, Marine! Looking forward to being friends.",
    username: 'Kat1',
  },
];

mongoose.connect('mongodb://localhost/NoSQLnetworkAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Add new seed users
  const seededUsers = await User.insertMany(userData);

  // Prepare user friendships
  const Kat1 = seededUsers.find(user => user.username === 'Kat1');
  const Marine2 = seededUsers.find(user => user.username === 'Marine2');
  Kat1.friends.push(user2._id);
  Marine2.friends.push(user1._id);
  await Kat1.save();
  await Marine2.save();

  // Add new seed thoughts with reactions
  for (let thought of thoughtData) {
    const user = seededUsers.find(user => user.username === thought.username);
    const newThought = await Thought.create({ ...thought, userId: user._id });
    
    // Add reactions to the thought
    for (let reaction of reactionData) {
      newThought.reactions.push({
        reactionBody: reaction.reactionBody,
        username: reaction.username,
      });
    }

    await newThought.save();
  }

  console.log('Database seeded!');
  process.exit(0);
});
