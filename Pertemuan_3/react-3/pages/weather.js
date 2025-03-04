import { useEffect, useState } from 'react';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        
        if (response.ok) {
          setWeather(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Gagal mengambil data cuaca');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Informasi Cuaca</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : weather && weather.main ? (
        <div>
          <p><strong>Kota:</strong> {weather.name}</p>
          <p><strong>Suhu:</strong> {weather.main.temp}°C</p>
          <p><strong>Kondisi:</strong> {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Data cuaca tidak tersedia.</p>
      )}
    </div>
  );
};

export default WeatherPage;
