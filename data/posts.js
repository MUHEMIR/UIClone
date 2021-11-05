import {USERS} from './users';

export const POST = [
  {
    imageurl:
      'https://static.myfigurecollection.net/upload/pictures/2021/08/03/2805688.jpeg',
    user: USERS[0].user,
    likes: 420,
    caption: 'finally my PO arrived!',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'muh_emir_ghiff',
        comment: 'damn, jadi pengen khilaf 😢',
      },
    ],
  },

  {
    imageurl:
      'https://thelincolnite.co.uk/wp-content/uploads/2017/05/RAF-Cranwell.jpg',
    user: USERS[4].user,
    likes: 113,
    caption: 'RAF College Cranwel!',
    profile_picture: USERS[4].image,
    comments: [
      {
        user: 'champ',
        comment: 'as a cadet or as a tourist?',
      },

      {
        user: 'pekzjr',
        comment: 'tourist probably, lol',
      },
    ],
  },
];
