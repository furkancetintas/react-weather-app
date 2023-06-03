import React from 'react';
import { useMainContext } from '../../contexts/MainContext';
import styles from '../WeatherCard/WeatherCard.module.css';

function WeatherCard() {
  const { data, weekday, loading } = useMainContext();
  return (
    <div className="row">
      <div className="row flex justify-between mb-4 mx-auto">
        {loading ? (
          <span>Biraz Bekleyiniz...</span>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center p-2 me-2 ${
                styles.cardItem
              } ${index === 0 ? 'border-0 bg-white' : 'border-0'}`}
            >
              <h6>{weekday[new Date(item.datetime).getDay()]}</h6>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
                className={`${styles.weatherIcon}`}
                alt="..."
              />
              <div>
                <span className="me-2 fw-light">
                  {Math.round(item.app_min_temp)}°
                </span>
                <span>{Math.round(item.app_max_temp)}°</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
