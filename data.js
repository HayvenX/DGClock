const citiesData = {
    "Pacific": {
        "USA": { code: "us", cities: [
            { name: 'Kea Lani Resort, Maui', lat: 21.30, lon: -157.85, emoji: '🌺', youtubeId: 'G1zgkkguCyc', timezone: 'Pacific/Honolulu', tags: ['ocean', 'beach', 'usa', 'nature', 'island'] }
        ]},
        "New Zealand": { code: "nz", cities: [
            { name: 'Viaduct Harbour, Auckland', lat: -36.84, lon: 174.76, emoji: '⛵', youtubeId: 'nLCMw_Fh0u0', timezone: 'Pacific/Auckland', tags: ['city', 'ocean', 'bridge', 'new zealand'] }
        ]}
    },
    
    "America": {
        "Canada": { code: "ca", cities: [
            { name: 'Spray Valley, Banff', lat: 51.17, lon: -115.57, emoji: '🌲', youtubeId: 'HghxOQ12dy4', timezone: 'America/Edmonton', tags: ['nature', 'mountains', 'snow', 'canada', 'lake'] },
            { name: 'CN Tower, Toronto', lat: 43.65, lon: -79.38, emoji: '🍁', youtubeId: 'bbjwotvAvDM', timezone: 'America/Toronto', tags: ['city', 'canada'] },
            { name: 'Niagara Falls, Ontario', lat: 43.08, lon: -79.07, emoji: '🌊', youtubeId: 'qx7gry390YA', timezone: 'America/Toronto', tags: ['nature', 'waterfall', 'canada'] }
        ]},
        "USA": { code: "us", cities: [
            { name: 'Brooks Falls, Alaska', lat: 58.55, lon: -155.77, emoji: '🐻', youtubeId: 'J7ZrIDvqlic', timezone: 'America/Anchorage', tags: ['nature', 'bears', 'animals', 'wildlife', 'river', 'alaska', 'usa'] },
            { name: 'Bay Bridge, San Francisco', lat: 37.77, lon: -122.41, emoji: '🌉', youtubeId: 'CXYr04BWvmc', timezone: 'America/Los_Angeles', tags: ['city', 'usa', 'bridge', 'popular'] },
            { name: 'Allegiant Stadium, Las Vegas', lat: 36.16, lon: -115.13, emoji: '🎰', youtubeId: '_rmUXOHSf0w', timezone: 'America/Los_Angeles', tags: ['city', 'usa', 'night', 'neon', 'popular'] },
            { name: 'Jackson Hole Town Square', lat: 43.47, lon: -110.76, emoji: '🦌', youtubeId: '1EiC9bvVGnk', timezone: 'America/Denver', tags: ['nature', 'mountains', 'usa', 'snow', 'cozy'] },
            { name: 'Chicago', lat: 41.87, lon: -87.62, emoji: '🍕', youtubeId: 'O0UGT7AT3aw', timezone: 'America/Chicago', tags: ['city', 'usa'] },
            { name: 'Port of Miami, Miami', lat: 25.76, lon: -80.19, emoji: '🌴', youtubeId: 'xsqwSMuz1oA', timezone: 'America/New_York', tags: ['city', 'usa', 'beach', 'ocean'] },
            { name: 'Washington Monument, Washington D.C.', lat: 38.90, lon: -77.03, emoji: '🏛️', youtubeId: 'oDCAAfOSqvA', timezone: 'America/New_York', tags: ['city', 'usa', 'history'] },
            { name: 'Times Square, New York', lat: 40.71, lon: -74.00, emoji: '🗽', youtubeId: 'z-jYdOIKcTQ', timezone: 'America/New_York', tags: ['city', 'usa', 'popular', 'rain'] }
        ]},
        "Honduras": { code: "hn", cities: [
            { name: 'Utopia Reef', lat: 16.31, lon: -86.59, emoji: '🐠', youtubeId: 'jzx_n25g3kA', timezone: 'America/Tegucigalpa', tags: ['ocean', 'underwater', 'fish', 'nature', 'reef', 'honduras'] }
        ]},
        "Brazil": { code: "br", cities: [
            { name: 'Sugarloaf Mountain, Rio', lat: -22.90, lon: -43.17, emoji: '🎭', youtubeId: '5iy6o-Se6YE', timezone: 'America/Sao_Paulo', tags: ['city', 'brazil', 'beach', 'popular'] }
        ]},
        "Greenland": { code: "gl", cities: [
            { name: 'Ilulissat Icefjord', lat: 69.21, lon: -51.09, emoji: '🧊', youtubeId: 'h8O0UXsL7uk', timezone: 'America/Godthab', tags: ['nature', 'iceberg', 'cold', 'greenland', 'ocean'] }
        ]}
    },
    
    "Atlantic": {
        "Iceland": { code: "is", cities: [
            { name: 'Reykjavik', lat: 64.14, lon: -21.92, emoji: '🧊', youtubeId: 'tYgGEC-ESTw', timezone: 'Atlantic/Reykjavik', tags: ['nature', 'cold', 'snow'] }
        ]},
    },

    // No static streams currently
    // "Arctic": {
    // },
    
    "Europe": {
        "Spain": { code: "es", cities: [
            { name: 'Tamariu, Spain', lat: 41.91, lon: 3.20, emoji: '🏖️', youtubeId: 'PMhVgTcDd1o', timezone: 'Europe/Madrid', tags: ['beach', 'europe', 'spain', 'ocean'] }
        ]},
        "Ireland": { code: "ie", cities: [
            { name: 'Dublin, Ireland', lat: 53.34, lon: -6.26, emoji: '☘️', youtubeId: '3nyPER2kzqk', timezone: 'Europe/Dublin', tags: ['city', 'europe', 'ireland'] }
        ]},
        "UK": { code: "gb", cities: [
            { name: 'Abbey Road, London', lat: 51.50, lon: -0.12, emoji: '💂', youtubeId: 'M3EYAY2MftI', timezone: 'Europe/London', tags: ['city', 'europe', 'uk', 'rain', 'popular'] }
        ]},
        "France": { code: "fr", cities: [
            { name: 'Eiffel Tower, Paris', lat: 48.85, lon: 2.35, emoji: '🗼', youtubeId: 'OzYp4NRZlwQ', timezone: 'Europe/Paris', tags: ['city', 'europe', 'france', 'romantic', 'popular'] }
        ]},
        "Netherlands": { code: "nl", cities: [
            { name: 'Centraal Station, Amsterdam', lat: 52.36, lon: 4.90, emoji: '🚲', youtubeId: '1phWWCgzXgM', timezone: 'Europe/Amsterdam', tags: ['city', 'europe', 'netherlands', 'bikes'] }
        ]},
        "Switzerland": { code: "ch", cities: [
            { name: 'Grimentz', lat: 46.17, lon: 7.57, emoji: '🏘️', youtubeId: 'iCxfe27HpaY', timezone: 'Europe/Zurich', tags: ['village', 'mountains', 'snow', 'switzerland', 'cozy', 'europe'] },
            { name: 'Matterhorn, Zermatt', lat: 46.02, lon: 7.74, emoji: '🏔️', youtubeId: 'JcHYcrO4PRE', timezone: 'Europe/Zurich', tags: ['mountains', 'snow', 'nature', 'cozy', 'winter', 'europe', 'popular'] }
        ]},
        "Italy": { code: "it", cities: [
            { name: 'Valtellina, Livigno', lat: 46.53, lon: 10.13, emoji: '⛷️', youtubeId: 'wiiQxxIQ10w', timezone: 'Europe/Rome', tags: ['mountains', 'snow', 'ski', 'alps', 'italy', 'europe', 'nature'] },
            { name: "St. Peter's Basilica, Rome", lat: 41.90, lon: 12.49, emoji: '🏛️', youtubeId: '89d3tEaqImM', timezone: 'Europe/Rome', tags: ['city', 'europe', 'italy', 'history'] },
            { name: 'Cattolica', lat: 43.96, lon: 12.74, emoji: '🏖️', youtubeId: 'qWlry5rSTBo', timezone: 'Europe/Rome', tags: ['beach', 'ocean', 'italy', 'europe', 'resort'] },
            { name: 'Ponte delle Guglie, Venice', lat: 45.44, lon: 12.31, emoji: '🛶', youtubeId: 'mt7uE-n0YPI', timezone: 'Europe/Rome', tags: ['city', 'europe', 'italy', 'water', 'romantic'] },
            { name: 'Mount Etna, Sicily', lat: 37.75, lon: 14.99, emoji: '🌋', youtubeId: 't4vlFU-ypIw', timezone: 'Europe/Rome', tags: ['volcano', 'nature', 'mountains', 'italy', 'europe'] }
        ]},
        "Vatican": { code: "va", cities: [
            { name: 'Vatican City', lat: 41.90, lon: 12.45, emoji: '⛪', youtubeId: '03pYP2Nmreo', timezone: 'Europe/Vatican', tags: ['city', 'europe', 'history', 'religion', 'vatican'] }
        ]},
        "Norway": { code: "no", cities: [
            { name: 'Hellesylt', lat: 62.08, lon: 6.87, emoji: '⛴️', youtubeId: 'ndhYKVzCIs8', timezone: 'Europe/Oslo', tags: ['nature', 'fjord', 'mountains', 'water', 'norway'] }
        ]},
        "Czechia": { code: "cz", cities: [
            { name: 'Main Station, Prague', lat: 50.07, lon: 14.43, emoji: '🏰', youtubeId: 'tmlE1ct0cYk', timezone: 'Europe/Prague', tags: ['city', 'europe', 'history', 'old'] }
        ]},
        "Finland": { code: "fi", cities: [
            { name: 'Kilpisjärvi', lat: 69.05, lon: 20.80, emoji: '🌌', youtubeId: 'ccTVAhJU5lg', timezone: 'Europe/Helsinki', tags: ['nature', 'aurora', 'northern lights', 'snow', 'finland', 'europe', 'night'] }
        ]},
        "Estonia": { code: "ee", cities: [
            { name: 'Tallinn', lat: 59.43, lon: 24.75, emoji: '🏰', youtubeId: 'VhVgZi2lGv0', timezone: 'Europe/Tallinn', tags: ['city', 'europe', 'estonia', 'old'] }
        ]}
    },
    
    "Africa": {
        "Namibia": { code: "na", cities: [
            { name: 'Namib Desert', lat: -24.72, lon: 15.33, emoji: '🏜️', youtubeId: 'ydYDqZQpim8', timezone: 'Africa/Windhoek', tags: ['nature', 'desert', 'africa', 'sand'] },
            { name: 'Okaukuejo Waterhole, Etosha', lat: -19.16, lon: 15.91, emoji: '🦒', youtubeId: 'AeMUdOPFcXI', timezone: 'Africa/Windhoek', tags: ['nature', 'animals', 'africa', 'wildlife', 'safari', 'water'] }
        ]},
        "South Africa": { code: "za", cities: [
            { name: 'Cape Town', lat: -33.92, lon: 18.42, emoji: '🐧', youtubeId: '0wlyyTrO3rE', timezone: 'Africa/Johannesburg', tags: ['city', 'africa', 'ocean', 'nature'] }
        ]},
        "Botswana": { code: "bw", cities: [
            { name: 'Camp Kuzuma, Chobe', lat: -18.30, lon: 25.50, emoji: '🐘', youtubeId: 'iqdRLSdSjWI', timezone: 'Africa/Gaborone', tags: ['nature', 'animals', 'africa', 'wildlife'] }
        ]},
        "Kenya": { code: "ke", cities: [
            { name: 'Lentorre', lat: -1.98, lon: 36.05, emoji: '🦍', youtubeId: 'bEmFpjwMOvs', timezone: 'Africa/Nairobi', tags: ['nature', 'animals', 'africa', 'wildlife', 'safari', 'kenya'] },
            { name: 'Tsavo National Park', lat: -1.40, lon: 35.00, emoji: '🦁', youtubeId: 'Xe9CPAdyAro', timezone: 'Africa/Nairobi', tags: ['nature', 'animals', 'africa', 'wildlife', 'safari'] }
        ]}
    },

    // No static streams currently
    // "Indian": {
    // },
    
    "Asia": {
        "Israel": { code: "il", cities: [
            { name: 'Western Wall, Jerusalem', lat: 31.76, lon: 35.21, emoji: '🕍', youtubeId: '77akujLn4k8', timezone: 'Asia/Jerusalem', tags: ['city', 'middle east', 'history', 'israel'] }
        ]},
        "Thailand": { code: "th", cities: [
            { name: 'Lamai Beach, Koh Samui', lat: 9.51, lon: 99.93, emoji: '🛕', youtubeId: 'kkVrj2cr9Ko', timezone: 'Asia/Bangkok', tags: ['beach', 'ocean', 'asia', 'thailand', 'island'] }
        ]},
        "Indonesia": { code: "id", cities: [
            { name: 'Ubud, Bali', lat: -8.40, lon: 115.18, emoji: '🐒', youtubeId: 'xuSvwBMhysw', timezone: 'Asia/Makassar', tags: ['island', 'asia', 'indonesia', 'nature', 'ocean', 'beach'] }
        ]},
        "Taiwan": { code: "tw", cities: [
            { name: 'Kaohsiung Coast, Taiwan', lat: 22.73, lon: 120.26, emoji: '🌊', youtubeId: 'sKrqs-5Auqo', timezone: 'Asia/Taipei', tags: ['ocean', 'beach', 'coast', 'taiwan', 'asia', 'relax'] },
            { name: 'Xiangshan, Taipei', lat: 25.03, lon: 121.56, emoji: '🍜', youtubeId: 'z_fY1pj1VBw', timezone: 'Asia/Taipei', tags: ['city', 'asia', 'taiwan', 'neon'] }
        ]},
        "South Korea": { code: "kr", cities: [
            { name: 'Han River, Seoul', lat: 37.56, lon: 126.97, emoji: '🏯', youtubeId: 'vk5BHoDxXf0', timezone: 'Asia/Seoul', tags: ['city', 'asia', 'neon'] }
        ]},
        "Japan": { code: "jp", cities: [
            { name: 'Mount Fuji, Shizuoka', lat: 35.36, lon: 138.72, emoji: '🗻', youtubeId: 'FTucq1b8py8', timezone: 'Asia/Tokyo', tags: ['nature', 'mountains', 'japan', 'asia'] },
            { name: 'Tokyo, Japan', lat: 35.65, lon: 139.70, emoji: '🌸', youtubeId: '_k-5U7IeK8g', timezone: 'Asia/Tokyo', tags: ['city', 'asia', 'japan', 'neon', 'popular'] }
        ]}
    },
    
    "Australia": {
        "Australia": { code: "au", cities: [
            { name: 'Melbourne', lat: -37.81, lon: 144.96, emoji: '☕', youtubeId: 'l_8DrACHpwY', timezone: 'Australia/Melbourne', tags: ['city', 'australia'] },
            { name: 'Sydney Harbour, Sydney', lat: -33.86, lon: 151.20, emoji: '🦘', youtubeId: '5uZa3-RMFos', timezone: 'Australia/Sydney', tags: ['city', 'australia', 'ocean', 'popular'] }
        ]}
    },

    // No static streams currently
    // "Antarctica": {
    // },

    "Etc": {
        "Space": { code: "un", cities: [
            { name: 'ISS, Earth Orbit', lat: 0.00, lon: 0.00, emoji: '🚀', youtubeId: 'fO9e9jnhYK8', timezone: 'Etc/UTC', tags: ['space', 'orbit', 'global', 'popular', 'earth'] }
        ]}
    }
}
