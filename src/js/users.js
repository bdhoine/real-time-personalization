const users = {
    user1: {
        id: "user1",
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
        ],
        country: "Barbados"
    },
    user2: {
        id: "user2",
        name: "April",
        age: 21,
        interests: [
        ],
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
            "cartoony"
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
        ],
        country: "Ohio"
    },
    user3: {
        id: "user3",
        name: "Gert-Jan",
        age: 35,
        gender: "man",
        stillOf: [
            "blade runner"
        ],
        interests: [
            "Single",
            "Nerd",
            "Stressed",
            "Overworked",
            "Star wars",
            "Science Fiction"
        ],
        artStyles: [
            "photo realistic"
        ],
        subjects: [
            "Donald Duck"
        ], 
        illustrationStyle: [
            "sticker illustration",
        ],
        country: "Netherlands"
    },
    user4: {
        id: "user4",
        name: "Betty",
        age: 65,
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
        ],
        country: "Belgium"
    }
};

export function getUsers() {
    return users;
}
