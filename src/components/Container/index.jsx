import React from 'react';
import { useMainContext } from '../../contexts/MainContext';
import WeatherCard from '../WeatherCard';
import Header from '../Header';
import styles from '../Container/Container.module.css';

const Container = () => {
  const { data } = useMainContext();
  return (
    <div
      className={`container items-center py-2 px-4 mt-5 mx-auto ${styles.weatherContainer}`}
    >
      <Header />
      {data && <WeatherCard />}
    </div>
  );
};

export default Container;
