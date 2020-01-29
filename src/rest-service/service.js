const express = require("express");
const hotels = require("./data/hotels");
const reviews = require("./data/reviews");

const app = express();
const port = 5000;

app.get("/api/hotels/", (req, res) => {
  const { city } = req.query;

  const result = hotels.filter(hotel => {
    const formattedCity = hotel.city.toLowerCase();
    const formattedCityQuery = city && city.toLowerCase();

    if (formattedCityQuery && !formattedCity.includes(formattedCityQuery))
      return false;
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

  const review = reviews[id];

  if (review) {
    res.send(review);
    return;
  }

  res.status(404).send("Not found hotel id " + id);
});

app.listen(port, () =>
  console.log(
    "API is available at localhost:5000/api/hotels/ and localhost:5000/api/hotels/:id"
  )
);
