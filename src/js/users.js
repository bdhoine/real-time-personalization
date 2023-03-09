const users = {
    user1: {
        name: "Bert",
        gender: "man",
        age: 70,
        interests: [
            "Artistic",
            "Nature lover",
            "With children",
            "Creative",
            "Whimsical",
            "Bold",
            "Inspirational",
            "Environmentalist",
            "Classical music"
        ],
        mood: [
            "light",
            "peacefull",
            "vibrant",
        ],
        artStyles: [
            "photography",
            "aerial photo",
            "natural lighting"
        ],
        subjects: [
            "pine forest",
        ]
    }, 
    user2: {
        name: "April",
        age: 21,
        gender: "women",
        properties: [
            "Financially-strapped",
            "Resourceful",
            "Thrifty",
            "Budget-conscious",
        ],
        artStyles: [
            "anime",
            "kawaii",
            "realistic"
        ],
        subjects: [
            "Hatsune Miku",
            "dancing",
            "Disco"
        ], 
        background: [
            "vibrant",
            "neon",
            "alleyway"
        ]
    },
    user3: {
        name: "Gert-Jan",
        age: 35,
        gender: "man",
        interests: [
            "Single",
            "Nerd",
            "Stressed",
            "Overworked",
            "Cyberpunk",
            "Star wars",
            "Science Fiction"
        ],
    },
    user4: {
        name: "Betty",
        age: 65,
        gender: "women",
        mood: [
            "1925",
            "vintage",
            "luxury",
            "poster",
            "industrial",
            "gloomy"
        ],
        artStyles: [
            "art deco"
        ],
        subjects: [
            "Factory",
        ]
    }
}

export function getUsers() {
    return users;
}