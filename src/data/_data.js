const games = [
  { id: "1", title: "Zelda, Tears of the Kingdom", platform: ["Switch"] },
  { id: "2", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
  { id: "3", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
  { id: "4", title: "Maria Kart", platform: ["Switch"] },
  { id: "5", title: "Polemon Scarlet", platform: ["PS5", "Xbox", "PC"] },
];

const authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "yoshi", verified: false },
  { id: "3", name: "peach", verified: true },
];

const reviews = [
  { id: "1", rating: 9, content: "lorem ipsum", authot_id: "1", game_id: "2" },
  { id: "2", rating: 9, content: "lorem ipsum", authot_id: "2", game_id: "1" },
  { id: "3", rating: 9, content: "lorem ipsum", authot_id: "3", game_id: "3" },
  { id: "4", rating: 9, content: "lorem ipsum", authot_id: "2", game_id: "5" },
  { id: "5", rating: 9, content: "lorem ipsum", authot_id: "3", game_id: "4" },
  { id: "6", rating: 9, content: "lorem ipsum", authot_id: "1", game_id: "1" },
  { id: "7", rating: 9, content: "lorem ipsum", authot_id: "2", game_id: "2" },
];

export default {
  games,
  authors,
  reviews,
};
