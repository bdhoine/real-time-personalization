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
            "pastel",
        ],
        artStyles: [
            "photography",
            "aerial photo",
            "natural lighting"
        ],
        subjects: [
            "waterfall in a forest",
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
        mood: [
            "vibrant",
            "colorfull",
            "pastel",
        ],
        artStyles: [
            "anime"
        ],
        subjects: [
            "Animegirl",
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
        ],
        artStyles: [
            "art deco"
        ],
        subjects: [
            "",
        ]
    }
}

export function getUsers() {
    return users;
}