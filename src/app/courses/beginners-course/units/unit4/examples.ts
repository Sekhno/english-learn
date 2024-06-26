import {AnswersType, ExampleType} from "src/models/types";

export const vocabulary = [
  {
    word: 'airport',
    translation: 'аеропорт',
    sound: 'units/unit_4/airport.mp3',
    image: '/assets/images/units/unit_4/airport.jpg'
  },
  {
    word: 'church',
    translation: 'церква',
    sound: 'units/unit_4/church.mp3',
    image: '/assets/images/units/unit_4/church.jpg'
  },
  {
    word: 'bus station',
    translation: 'автобусна зупинка',
    sound: 'units/unit_4/bus_station.mp3',
    image: '/assets/images/units/unit_4/bus_station.jpg'
  },
  {
    word: 'train station',
    translation: 'залізнична станція',
    sound: 'units/unit_4/train_station.mp3',
    image: '/assets/images/units/unit_4/train_station.jpg'
  },
  {
    word: 'library',
    translation: 'бібліотека',
    sound: 'units/unit_4/library.mp3',
    image: '/assets/images/units/unit_4/library.jpg'
  },
  {
    word: 'cinema',
    translation: 'кінотеатр',
    sound: 'units/unit_4/cinema.mp3',
    image: '/assets/images/units/unit_4/cinema.jpg'
  },
  {
    word: 'gym',
    translation: 'спортзал',
    sound: 'units/unit_4/gym.mp3',
    image: '/assets/images/units/unit_4/gym.jpg'
  },
  {
    word: 'police station',
    translation: 'поліція',
    sound: 'units/unit_4/police_station.mp3',
    image: '/assets/images/units/unit_4/police_station.jpg'
  },
  {
    word: 'square',
    translation: 'площа',
    sound: 'units/unit_4/square.mp3',
    image: '/assets/images/units/unit_4/square.jpg'
  },
  {
    word: 'fire station',
    translation: 'пожежна станція',
    sound: 'units/unit_4/fire_station.mp3',
    image: '/assets/images/units/unit_4/fire_station.jpg'
  },
];

export const affirmative = [
  {
    sentence: 'There is a gym in the town',
    example: 'There {{input}} a gym in the town',
    missed: 'is',
    translate: 'В місті є спортзал',
    image: '/assets/images/units/unit_4/gym.jpg'
  },
  {
    sentence: 'There is an airport in the town',
    example: 'There {{input}} an airport in the town',
    missed: 'is',
    translate: 'В місті є аеропорт',
    image: '/assets/images/units/unit_4/airport.jpg'
  },
  {
    sentence: 'There are three churches in the town',
    example: 'There {{input}} three churches in the town',
    missed: 'are',
    translate: 'В місті є три церкви',
    image: '/assets/images/units/unit_4/church.jpg'
  },
  {
    sentence: 'There are two bus stations in the town',
    example: 'There {{input}} two bus stations in the town',
    missed: 'are',
    translate: 'В місті є дві автобусні зупинки',
    image: '/assets/images/units/unit_4/bus_station.jpg'
  },
  {
    sentence: 'There is a train station in the town',
    example: 'There {{input}} a train station in the town',
    missed: 'is',
    translate: 'В місті є залізнична станція',
    image: '/assets/images/units/unit_4/train_station.jpg'
  },
  {
    sentence: 'There is a library in the town',
    example: 'There {{input}} a library in the town',
    missed: 'is',
    translate: 'В місті є бібліотека',
    image: '/assets/images/units/unit_4/library.jpg'
  },
  {
    sentence: 'There are four cinemas in the town',
    example: 'There {{input}} four cinemas in the town',
    missed: 'are',
    translate: 'В місті є чотири кінотеатри',
    image: '/assets/images/units/unit_4/cinema.jpg'
  },
  {
    sentence: 'There are two gyms in the town',
    example: 'There {{input}} two gyms in the town',
    missed: 'are',
    translate: 'В місті є два спортзали',
    image: '/assets/images/units/unit_4/gym.jpg'
  },
  {
    sentence: 'There is a police station in the town',
    example: 'There {{input}} a police station in the town',
    missed: 'is',
    translate: 'В місті є поліція',
    image: '/assets/images/units/unit_4/police_station.jpg'
  },
  {
    sentence: 'There is a square in the town',
    example: 'There {{input}} a square in the town',
    missed: 'is',
    translate: 'В місті є площа',
    image: '/assets/images/units/unit_4/square.jpg'
  }
] as ExampleType[];

export const negative = [
  {
    sentence: "There isn't airport in the town",
    translate: 'В місті немає аеропорту.',
    image: '/assets/images/units/unit_4/airport.jpg'
  },
  {
    sentence: "There aren't three gyms in the town",
    translate: 'В місті немає трьох спортзалів.',
    image: '/assets/images/units/unit_4/gym.jpg'
  },
  {
    sentence: "There isn't cinema in the town",
    translate: 'В місті немає кінотеатру.',
    image: '/assets/images/units/unit_4/cinema.jpg'
  },
  {
    sentence: "There aren't two fire stations in the town",
    translate: 'В місті немає двох пожежних станцію.',
    image: '/assets/images/units/unit_4/fire_station.jpg'
  },
  {
    sentence: "There isn't library in the town",
    translate: 'В місті немає бібліотеки.',
    image: '/assets/images/units/unit_4/library.jpg'
  },
  {
    sentence: "There aren't two police stations in the town",
    translate: 'В місті немає двох поліцейських участків.',
    image: '/assets/images/units/unit_4/police_station.jpg'
  },
  {
    sentence: "There isn't square in the town",
    translate: 'В місті немає площі.',
    image: '/assets/images/units/unit_4/square.jpg'
  },
  {
    sentence: "There isn't train station in the town",
    translate: 'В місті немає ЗД станції.',
    image: '/assets/images/units/unit_4/train_station.jpg'
  },
  {
    sentence: "There isn't church in the town",
    translate: 'В місті немає церкви.',
    image: '/assets/images/units/unit_4/church.jpg'
  }
] as ExampleType[];

export const question = [
  {
    sentence: 'Is there an airport?',
    image: '/assets/images/units/unit_4/airport.jpg'
  },
  {
    sentence: 'Are there two gyms?',
    image: '/assets/images/units/unit_4/gym.jpg'
  },
  {
    sentence: 'Is there a cinema?',
    image: '/assets/images/units/unit_4/cinema.jpg'
  },
  {
    sentence: 'Are there two police stations?',
    image: '/assets/images/units/unit_4/police_station.jpg'
  },
  {
    sentence: 'Is there a fire station?',
    image: '/assets/images/units/unit_4/fire_station.jpg'
  },
  {
    sentence: 'Is there a library?',
    image: '/assets/images/units/unit_4/library.jpg'
  },
  {
    sentence: 'Are there two churches?',
    image: '/assets/images/units/unit_4/church.jpg'
  },
  {
    sentence: 'Is there a train station?',
    image: '/assets/images/units/unit_4/train_station.jpg'
  },
  {
    sentence: 'Is there a square?',
    image: '/assets/images/units/unit_4/square.jpg'
  }
] as ExampleType[];
