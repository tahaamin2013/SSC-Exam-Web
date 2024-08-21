import axios from 'axios';

const API_BASE_URL = 'https://neelpatel05.pythonanywhere.com';

export default async function handler(req, res) {
  const { atomicNumber } = req.query;

  try {
    let response;
    if (atomicNumber) {
      response = await axios.get(`${API_BASE_URL}/element/atomicnumber?atomicnumber=${atomicNumber}`);
    } else {
      response = await axios.get(`${API_BASE_URL}/`);
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data from periodic table API' });
  }
}