const citiesData = {
    "America": {
        "USA": { code: "us", cities: [
            { name: 'San Francisco', emoji: '🌉', youtubeId: 'CXYr04BWvmc', timezone: 'America/Los_Angeles' },
            { name: 'Las Vegas', emoji: '🎰', youtubeId: '_rmUXOHSf0w', timezone: 'America/Los_Angeles' },
            { name: 'Chicago', emoji: '🍕', youtubeId: 'O0UGT7AT3aw', timezone: 'America/Chicago' },
            { name: 'New York', emoji: '🗽', youtubeId: 'z-jYdOIKcTQ', timezone: 'America/New_York' },
            { name: 'Washington', emoji: '🏛️', youtubeId: 'oDCAAfOSqvA', timezone: 'America/New_York' },
            { name: 'Miami', emoji: '🌴', youtubeId: 'PeYZZinH1wI', timezone: 'America/New_York' }
        ]}
    },
    "Europe": {
        "Ireland": { code: "ie", cities: [{ name: 'Dublin', emoji: '☘️', youtubeId: '3nyPER2kzqk', timezone: 'Europe/Dublin' }]},
        "UK": { code: "gb", cities: [{ name: 'London', emoji: '💂', youtubeId: 'M3EYAY2MftI', timezone: 'Europe/London' }]},
        "France": { code: "fr", cities: [{ name: 'Paris', emoji: '🗼', youtubeId: 'OzYp4NRZlwQ', timezone: 'Europe/Paris' }]},
        "Estonia": { code: "ee", cities: [{ name: 'Tallinn', emoji: '🏰', youtubeId: 'VhVgZi2lGv0', timezone: 'Europe/Tallinn' }]}
    },
    "Asia & Pacific": {
        "Israel": { code: "il", cities: [{ name: 'Jerusalem', emoji: '🕍', youtubeId: '77akujLn4k8', timezone: 'Asia/Jerusalem' }]},
        "Japan": { code: "jp", cities: [{ name: 'Tokyo', emoji: '🌸', youtubeId: '_k-5U7IeK8g', timezone: 'Asia/Tokyo' }]},
        "Australia": { code: "au", cities: [{ name: 'Sydney', emoji: '🦘', youtubeId: '5uZa3-RMFos', timezone: 'Australia/Sydney' }]}
    }
}

const clock = document.getElementById('clock')
const day = document.getElementById('day')
const month = document.getElementById('month')
const num = document.getElementById('num')
const year = document.getElementById('year')
const cityName = document.getElementById('city-name')
const timezoneName = document.getElementById('timezone')

let activeCity = citiesData["America"]["USA"].cities[0]
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
    updatePlayer(city.youtubeId)
    updateCityLabels()
    updateDate()

    const oldActiveBtn = document.querySelector('.active-city')
    if (oldActiveBtn) {
        oldActiveBtn.classList.remove('active-city')
    }
    
    const newActiveBtn = document.querySelector(`[data-city-name="${city.name}"]`)
    if (newActiveBtn) {
        newActiveBtn.classList.add('active-city')
    }
}

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
