import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import CityContext from './CityContext';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') || '');

  const { city, setCity } = useContext(CityContext);
  const [data, setData] = useState();
  const weekday = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];
  const apiKey = 'e195099bd34a4bb8935081c77d660152';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=appid=596880c04c45fddcc35771edb381f1c7&lang=tr`
      )
        .then((res) => res.data.name)
        .then((data) => setCity(data));
    });
  }, [setCity]);

  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},TR&key=${apiKey}&lang=tr`
    )
      .then((res) => res.data.data)
      .then((item) => setData(item.filter((day, index) => index < 7)))
      .catch((e) => console.log(e));
  }, [city]);

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    localStorage.setItem('city', city);
  }, [isDark, city]);

  const values = {
    weatherData,
    setWeatherData,
    isDark,
    setIsDark,
    data,
    weekday,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
