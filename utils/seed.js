const connection = require('../config/connection');
const { User } = require('../models');
const { usernames, emails, getRandomArrItem, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    let userCheck = await connection.db.listCollections({ name: 'Users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('Users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'Thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('Thoughts');
    }


  const users = [];


  for (let i = 0; i < 26; i++) {
    
    const username = usernames[i];
    const email = emails[i];
    

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

