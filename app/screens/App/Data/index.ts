interface InsightProps {
  label: string;
  amount: number;
}

interface PostProps {
  image: string[];
  title: string;
  description: string;
  date: number;
}

export const insightData: InsightProps[] = [
  {
    amount: 50,
    label: 'Shopping',
  },
  {
    amount: 120,
    label: 'Electricity',
  },
  {
    amount: 200,
    label: 'Travels',
  },
  {
    amount: 300,
    label: 'Food',
  },
  {
    amount: 10,
    label: 'Health',
  },
  {
    amount: 430,
    label: 'Alcohol',
  },
  {
    amount: 200,
    label: 'Transportation',
  },
  {
    amount: 230,
    label: 'Misc',
  },
];

export const posts: PostProps[] = [
  {
    date: +new Date() - 5 * 60 * 1000,
    description:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: ['https://source.unsplash.com/1Xw7GWnivl4/1000x1000'],
    title: 'San Diego Port',
  },
  {
    date: +new Date() - 10 * 60 * 1000,
    description: "If I don't like something, I'll stay away from it",
    image: ['https://source.unsplash.com/UQ96a2VEXNs/1000x1000'],
    title: 'Hydrate!',
  },
  {
    date: +new Date() - 15 * 60 * 1000,
    description:
      'Tomorrow will bring something new, so leave today as a memory.',
    image: ['https://source.unsplash.com/Q0qT4TmoNP0/1000x1000'],
    title: 'Liguria, Italia',
  },
  {
    date: +new Date() - 30 * 60 * 1000,
    description: 'Choosing to do nothing is still a choice, after all.',
    image: ['https://source.unsplash.com/6U2Fh5CBzSk/1000x1000'],
    title: 'Details Matters!',
  },
  {
    date: +new Date() - 120 * 60 * 1000,
    description:
      'He played the game as if his life depended on it and the truth was that it did.',
    image: ['https://source.unsplash.com/FZ54rKAMKMw/1000x1000'],
    title: 'Uncharted!',
  },
  {
    date: +new Date() - 240 * 60 * 1000,
    description:
      "Douglas figured the best way to succeed was to do the opposite of what he'd been doing all his life.",
    image: ['https://source.unsplash.com/PgP9L5CWI38/1000x1000'],
    title: 'Happy Birthday',
  },
  {
    date: +new Date() - 480 * 60 * 1000,
    description:
      'The beauty of the African sunset disguised the danger lurking nearby.',
    image: ['https://source.unsplash.com/xtvo0ffGKlI/1000x1000'],
    title: 'Africa',
  },
  {
    date: +new Date() - 1060 * 60 * 1000,
    description: "Peanuts don't grow on trees, but cashews do.",
    image: ['https://source.unsplash.com/Pi4qfehwOII/1000x1000'],
    title: 'Cashews',
  },
  {
    date: +new Date() - 2120 * 60 * 1000,
    description: 'She only paints with bold colors; she does not like pastels.',
    image: ['https://source.unsplash.com/js4zCM69bUc/1000x1000'],
    title: 'Beautiful',
  },
];
