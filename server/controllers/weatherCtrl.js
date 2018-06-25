const axios = require("axios");
const { weatherApiKey } = require("../../weatherKey");
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";

const getWeather = (req, res) => {
  console.log("hit");
  axios
    .get(`${baseUrl}zip=66221&units=imperial&appid=${weatherApiKey}`)
    .then(response => {
      //   console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};

module.exports = {
  getWeather
};
