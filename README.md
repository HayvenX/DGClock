# DG Clock

A web application that displays the current time and date in major global cities against a background of live YouTube streams.

## 🚀 Live Demo
https://hayvenx.github.io/DGClock/

## 👁️ Preview
<img width="718" height="405" alt="image" src="https://github.com/user-attachments/assets/f069c28e-6381-475f-87d1-49e7c9394a56" />


## ✨ Features
* **Timezone Synchronization:** Accurate time for each city handled via `Intl.DateTimeFormat`.
* **Live Background:** Dynamic background video replacement upon switching locations.
* **Responsive Design:** Optimized interface featuring glassmorphism elements for both mobile and desktop screens.

## 🛠️ Tech Stack
* HTML5
* CSS3 (Flexbox, Grid, Clamp, Media Queries)
* Vanilla JavaScript (YouTube Embedded API)

## 🌍 Available Locations
1. New York (`America/New_York`)
2. London (`Europe/London`)
3. Paris (`Europe/Paris`)
4. Tokyo (`Asia/Tokyo`)
5. Sydney (`Australia/Sydney`)

> **⚠️ Note on Backgrounds:** This project relies on live YouTube streams for dynamic backgrounds. If a specific city's background fails to load, the original stream may have ended or gone offline. In such cases, the video ID in the source code will need to be manually updated to a new live stream.

## 💻 Getting Started
To run this project locally:
1. Clone the repository.
2. Open the project folder in your code editor (e.g., VS Code).
3. Start a local server (like the **Live Server** extension in VS Code) to avoid YouTube API CORS policy restrictions.
