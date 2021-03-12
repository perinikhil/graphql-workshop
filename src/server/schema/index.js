const { gql } = require("apollo-server");

const API_URL = 'http://localhost:5000/api';
let dynamicReviewsCounter = 0;
let dynamicReviews = [];

const schema = {
  typeDefs: [
    gql`
      type Query {
        hotels(city: String = ""): [Hotel!]!
        hotelById(id: ID!): Hotel!
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
        city: String!
        imageUrl: String!
        name: String!
        price: Price!
        reviewScore: Float!
        reviews: [Review!]!
      }
    `,
    gql`
      type Review {
        id: ID!
        message: String!
        guest: Guest!
      }

      input ReviewInput {
        hotelId: ID!
        message: String!
        guest: GuestInput!
      }
    `,
    gql`
      type Guest {
        name: String
      }

      input GuestInput {
        name: String!
      }
    `,
    gql`
      type Mutation {
        addReview(review: ReviewInput): Review!
      }
    `,
  ],
  resolvers: {
    Query: {
      hotels: (_, args) => fetch(`${API_URL}/hotels/?city=${args.city}`)
        .then((res) => res.json()),
      hotelById: (_, args) => fetch(`${API_URL}/hotels/${args.id}`)
        .then((res) => res.json()),
    },
    Price: {
      amount: (price) => price.price,
      currencyCode: (price) => price.currencyCode,
    },
    Hotel: {
      id: (hotel) => hotel.id,
      city: (hotel) => hotel.city,
      imageUrl: (hotel) => hotel.imageUrl,
      name: (hotel) => hotel.name,
      price: (hotel) => hotel.priceInfo,
      reviewScore: (hotel) => hotel.score,
      reviews: (hotel) => fetch(`${API_URL}/hotels/${hotel.id}/reviews`)
        .then((res) => res.json())
        .then((reviews) => [ 
          ...reviews,
          ...dynamicReviews.filter((review) => review.hotelId !== hotel.id),
        ])
    },
    Review: {
      id: (review) => review.id,
      message: (review) => review.message || review.hotelPositive || review.hotelNegative,
      guest: (review) => ({
        name: review.guestName,
        countryCode: review.guestCountryCode,
      }),
    },
    Guest: {
      name: (guest) => guest.name,
    },
    Mutation: {
      addReview: (_, args) => {
        const review = {
          ...args.review,
          id: ++dynamicReviewsCounter,
        };
        console.log(args);
        dynamicReviews.push(review);
        return review;
      },
    },
  },
};

module.exports = schema;
