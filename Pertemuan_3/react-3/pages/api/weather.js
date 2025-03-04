export default async function handler(req, res) {
    const API_KEY = '96bd872f6d7839d6d36b45cd4f57361f'; // Ganti dengan API key-mu
    const city = 'Bangkok'; // Ubah sesuai kebutuhan
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ message: data.message });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan' });
    }
  }
  