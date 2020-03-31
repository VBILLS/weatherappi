import React from 'react';

function WeatherResponse({ cur }) {
  return (
    <div className='WeatherResponse-div'>
      <div className='currently'>
        <h3 className='cur-summary'>{cur.summary}</h3>
        <p className='cur-temperature'>
          Temperature: {cur.temperature} - Feels Like: {cur.apparentTemperature}
        </p>
        <p className='cur-dew-hum'>
          Dew Point: {cur.dewPoint} - Humidity: {cur.humidity}{' '}
        </p>
        <p className='cur-wind'>
          Wind Speed: {cur.windSpeed} - Gust: {cur.windGust}{' '}
        </p>
        <p className='cur-uv-ozone'>
          UVIndex: {cur.uvIndex} - Ozone: {cur.ozone}{' '}
        </p>
        <div className='cur-icon'></div>
      </div>
    </div>
  );
}

export default WeatherResponse;
