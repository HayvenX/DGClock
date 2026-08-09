const citiesData = {
    "Pacific": {
        "USA": { code: "us", cities: [
            { name: 'Honolulu', lat: 21.30, lon: -157.85, emoji: '🌺', youtubeId: 'G1zgkkguCyc', timezone: 'Pacific/Honolulu' }
        ]}
    },
    
    "America": {
        "USA": { code: "us", cities: [
            { name: 'San Francisco', lat: 37.77, lon: -122.41, emoji: '🌉', youtubeId: 'CXYr04BWvmc', timezone: 'America/Los_Angeles' },
            { name: 'Las Vegas', lat: 36.16, lon: -115.13, emoji: '🎰', youtubeId: '_rmUXOHSf0w', timezone: 'America/Los_Angeles' },
            { name: 'Chicago', lat: 41.87, lon: -87.62, emoji: '🍕', youtubeId: 'O0UGT7AT3aw', timezone: 'America/Chicago' },
            { name: 'Miami', lat: 25.76, lon: -80.19, emoji: '🌴', youtubeId: 'PeYZZinH1wI', timezone: 'America/New_York' },
            { name: 'Warrenton', lat: 38.71, lon: -77.79, emoji: '🌳', youtubeId: 'zu-I5jNHIxI', timezone: 'America/New_York' },
            { name: 'Washington', lat: 38.90, lon: -77.03, emoji: '🏛️', youtubeId: 'oDCAAfOSqvA', timezone: 'America/New_York' },
            { name: 'New York', lat: 40.71, lon: -74.00, emoji: '🗽', youtubeId: 'z-jYdOIKcTQ', timezone: 'America/New_York' }
        ]},
        "Canada": { code: "ca", cities: [
            { name: 'Toronto', lat: 43.65, lon: -79.38, emoji: '🍁', youtubeId: 'bbjwotvAvDM', timezone: 'America/Toronto' },
            { name: 'Niagara Falls', lat: 43.08, lon: -79.07, emoji: '🌊', youtubeId: 'qx7gry390YA', timezone: 'America/Toronto' }
        ]},
        "Brazil": { code: "br", cities: [
            { name: 'Rio de Janeiro', lat: -22.90, lon: -43.17, emoji: '🎭', youtubeId: '5iy6o-Se6YE', timezone: 'America/Sao_Paulo' }
        ]}
    },
    "Atlantic": {
        "Iceland": { code: "is", cities: [
            { name: 'Reykjavik', lat: 64.14, lon: -21.92, emoji: '🌋', youtubeId: 'tYgGEC-ESTw', timezone: 'Atlantic/Reykjavik' }
        ]}
    },
    
    "Arctic": {
        "Norway": { code: "no", cities: [
            { name: 'Longyearbyen', lat: 78.22, lon: 15.64, emoji: '🐻‍❄️', youtubeId: '', timezone: 'Arctic/Longyearbyen' }
        ]}
    },
    
    "Europe": {
        "Ireland": { code: "ie", cities: [
            { name: 'Dublin', lat: 53.34, lon: -6.26, emoji: '☘️', youtubeId: '3nyPER2kzqk', timezone: 'Europe/Dublin' }
        ]},
        "UK": { code: "gb", cities: [
            { name: 'London', lat: 51.50, lon: -0.12, emoji: '💂', youtubeId: 'M3EYAY2MftI', timezone: 'Europe/London' }
        ]},
        "France": { code: "fr", cities: [
            { name: 'Paris', lat: 48.85, lon: 2.35, emoji: '🗼', youtubeId: 'OzYp4NRZlwQ', timezone: 'Europe/Paris' }
        ]},
        "Spain": { code: "es", cities: [
            { name: 'Tamariu', lat: 41.91, lon: 3.20, emoji: '🏖️', youtubeId: 'PMhVgTcDd1o', timezone: 'Europe/Madrid' }
        ]},
        "Estonia": { code: "ee", cities: [
            { name: 'Tallinn', lat: 59.43, lon: 24.75, emoji: '🏰', youtubeId: 'VhVgZi2lGv0', timezone: 'Europe/Tallinn' }
        ]}
    },
    
    "Africa": {
        "South Africa": { code: "za", cities: [
            { name: 'Cape Town', lat: -33.92, lon: 18.42, emoji: '🐧', youtubeId: 'sLQHfWnMEkE', timezone: 'Africa/Johannesburg' }
        ]},
        "Botswana": { code: "bw", cities: [
            { name: 'Chobe', lat: -18.30, lon: 25.50, emoji: '🐘', youtubeId: 'iqdRLSdSjWI', timezone: 'Africa/Gaborone' }
        ]}
    },
    
    "Indian": {
        "Maldives": { code: "mv", cities: [
            { name: 'Malé', lat: 4.17, lon: 73.50, emoji: '🏝️', youtubeId: 'neprxg6F3Sc', timezone: 'Indian/Maldives' }
        ]}
    },
    
    "Asia": {
        "Israel": { code: "il", cities: [
            { name: 'Jerusalem', lat: 31.76, lon: 35.21, emoji: '🕍', youtubeId: '77akujLn4k8', timezone: 'Asia/Jerusalem' }
        ]},
        "UAE": { code: "ae", cities: [
            { name: 'Dubai', lat: 25.20, lon: 55.27, emoji: '🏙️', youtubeId: '', timezone: 'Asia/Dubai' }
        ]},
        "South Korea": { code: "kr", cities: [
            { name: 'Seoul', lat: 37.56, lon: 126.97, emoji: '🏯', youtubeId: 'vk5BHoDxXf0', timezone: 'Asia/Seoul' }
        ]},
        "Japan": { code: "jp", cities: [
            { name: 'Tokyo', lat: 35.68, lon: 139.69, emoji: '🌸', youtubeId: '_k-5U7IeK8g', timezone: 'Asia/Tokyo' }
        ]}
    },
    
    "Australia": {
        "Australia": { code: "au", cities: [
            { name: 'Sydney', lat: -33.86, lon: 151.20, emoji: '🦘', youtubeId: '5uZa3-RMFos', timezone: 'Australia/Sydney' }
        ]}
    },
    
    "Antarctica": {
        "Antarctica": { code: "aq", cities: [
            { name: 'McMurdo', lat: -77.84, lon: 166.66, emoji: '❄️', youtubeId: '', timezone: 'Antarctica/McMurdo' }
        ]}
    }
}
