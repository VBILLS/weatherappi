import React, { useContext } from 'react';

import { WeatherContext } from '../../Context/WeatherContext';

import { Card, CardTitle, Container } from 'reactstrap';

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
    <Container className='TimeBased-div m-2'>
      <div className='hourly-title'>
        <h3 className='tb'>
          Hourly:
          <i className={'wi wi-forecast-io-' + iconClass}></i>
        </h3>
      </div>

      <div className='hourly-cards'>
        {hourly.data &&
          hourly.data.map((data) => {
            const formattedTime = formatTime(data.time);
            const icon = data.icon;
            return (
              <Card className='hourly-card' key={data.time}>
                <CardTitle>
                  {formattedTime.getHours()}
                  <strong>
                    <i className={'wi wi-forecast-io-' + icon}></i>
                  </strong>
                </CardTitle>
                Temp: {data.temperature}
                Feels Like: {data.apparentTemperature}
              </Card>
            );
          })}
      </div>
    </Container>
  );
}

export default Hourly;
