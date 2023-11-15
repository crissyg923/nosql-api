const usernames = [
    'eagles2020',
    'giants1903',
    'dolphins0101',
    'cowboys2211',
    'titans34',
    'lions28',
    'packers4309',
    'browns3456',
    'bearslove34',
    'chiefspat20',
    'sanfran1010',
    'chargers29',
    'vikings09',
    'ravens0305',
    'saintsforever',
    'steelers1234',
    'buccaneers22',
    'jaguarsgo10',
    'falcons8723',
    'jetsfly12',
    'raidersraid',
    'commandersallday',
    'bengalswin',
    'seahawks1111',
    'texansup3',
    'colts45'
  ];

  const emails = [
      'eagles2020@gmail.com',
      'giants1903@gmail.com',
      'dolphins0101@gmail.com',
      'cowboys2211@gmail.com',
      'titans34@gmail.com',
      'lions28@gmail.com',
      'packers4309@gmail.com',
      'browns3456@gmail.com',
      'bearslove34@gmail.com',
      'chiefspat20@gmail.com',
      'sanfran1010@gmail.com',
      'chargers29@gmail.com',
      'vikings09@gmail.com',
      'ravens0305@gmail.com',
      'saintsforever@gmail.com',
      'steelers1234@gmail.com',
      'buccaneers22@gmail.com',
      'jaguarsgo10@gmail.com',
      'falcons8723@gmail.com',
      'jetsfly12@gmail.com',
      'raidersraid@gmail.com',
      'commandersallday@gmail.com',
      'bengalswin@gmail.com',
      'seahawks1111@gmail.com',
      'texansup3@gmail.com',
      'colts45@gmail.com'
  ];
  
  const thoughts = [
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},
    {'thoughtText':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m', 'username':'eagles2020@gmail.com'},

    'Forem decorum ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bo',
    'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musi',
    'The European languages are members of the same family. Their separate existence is a myth. For scien',
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.',
    'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whi',
    'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in',
    'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced',
    'Whats happened to me? he thought. It wasnt a dream. His room, a',
    ' Quick zephyrs blow, understandable TV quiz. ',
    'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley',
    ' It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    ' If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.',
    'The breeeze was like cool ice against your skin on a hot day.',
    'Understanding each other is one of the greatest dichotimies in history',
    'When in doubt, choose C.',
    ' If several books, the grammar of the resulting language is more simple and regular than that of the individual languages.',
    'The breeeze nonexistent on this scorching day.',
    'Understanding your native language is crucial to knowing your culture',
    'When in doubt, play eenie meenie miny moe.',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
//   const getRandomName = () =>
//     `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomArrItem(thoughts));
    }
    return results;
    
  };
  
  // Export the functions for use in seed.js
  module.exports = { usernames, emails, getRandomArrItem, getRandomThoughts };
  