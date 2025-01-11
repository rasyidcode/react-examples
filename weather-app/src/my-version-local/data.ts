import Weather from "./Weather";

export const cities = [
  {
    name: "Yogyakarta",
    lat: -7.8011945,
    lon: 110.364917,
    country: "ID",
    state: "Special Region of Yogyakarta",
  },
  {
    name: "Palu",
    lat: -0.8957793,
    lon: 119.8679974,
    country: "ID",
    state: "Central Sulawesi",
  },
  {
    name: "Klaten",
    lat: -7.70806,
    lon: 110.6048559,
    country: "ID",
    state: "Central Java",
  },
  {
    name: "Bandung",
    lat: -7.4419024,
    lon: 112.3956465,
    country: "ID",
    state: "East Java",
  },
  {
    name: "Medan",
    lat: 3.5896654,
    lon: 98.6738261,
    country: "ID",
    state: "North Sumatra",
  },
  {
    name: "Bali",
    lat: -8.456018100000001,
    lon: 115.27038551191185,
    country: "ID",
    state: "Bali",
  },
  {
    name: "Jakarta",
    lat: -6.175247,
    lon: 106.8270488,
    country: "ID",
  },
];

export type Weather = {
  timezone: number;
  id: number;
  name: string;
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: 1009;
    grnd_level: 988;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
};

export const weathers: Weather[] = [
  {
    coord: {
      lon: 110.3608,
      lat: -7.7828,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 301.08,
      feels_like: 303.94,
      temp_min: 301.08,
      temp_max: 301.08,
      pressure: 1009,
      humidity: 72,
      sea_level: 1009,
      grnd_level: 988,
    },
    visibility: 10000,
    wind: {
      speed: 3.87,
      deg: 215,
      gust: 5.26,
    },
    clouds: {
      all: 100,
    },
    dt: 1736587113,
    sys: {
      country: "ID",
      sunrise: 1736548200,
      sunset: 1736593340,
    },
    timezone: 25200,
    id: 1621177,
    name: "Yogyakarta",
    cod: 200,
  },
];
