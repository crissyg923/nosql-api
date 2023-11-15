const connection = require('../config/connection');
const { User } = require('../models');
const { usernames, emails, getRandomArrItem, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
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
    // const thoughts = getRandomThoughts(3);
    const username = usernames[i];
    const email = emails[i];
    // const friends = getRandomArrItem(usernames);

    users.push({
      username,
      email,
      // friends,
      // thoughts,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  // await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...students],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

