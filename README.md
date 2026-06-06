# DG Clock

A web application that displays the current time and date in major global cities against a background of live YouTube streams.

## Features
* **Timezone Synchronization:** Accurate time for each city handled via `Intl.DateTimeFormat`.
* **Live Background:** Dynamic background video replacement upon switching locations.
* **Responsive Design:** Optimized interface featuring glassmorphism elements for both mobile and desktop screens.

## Tech Stack
* HTML5
* CSS3 (Flexbox, Grid, Clamp, Media Queries)
* Vanilla JavaScript (YouTube Embedded API)

## Project Structure
* `index.html` — Application markup.
* `main.css` — Styling and responsive layout.
* `script.js` — City switching logic and clock updates.

## Available Locations
1. New York (`America/New_York`)
2. Tokyo (`Asia/Tokyo`)
3. Paris (`Europe/Paris`)
4. Sydney (`Australia/Sydney`)
5. London (`Europe/London`)

## Getting Started
Simply open the `index.html` file in any modern web browser.
