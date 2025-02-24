const { DateTime } = require("luxon");
const axios = require("axios");

/**
 * Get the current date and time for a given timezone.
 * @param {string} timezone - The IANA timezone string (e.g., "Asia/Kolkata", "America/New_York").
 * @returns {string} - The current date and time in ISO format.
 */
function getDateTime(timezone = "UTC") {
  return DateTime.now().setZone(timezone).toISO();
}

/**
 * Get the timezone from a location using an external API (e.g., OpenWeather or GeoNames).
 * @param {number} lat - Latitude.
 * @param {number} lon - Longitude.
 * @returns {Promise<string>} - The timezone name.
 */
async function getTimezoneFromLocation(lat, lon) {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/timezone?latitude=${lat}&longitude=${lon}`
    );

    return response.data.timezone || "UTC";
  } catch (error) {
    console.error("Error fetching timezone:", error.message);
    return "UTC";
  }
}

module.exports = { getDateTime, getTimezoneFromLocation };
