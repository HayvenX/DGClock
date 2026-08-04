const clock = document.getElementById('clock')
const day = document.getElementById('day')
const month = document.getElementById('month')
const num = document.getElementById('num')
const year = document.getElementById('year')
const cityButtons = document.getElementById('city-buttons')
const cityName = document.getElementById('city-name')
const timezoneName = document.getElementById('timezone')

const cities = [
    { name: 'San Francisco', youtubeId: 'CXYr04BWvmc', timezone: 'America/Los_Angeles' },
    { name: 'Las Vegas', youtubeId: '_rmUXOHSf0w', timezone: 'America/Los_Angeles' },
    { name: 'Chicago', youtubeId: 'O0UGT7AT3aw', timezone: 'America/Chicago' },
    { name: 'New York', youtubeId: 'z-jYdOIKcTQ', timezone: 'America/New_York' },
    { name: 'Washington', youtubeId: 'oDCAAfOSqvA', timezone: 'America/New_York' },
    { name: 'Miami', youtubeId: 'PeYZZinH1wI', timezone: 'America/New_York' },
    { name: 'Dublin', youtubeId: '3nyPER2kzqk', timezone: 'Europe/Dublin' },
    { name: 'London', youtubeId: 'M3EYAY2MftI', timezone: 'Europe/London' },
    { name: 'Paris', youtubeId: 'OzYp4NRZlwQ', timezone: 'Europe/Paris' },
    { name: 'Tallinn', youtubeId: 'VhVgZi2lGv0', timezone: 'Europe/Tallinn' },
    { name: 'Jerusalem', youtubeId: '77akujLn4k8', timezone: 'Asia/Jerusalem' },
    { name: 'Tokyo', youtubeId: '_k-5U7IeK8g', timezone: 'Asia/Tokyo' },
    { name: 'Sydney', youtubeId: '5uZa3-RMFos', timezone: 'Australia/Sydney' }
]
let activeCity = cities[0]

let player
let isPlayerReady = false
let timerId

const tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube-player', {
        videoId: activeCity.youtubeId,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'rel': 0,
            'modestbranding': 1,
            'loop': 1,
            'cc_load_policy': 0,
            'iv_load_policy': 3,
            'disablekb': 1,
            'playlist': activeCity.youtubeId 
        },
        events: {
            'onReady': (event) => {
                isPlayerReady = true;
                event.target.playVideo();
            }
        }
    });
};

function init() {
    renderCityButtons()
    updateCityLabels()
    highlightActiveButton()
    updateDate()
    timerId = setInterval(updateDate, 1000)
}

function renderCityButtons() {
    cityButtons.innerHTML = ''
    cities.forEach((city) => {
        const button = document.createElement('button')
        button.type = 'button'
        button.textContent = city.name
        button.addEventListener('click', () => selectCity(city))
        button.dataset.cityName = city.name
        cityButtons.append(button)
    })
}

function selectCity(city) {
    activeCity = city
    updatePlayer(city.youtubeId)
    updateCityLabels()
    highlightActiveButton()
    updateDate()
}

function updatePlayer(videoId) {
    if (isPlayerReady && player && typeof player.loadVideoById === 'function') {
        player.loadVideoById({ 'videoId': videoId });
    }
}

function updateCityLabels() {
    cityName.textContent = activeCity.name
    timezoneName.textContent = activeCity.timezone
}

function highlightActiveButton() {
    const buttons = cityButtons.querySelectorAll('button')
    buttons.forEach((button) => {
        button.classList.toggle('active', button.dataset.cityName === activeCity.name)
    })
}

function updateDate() {
    const date = new Date()
    const time = date.toLocaleTimeString('en-US', {
        timeZone: activeCity.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
    clock.innerText = time

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: activeCity.timezone,
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }).formatToParts(date)

    day.innerText = parts.find((part) => part.type === 'weekday')?.value || ''
    month.innerText = parts.find((part) => part.type === 'month')?.value || ''
    num.innerText = parts.find((part) => part.type === 'day')?.value || ''
    year.innerText = parts.find((part) => part.type === 'year')?.value || ''
}

init()
