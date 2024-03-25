import axios from 'axios';

const apiKey = "5ac605c960f15b1c584c8c7b99a2c6de";

const fetchData = async (city) => {
  if (!city) {
    console.log("City name is empty.");
    return null;
  }
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
