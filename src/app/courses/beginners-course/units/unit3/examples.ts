import {ExampleType} from "src/models/types";

export const vocabulary = [
  {
    word: 'read',
    translation: 'читати',
    sound: 'units/unit_3/read.mp3',
    image: '/assets/images/units/unit_3/read.png'
  },
  {
    word: 'write',
    translation: 'писати',
    sound: 'units/unit_3/write.mp3',
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    word: 'cook',
    translation: 'готувати',
    sound: 'units/unit_3/cook.mp3',
    image: '/assets/images/units/unit_3/cook.png'
  },
  {
    word: 'speak English',
    translation: 'розмовляти англійською',
    sound: 'units/unit_3/speak_english.mp3',
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    word: 'dance',
    translation: 'танцювати',
    sound: 'units/unit_3/dance.mp3',
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    word: 'sing',
    translation: 'співати',
    sound: 'units/unit_3/sing.mp3',
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    word: 'sleep',
    translation: 'спати',
    sound: 'units/unit_3/sleep.mp3',
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    word: 'do a handstand',
    translation: 'робити стойку на руках',
    sound: 'units/unit_3/do_a_handstand.mp3',
    image: '/assets/images/units/unit_3/do_a_handstand.png'
  },
  {
    word: 'swim',
    translation: 'плавати',
    sound: 'units/unit_3/swim.mp3',
    image: '/assets/images/units/unit_3/swim.png'
  },
  {
    word: 'ride a bike',
    translation: 'їздити на велосипеді',
    sound: 'units/unit_3/ride_a_bike.mp3',
    image: '/assets/images/units/unit_3/ride_a_bike.png'
  }
];


/*
* 1. I can read
2. You can write.
3. She can cook.
4. We can speak English.
5. They can dance.
6. He can sing.
7. I can sleep.
8.He can do a handstand.
9. She can swim.
10.They can ride a bike.
* */
export const affirmative = [
  {
    sentence: 'I can read',
    example: 'I {{input}} read',
    missed: 'can',
    translate: 'Я можу читати',
    image: '/assets/images/units/unit_3/read.png'
  },
  {
    sentence: 'You can write',
    example: 'You {{input}} write',
    missed: 'can',
    translate: 'Ти можеш писати',
    image: '/assets/images/units/unit_3/write.png'
  },
  {
    sentence: 'She can cook',
    example: 'She {{input}} cook',
    missed: 'can',
    translate: 'Вона може готувати',
    image: '/assets/images/units/unit_3/cook.png'
  },
  {
    sentence: 'We can speak English',
    example: 'We {{input}} speak English',
    missed: 'can',
    translate: 'Ми можемо розмовляти англійською',
    image: '/assets/images/units/unit_3/speak_english.png'
  },
  {
    sentence: 'They can dance',
    example: 'They {{input}} dance',
    missed: 'can',
    translate: 'Вони можуть танцювати',
    image: '/assets/images/units/unit_3/dance.png'
  },
  {
    sentence: 'He can sing',
    example: 'He {{input}} sing',
    missed: 'can',
    translate: 'Він може співати',
    image: '/assets/images/units/unit_3/sing.png'
  },
  {
    sentence: 'I can sleep',
    example: 'I {{input}} sleep',
    missed: 'can',
    translate: 'Я можу спати',
    image: '/assets/images/units/unit_3/sleep.png'
  },
  {
    sentence: 'He can do a handstand',
    example: 'He {{input}} do a handstand',
    missed: 'can',
    translate: 'Він може робити стойку на руках',
    image: '/assets/images/units/unit_3/do_a_handstand.png'
  }

] as ExampleType[];
