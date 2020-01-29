const { gql } = require("apollo-server");

const schema = {
  typeDefs: [
    gql`
      type Query {
        hotels: [Hotel!]!
      }
    `,
    gql`
      type Price {
        amount: Float!
        currencyCode: String!
      }
    `,
    gql`
      type Hotel {
        id: ID!
        name: String!
        city: String!
        imageUrl: String!
        price: Price!
      }
    `
  ],
  resolvers: {
    Query: {
      hotels: () =>
        fetch("http://localhost:5000/api/hotels/").then(res => res.json())
    },
    Price: {
      amount: price => price.price,
      currencyCode: price => console.log(price) || price.currencyCode
    },
    Hotel: {
      id: hotel => hotel.id,
      name: hotel => hotel.name,
      city: hotel => hotel.city,
      imageUrl: hotel => hotel.imageUrl,
      price: hotel => hotel.priceInfo
    }
  }
};

module.exports = schema;
