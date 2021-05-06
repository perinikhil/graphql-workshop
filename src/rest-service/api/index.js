const express = require("express");
const hotels = require("../data/hotels");
const reviews = require("../data/reviews");

const app = express();
app.use(express.json())

let dynamicReviewsCounter = 0;
let dynamicReviews = {};

app.get("/api/hotels/", (req, res) => {
  const { city } = req.query;

  const result = hotels.filter(hotel => {
    const formattedCity = hotel.city.toLowerCase();
    const formattedCityQuery = city && city.toLowerCase();

    if (formattedCityQuery && !formattedCity.includes(formattedCityQuery)) {
      return false;
    }

    return true;
  });

  res.send(result);
});

app.get("/api/hotels/:id/", (req, res) => {
  const { id } = req.params;

  const hotel = hotels.filter(hotel => String(hotel.id) === id)[0];

  if (hotel) {
    res.send(hotel);
    return;
  }

  res.status(404).send("Not found hotel id " + id);
});

app.get("/api/hotels/:id/reviews", (req, res) => {
  const { id } = req.params;

  const hotelReviews = [
    ...reviews[id],
    ...(dynamicReviews[id] || []),
  ];

  if (hotelReviews) {
    res.send(hotelReviews);
    return;
  }

  res.status(404).send("Not found hotel id " + id);
});

app.post("/api/hotels/:id/reviews", (req, res) => {
  const { id: hotelId } = req.params;
  const { review } = req.body;
  console.log(req.body);
  console.log('POST Reviews', review);
  const reviewId = ++dynamicReviewsCounter;
  dynamicReviews[hotelId] = [
    ...(dynamicReviews[hotelId] || []),
  ];
  const addedReview = {
    id: reviewId,
    ...review,
  };
  dynamicReviews[hotelId].push(addedReview);
  console.log(dynamicReviews[hotelId]);
  console.log(addedReview);
  res.send(addedReview);
});

module.exports = app;