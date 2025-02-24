const { getDateTime, getTimezoneFromLocation } = require("./index");

console.log("Current time in Asia/Kolkata:", getDateTime("Asia/Kolkata"));

getTimezoneFromLocation(19.076, 72.8777).then((timezone) => {
  console.log("Timezone for Mumbai:", timezone);
  console.log("Current time in Mumbai:", getDateTime(timezone));
});
