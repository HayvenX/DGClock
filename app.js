// ==========================================
// 1. DOM ELEMENTS & STATE VARIABLES
// ==========================================
const clock = document.getElementById('clock')
const day = document.getElementById('day')
const month = document.getElementById('month')
const num = document.getElementById('num')
const year = document.getElementById('year')
const cityName = document.getElementById('city-name')
const timezoneName = document.getElementById('timezone')
const appOverlay = document.getElementById('app-overlay')
const hideUiBtn = document.getElementById('hide-ui-btn')
const hideHint = document.getElementById('hide-hint')
const searchInput = document.getElementById('city-search')
const searchResults = document.getElementById('search-results')
const muteBtn = document.getElementById('mute-btn')
const volumeSlider = document.getElementById('volume-slider')


const savedCityName = localStorage.getItem('lastCity')
let activeCity = getCityByName(savedCityName) || citiesData["America"]["USA"].cities[0]
let savedVolume = localStorage.getItem('yt-volume') || 50
let allCitiesList = []
let player
let timerId
let isMuted = true
let isUiHidden = false
let isPlayerReady = false
let isCelsius = localStorage.getItem('isCelsius') === 'false' ? false : true
let is24Hour = localStorage.getItem('is24Hour') === 'false' ? false : true

for (const region in citiesData) {
    for (const country in citiesData[region]) {
        citiesData[region][country].cities.forEach(city => {
            allCitiesList.push(city)
        })
    }
}

// ==========================================
// 2. YOUTUBE API & PLAYER SETUP
// ==========================================
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

// ==========================================
// 3. EVENT LISTENERS
// ==========================================

// --- Volume & Mute Controls ---
volumeSlider.value = savedVolume

muteBtn.addEventListener('click', () => {
    if (!isPlayerReady || !player) return

    if (volumeSlider.value == 0) {
            volumeSlider.value = 50
            localStorage.setItem('yt-volume', 50)
        }
    if (isMuted) {
        player.unMute()
        player.setVolume(volumeSlider.value)
        muteBtn.textContent = '🔊'
        isMuted = false
    } else {
        player.mute()
        muteBtn.textContent = '🔇'
        isMuted = true
    }
})

volumeSlider.addEventListener('input', (e) => {
    if (!isPlayerReady || !player) return
    
    const val = parseInt(e.target.value)
    localStorage.setItem('yt-volume', val)
    
    if (val === 0) {
        player.mute()
        player.setVolume(0)
        muteBtn.textContent = '🔇'
        isMuted = true
    } else {
        if (isMuted) {
            player.unMute()
            muteBtn.textContent = '🔊'
            isMuted = false
        }
        player.setVolume(val)
    }
})

// --- Smart Autocomplete Search ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim()
    searchResults.innerHTML = ''

    if (!searchTerm) {
        searchResults.classList.add('hidden')
        return
    }

    const matches = allCitiesList.filter(city => {
        const nameSearch = city.name.toLowerCase().includes(searchTerm)
        const tagMatch = city.tags && city.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        return nameMatch || tagMatch
    })

    if (matches.length > 0) {
        searchResults.classList.remove('hidden')
        
        matches.forEach(city => {
            const div = document.createElement('div')
            div.className = 'search-result-item'
            div.textContent = `${city.emoji} ${city.name}`
            
            div.addEventListener('click', () => {
                selectCity(city)
                closeSidebar()
                searchInput.value = ''
                searchResults.classList.add('hidden')
            })
            
            searchResults.appendChild(div)
        })
    } else {
        searchResults.classList.remove('hidden')
        
        const noResult = document.createElement('div')
        noResult.className = 'search-result-item'
        noResult.style.color = 'rgba(255,255,255,0.5)'
        noResult.style.pointerEvents = 'none'
        noResult.textContent = 'No cities found'
        searchResults.appendChild(noResult)
    }
})

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden')
    }
})

// --- Unit Toggles (Temperature & Time Format) ---
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

// --- Hide UI Mode ---
hideUiBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    closeSidebar()
    
    appOverlay.classList.add('hidden')
    isUiHidden = true

    hideHint.classList.add('show')
    setTimeout(() => {
        hideHint.classList.remove('show')
    }, 3000)
})

document.addEventListener('click', () => {
    if (isUiHidden) {
        appOverlay.classList.remove('hidden')
        hideHint.classList.remove('show')
        isUiHidden = false
    }
})


// ==========================================
// 4. APPLICATION FUNCTIONS
// ==========================================
function init() {
    updateDate()
    setupSidebar()
    renderAccordion()
    updateCityLabels()
    updateTogglesUI()
    fetchWeather(activeCity.lat, activeCity.lon)
    timerId = setInterval(updateDate, 1000)
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

function updatePlayer(videoId) {
    if (isPlayerReady && player && typeof player.loadVideoById === 'function') {
        player.loadVideoById({ 'videoId': videoId })
    }
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

function getGlobeEmoji(timezone) {
    if (timezone.startsWith('America')) return '🌎'
    if (timezone.startsWith('Asia') || timezone.startsWith('Australia') || timezone.startsWith('Pacific') || timezone.startsWith('Indian'))  return '🌏'
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

// ==========================================
// 5. APPLICATION INITIALIZATION
// ==========================================
init()
