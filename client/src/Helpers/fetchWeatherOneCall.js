export async function getWeatherOneCall(url, lat, lon, apiKey) {
    try {
        const response = await fetch(`${url}${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}