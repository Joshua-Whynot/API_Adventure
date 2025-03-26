/* 
	Tell us about your project below!👇

*/

/* 860a265e6cb9eaeba7fe3d4fced3f949 */

const apiKey = '860a265e6cb9eaeba7fe3d4fced3f949'; // Replace with your actual API key
const location = 'New York'; // Replace with your desired location

async function getWeather() {
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

getWeather();

