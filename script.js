const citiesData = {
    "America": {
        "USA": { code: "us", cities: [
            { name: 'San Francisco', lat: 37.77, lon: -122.41, emoji: '🌉', youtubeId: 'CXYr04BWvmc', timezone: 'America/Los_Angeles' },
            { name: 'Las Vegas', lat: 36.16, lon: -115.13, emoji: '🎰', youtubeId: '_rmUXOHSf0w', timezone: 'America/Los_Angeles' },
            { name: 'Chicago', lat: 41.87, lon: -87.62, emoji: '🍕', youtubeId: 'O0UGT7AT3aw', timezone: 'America/Chicago' },
            { name: 'New York', lat: 40.71, lon: -74.00, emoji: '🗽', youtubeId: 'z-jYdOIKcTQ', timezone: 'America/New_York' },
            { name: 'Washington', lat: 38.90, lon: -77.03, emoji: '🏛️', youtubeId: 'oDCAAfOSqvA', timezone: 'America/New_York' },
            { name: 'Miami', lat: 25.76, lon: -80.19, emoji: '🌴', youtubeId: 'PeYZZinH1wI', timezone: 'America/New_York' }]}
    },
    "Europe": {
        "Ireland": { code: "ie", cities: [{ name: 'Dublin', lat: 53.34, lon: -6.26, emoji: '☘️', youtubeId: '3nyPER2kzqk', timezone: 'Europe/Dublin' }]},
        "UK": { code: "gb", cities: [{ name: 'London', lat: 51.50, lon: -0.12, emoji: '💂', youtubeId: 'M3EYAY2MftI', timezone: 'Europe/London' }]},
        "France": { code: "fr", cities: [{ name: 'Paris', lat: 48.85, lon: 2.35, emoji: '🗼', youtubeId: 'OzYp4NRZlwQ', timezone: 'Europe/Paris' }]},
        "Estonia": { code: "ee", cities: [{ name: 'Tallinn', lat: 59.43, lon: 24.75, emoji: '🏰', youtubeId: 'VhVgZi2lGv0', timezone: 'Europe/Tallinn' }]}
    },
    "Asia & Pacific": {
        "Israel": { code: "il", cities: [{ name: 'Jerusalem', lat: 31.76, lon: 35.21, emoji: '🕍', youtubeId: '77akujLn4k8', timezone: 'Asia/Jerusalem' }]},
        "Japan": { code: "jp", cities: [{ name: 'Tokyo', lat: 35.68, lon: 139.69, emoji: '🌸', youtubeId: '_k-5U7IeK8g', timezone: 'Asia/Tokyo' }]},
        "Australia": { code: "au", cities: [{ name: 'Sydney', lat: -33.86, lon: 151.20, emoji: '🦘', youtubeId: '5uZa3-RMFos', timezone: 'Australia/Sydney' }]}
    }
}

const clock = document.getElementById('clock')
const day = document.getElementById('day')
const month = document.getElementById('month')
const num = document.getElementById('num')
const year = document.getElementById('year')
const cityName = document.getElementById('city-name')
const timezoneName = document.getElementById('timezone')

const savedCityName = localStorage.getItem('lastCity')
let activeCity = getCityByName(savedCityName) || citiesData["America"]["USA"].cities[0]
let player
let isPlayerReady = false
let timerId
let isCelsius = localStorage.getItem('isCelsius') === 'false' ? false : true
let is24Hour = localStorage.getItem('is24Hour') === 'false' ? false : true

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
                isPlayerReady = true
                event.target.playVideo()
            }
        }
    })
}

function init() {
    setupSidebar()
    renderAccordion()
    updateCityLabels()
    updateDate()
    fetchWeather(activeCity.lat, activeCity.lon)
    timerId = setInterval(updateDate, 1000)
}

function setupSidebar() {
    const menuBtn = document.getElementById('menu-btn')
    const closeBtn = document.getElementById('close-btn')
    const sidebar = document.getElementById('sidebar')
    const overlay = document.getElementById('sidebar-overlay')

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open')
        overlay.classList.add('show')
    })

    closeBtn.addEventListener('click', closeSidebar)
    overlay.addEventListener('click', closeSidebar)
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open')
    document.getElementById('sidebar-overlay').classList.remove('show')
}

function renderAccordion() {
    const container = document.getElementById('accordion-container')
    container.innerHTML = ''

    for (const [region, countries] of Object.entries(citiesData)) {
        const folderBtn = document.createElement('button')
        folderBtn.className = 'accordion-folder'
        folderBtn.textContent = region

        const contentDiv = document.createElement('div')
        contentDiv.className = 'accordion-content'

        for (const [countryName, countryData] of Object.entries(countries)) {
            const countryTitle = document.createElement('div')
            countryTitle.className = 'country-title'
            countryTitle.innerHTML = `<img src="https://flagcdn.com/w20/${countryData.code}.png" alt="flag"> ${countryName}`
            contentDiv.appendChild(countryTitle)

            countryData.cities.forEach(city => {
                const cityBtn = document.createElement('button')
                cityBtn.textContent = `${city.emoji} ${city.name}`
                cityBtn.dataset.cityName = city.name
                
                if (city.name === activeCity.name) {
                    cityBtn.classList.add('active-city')
                    folderBtn.classList.add('active')
                    contentDiv.classList.add('show')
                }

                cityBtn.addEventListener('click', () => {
                    selectCity(city)
                    closeSidebar()
                })
                
                contentDiv.appendChild(cityBtn)
            })
        }

        folderBtn.addEventListener('click', function() {
            this.classList.toggle('active')
            contentDiv.classList.toggle('show')
        })

        container.appendChild(folderBtn)
        container.appendChild(contentDiv)
    }
}

function selectCity(city) {
    activeCity = city
    localStorage.setItem('lastCity', city.name)
    
    updatePlayer(city.youtubeId)
    updateCityLabels()
    updateDate()
    fetchWeather(city.lat, city.lon)

    const oldActiveBtn = document.querySelector('.active-city')
    if (oldActiveBtn) {
        oldActiveBtn.classList.remove('active-city')
    }
    
    const newActiveBtn = document.querySelector(`[data-city-name="${city.name}"]`)
    if (newActiveBtn) {
        newActiveBtn.classList.add('active-city')
    }
}

function getCityByName(cityName) {
    if (!cityName) return null
    
    for (const region in citiesData) {
        for (const country in citiesData[region]) {
            const foundCity = citiesData[region][country].cities.find(c => c.name === cityName)
            if (foundCity) return foundCity
        }
    }
    return null
}

async function fetchWeather(lat, lon) {
    const tempElement = document.getElementById('temperature')
    const iconElement = document.getElementById('weather-icon')
    
    tempElement.textContent = '...' 
    iconElement.textContent = ''

    try {
        const tempUnit = isCelsius ? 'celsius' : 'fahrenheit'
        const unitSymbol = isCelsius ? '°C' : '°F'
        
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=${tempUnit}`)
        if (!response.ok) throw new Error('Помилка API')
        
        const data = await response.json()
        const temp = Math.round(data.current.temperature_2m)
        const code = data.current.weather_code
        
        tempElement.textContent = `${temp}${unitSymbol}`
        iconElement.textContent = getWeatherEmoji(code)
    } catch (error) {
        tempElement.textContent = 'N/A'
    }
}

function updateTogglesUI() {
    document.querySelector('#temp-toggle .toggle-btn[data-val="c"]').classList.toggle('active', isCelsius)
    document.querySelector('#temp-toggle .toggle-btn[data-val="f"]').classList.toggle('active', !isCelsius)
    
    document.querySelector('#time-toggle .toggle-btn[data-val="24"]').classList.toggle('active', is24Hour)
    document.querySelector('#time-toggle .toggle-btn[data-val="12"]').classList.toggle('active', !is24Hour)
}

document.querySelectorAll('#temp-toggle .toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        isCelsius = e.target.dataset.val === 'c'
        localStorage.setItem('isCelsius', isCelsius)
        
        updateTogglesUI()
        fetchWeather(activeCity.lat, activeCity.lon)
    })
})

document.querySelectorAll('#time-toggle .toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        is24Hour = e.target.dataset.val === '24'
        localStorage.setItem('is24Hour', is24Hour)
        updateTogglesUI()
        updateDate()
    })
})
updateTogglesUI()

function updatePlayer(videoId) {
    if (isPlayerReady && player && typeof player.loadVideoById === 'function') {
        player.loadVideoById({ 'videoId': videoId })
    }
}

function getGlobeEmoji(timezone) {
    if (timezone.startsWith('America')) return '🌎'
    if (timezone.startsWith('Asia') || timezone.startsWith('Australia') || timezone.startsWith('Pacific')) return '🌏'
    return '🌍'
}

function getWeatherEmoji(code) {
    if (code === 0) return '☀️'
    if (code > 0 && code < 4) return '⛅'
    if (code >= 45 && code <= 48) return '🌫️'
    if (code >= 51 && code <= 67) return '🌧️'
    if (code >= 71 && code <= 77) return '🌨️'
    if (code >= 95) return '⛈️'
    return '🌤️'
}

function updateCityLabels() {
    const globe = getGlobeEmoji(activeCity.timezone)
    cityName.textContent = `${activeCity.emoji} ${activeCity.name}`
    timezoneName.textContent = `${globe} ${activeCity.timezone}`
}

function updateDate() {
    const date = new Date()
    const time = date.toLocaleTimeString('en-US', {
        timeZone: activeCity.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24Hour
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
