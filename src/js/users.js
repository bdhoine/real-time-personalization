const users = {
    user1: {
        name: "Zephyr",
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
    }, 
    user2: {
        name: "Avery",
        age: 21,
        gender: "women",
        interests: [
            "Financially-strapped",
            "Resourceful",
            "Thrifty",
            "Budget-conscious",
            "Anime",
            "Nerd",
            "Cyberpunk",
            "Star wars",
            "Science Fiction"
        ],
    },
    user3: {
        name: "Milton",
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
    }
}

export function getUsers() {
    return users;
}