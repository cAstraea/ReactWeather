const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },
  handleSearch(location) {
  

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: temp.name,
        temp: temp.main.temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({ isLoading: false });
      alert(errorMessage);
    });
  },
  render() {
    const { isLoading, temp, location } = this.state;

    function renderMessage() {  
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get wether</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
  
});

module.exports = Weather;
