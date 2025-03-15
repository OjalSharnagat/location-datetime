# 🌍 location-datetime  
An NPM package to get the current date and time based on location.

[![NPM Version](https://img.shields.io/npm/v/location-datetime.svg)](https://www.npmjs.com/package/location-datetime)
[![License](https://img.shields.io/npm/l/location-datetime)](https://github.com/<your-username>/location-datetime/blob/main/LICENSE)  
   
**location-datetime** is a lightweight Node.js package that provides the current date and time based on a given timezone.  

## 🚀 Installation  

You can install it via npm:  

```sh
npm install location-datetime
```

## 📚 Usage  

### 1️⃣ Get Current Date & Time by Timezone  

```javascript
const { getDateTime } = require("location-datetime");

console.log("Current time in New York:", getDateTime("America/New_York"));
console.log("Current time in London:", getDateTime("Europe/London"));
```

### 2️⃣ Get Timezone from Latitude & Longitude  

```javascript
const { getTimezoneFromLocation } = require("location-datetime");

getTimezoneFromLocation(19.076, 72.8777).then((timezone) => {
  console.log("Timezone for Mumbai:", timezone);
});
```

## 📌 API Reference  

### `getDateTime(timezone: string): string`  
Returns the current date and time for the given IANA timezone.

### `getTimezoneFromLocation(lat: number, lon: number): Promise<string>`  
Returns the timezone name based on latitude and longitude.

## 🛠️ CLI Usage (Optional)  

If you installed it globally, you can use it from the terminal:

```sh
npx location-datetime Asia/Kolkata
```

## 🛠️ Contributing  

Contributions are welcome! Feel free to submit issues and pull requests on [GitHub](https://github.com/OjalSharnagat/location-datetime).

## 🐜 License  

This project is licensed under the MIT License - see the [LICENSE](https://github.com/OjalSharnagat/location-datetime/blob/main/LICENSE) file for details.

