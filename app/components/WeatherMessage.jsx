const React = require('react');

const WeatherMessage = ({ temp, location }) => (<h3 className="text-center">It's {temp} &#8451; in {location} </h3>);

module.exports = WeatherMessage;
