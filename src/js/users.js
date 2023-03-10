const users = {
    user1: {
        id: "user1",
        name: "Bert",
        gender: "man",
        age: 70,
        relationship: "Divorced",
        favoriteIngredients: [
            "tuna",
        ],
        interests: [
            "Artistic",
            "Nature lover",
            "Creative",
            "Cooking"
        ],
        appearance: [
            "wrinkly",
            "grey beard",
            "Fisherman hat",
            "Fishing rod"
        ],
        portretBackground: [
            "a boat on the ocean"
        ],
        mood: [
            "vibrant",
            "colorfull"
        ],
        artStyles: [
            "van gogh"
        ],
        background: [
            "blue ocean",
        ],
        subjects: [
            "sunset over the horizon with a bit of a blue ocean",
        ],
        country: "Hawaii"
    },
    user2: {
        id: "user2",
        name: "April",
        age: 21,
        interests: [
            "Anime",
            "Cosplay",
            "Video games"
        ],
        favoriteIngredients: [
            "Rice",
            "Samon",
            "Nori"
        ],
        // game: [
        //     "Borderlands"
        // ],
        gender: "Women",
        relationship: "Engaged",
        appearance: [
            "'cyan hair'",
            "asain",
            "cosplay"
        ],
        properties: [
            "Financially-strapped",
            "Resourceful",
            "Thrifty",
            "Budget-conscious",
        ],
        artStyles: [
            "cartoon",
            "kawaii",
            "party"
        ],
        mood: [
            "excited"
        ],
        background: [
            "pastel color",
        ],
        portretBackground: [
            "classroom"
        ],
        country: "New York"
    },
    user3: {
        id: "user3",
        name: "Gert-Jan",
        age: 30,
        gender: "man",
        appearance: [
            "Hipster",
            "Long beard",
            "Handsome",
            "Ginger hair",
            "Tall",
            "Black frame glasses"
        ],
        favoriteIngredients: [
            "Cocktail",
            "Lemon",
        ],
        relationship: "Single",
        interests: [
            "Nerd",
            "Blade runner",
            "Science Fiction",
            "Mixologist"
        ],
        properties: [
            "Stressed",
            "Overworked",
        ],
        artStyles: [
            "vaporwave"
        ],
        portretBackground: [
            "Busy Cafe"
        ],
        background: [
            "Neon sign",
            "Cyan stripes",
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
        relationship: "Married",
        interests: [
            "Architecture",
            "History",
            "Urbanist"
        ],
        favoriteIngredients: [
            "Shrimp",
        ],
        gender: "women",
        mood: [
            // "vintage",
            "poster",
        ],
        artStyles: [
            "blueprint",
        ],
        portretBackground: [
            "city skyline at night"
        ],
        country: "Belgium"
    }
};

export function getUsers() {
    return users;
}
