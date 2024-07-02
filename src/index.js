import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./data/_data.js";
import { typeDefs } from "./types/schema.js";

// resolvers
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    review(_, args, context) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args, context) {
      return db.games.find((game) => game.id === args.id);
    },
    author(_, args, context) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});
console.log(`Server is running at port ${url}`);
