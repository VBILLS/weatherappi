import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import { Card, CardTitle, CardText, Container } from 'reactstrap';

import './Hourly.styles.scss';

function Hourly() {
  const [weather] = useContext(WeatherContext);
  const iconClass = weather.hourly.icon;
  const hourly = weather.hourly;

  const formatTime = (time) => {
    const strTime = time.toString();
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10);
    const fullTime = new Date(convert);
    return fullTime;
  };

  return (
    <Container fluid className='hourlymain-div m-2'>
      <div className='hourly-title'>
        <h3 className='tb'>Hourly:</h3>
        <div className='hourly-icon-main'>
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </div>
        <p className='hourly-summary-main'>{hourly.summary}</p>
      </div>

      <div className='hourly-cards'>
        {hourly.data &&
          hourly.data.map((data) => {
            const formattedTime = formatTime(data.time);
            const icon = data.icon;
            return (
              <Card
                className='hourly-card'
                key={data.time}
                style={{ width: '3rem', height: '4rem' }}
              >
                <CardTitle>
                  {formattedTime.getHours()} -
                  <strong>
                    <i className={'wi wi-forecast-io-' + icon}></i>
                  </strong>
                </CardTitle>
                <CardText>
                  <i className='fas fa-thermometer-half'></i> {data.temperature}
                  <br />
                  <i className='fas fa-umbrella'></i> {data.precipProbability}
                </CardText>
              </Card>
            );
          })}
      </div>
    </Container>
  );
}

export default Hourly;
