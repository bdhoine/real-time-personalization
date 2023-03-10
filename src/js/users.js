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
        ],
        appearance: [
            "Bald",
            "wrinkly",
            "grey beard"
        ],
        portretBackground: [
            "bookshelf"
        ],
        mood: [
            "vibrant",
            "colorfull"
        ],
        artStyles: [
            "van gogh"
        ],
        subjects: [
            "sunset over the horizon with a bit of a blue ocean",
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
        appearance: [
            "blond hair",
            "Asain"
        ],
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
            "Hatsune Miku with a large cowboy hat",
            "dancing"
        ], 
        background: [
            "vibrant",
            "neon",
            "alleyway"
        ],
        portretBackground: [
            "classroom"
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
        portretBackground: [
            "office"
        ],
        subjects: [
            "Donald Duck"
        ], 
        // illustrationStyle: [
        //     "Vector art",
        // ],
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
            "art deco",
            "black and white"
        ],
        portretBackground: [
            "city skyline"
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
