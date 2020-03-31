import React from 'react';

function WeatherResponse({ cur }) {
  const iconClass = cur.icon;
  return (
    <div className='WeatherResponse-div'>
      <div className='currently'>
        <h1 className='cur-icon'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </h1>
        <h3 className='cur-summary'>{cur.summary}</h3>
        <p className='cur-temperature'>
          Temperature: {cur.temperature} - Feels Like: {cur.apparentTemperature}
        </p>
        <p className='cur-dew-hum'>
          Dew Point: {cur.dewPoint} - Humidity: {cur.humidity}
        </p>
        <p className='cur-wind'>
          Wind Speed: {cur.windSpeed} - Gust: {cur.windGust}
        </p>
        <p className='cur-uv-ozone'>
          UVIndex: {cur.uvIndex} - Ozone: {cur.ozone}
        </p>
      </div>
    </div>
  );
}

export default WeatherResponse;
