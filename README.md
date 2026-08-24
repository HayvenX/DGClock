# 🕑 DG Clock | Live Cams & Global Clock
A premium web dashboard that blends real-time global timekeeping with live YouTube camera streams from over 50 breathtaking locations around the world.

## 🚀 Live Demo
https://hayvenx.github.io/DGClock/

## 👁️ Preview
<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/105618c5-e44c-4bc3-920f-3b7840598d8a" />

<img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/54307743-be39-4210-ae18-552b3c588109" />

## ✨ Key Features
* **Dynamic Video Backgrounds:** Immersive, live YouTube streams from curated global locations (metropolises, wildlife, space, and nature).
* **Smart Autocomplete Search:** Instantly find locations by city name or contextual tags (e.g., "aurora", "ocean", "bears", "neon").
* **Real-Time Weather:** Live temperature and weather condition emojis powered by the Open-Meteo API.
* **Precision Timekeeping:** Accurate local time and date rendering based on strict IANA Timezone classifications.
* **Customizable UI:** 
  * Toggle between 12h/24h time formats.
  * Switch between Celsius (°C) and Fahrenheit (°F).
  * Video volume controls and mute toggling.
  * "Hide UI" cinematic mode for an uninterrupted view.
* **Glassmorphism Design:** A modern, responsive, and frosted-glass interface optimized for both desktop and mobile devices.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Data & APIs:** 
  * [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference) (Dynamic background rendering)
  * [Open-Meteo API](https://open-meteo.com/) (Live weather data fetching)

## 📁 Architecture & Database
The application's location database (`data.js`) is modularly decoupled from the main logic and strictly organized by **IANA Timezone Areas**, sorted geographically from West to East:
`Pacific/` ➡️ `America/` ➡️ `Atlantic/` ➡️ `Europe/` ➡️ `Africa/` ➡️ `Indian/` ➡️ `Asia/` ➡️ `Australia/`

## 💻 Local Setup
To run this project locally:
1. Clone the repository.
2. Open the project folder in your code editor (e.g., VS Code).
3. Launch using a local server (like the **Live Server** extension) to bypass CORS policies for the APIs.

> **⚠️ Disclaimer regarding Live Streams:** This project aggregates official live public webcams via YouTube. If a specific background displays an error (e.g., "Video unavailable" or Playback ID error), the stream's author may have restarted the broadcast (changing the video ID), or local network restrictions (like strict AdBlockers / Secure DNS) might be blocking the video payload.
