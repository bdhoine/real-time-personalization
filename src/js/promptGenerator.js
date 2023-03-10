
export function buildImagePrompt(user) {
    var promptParts = [];

    // if (user.subjects) {
    //     promptParts = promptParts.concat(user.subjects);
    // } 
    if (user.favoriteIngredients) {
        promptParts.push("Of");
        promptParts = promptParts.concat(user.favoriteIngredients);
    }

    promptParts.push("with focus point top center");

    if (user.stillOf) {
        promptParts.push("film still of");
        promptParts = promptParts.concat(user.stillOf);
    }

    if (user.game) {
        promptParts.push("in style of videogame");
        promptParts = promptParts.concat(user.game);
    }

    if (user.illustrationStyle) {
        promptParts.push("illustration style of");
        promptParts = promptParts.concat(user.stillOf);
    }
    
    if (user.mood) {
        promptParts.push("with moods");
        promptParts = promptParts.concat(user.mood);
    }

    if (user.artStyles) {
        promptParts.push("with art styles");
        promptParts = promptParts.concat(user.artStyles);
    }

    if (user.background) {
        promptParts.push("with a");
        promptParts = promptParts.concat(user.background);
        promptParts.push("background");
    }

    // if (user.country) {
    //     promptParts.push("in");
    //     promptParts = promptParts.concat(user.country);
    //     // promptParts.push("background");
    // }


    return promptParts.join(" ");
}

export function buildTextPrompt(user) {

    var promptParts = [];

    if (user.subjects) {
        promptParts = promptParts.concat(user.subjects);
    }

    if (user.artStyles) {
        promptParts.push(" in the style of ");
        promptParts = promptParts.concat(user.artStyles);
    }

    return promptParts.join(" ");
}

export function buildtextInstruction(user) {
    const contentType = "article";
    var promptParts = [];

    promptParts.push("Rewrite");
    promptParts.push(contentType);
    promptParts.push("with HTML tags");

    if (user.gender) {
        promptParts.push("for a");
        promptParts.push(user.gender);
    }

    if (user.age) {
        promptParts.push("of");
        promptParts.push(user.age);
    }

    if (user.country) {
        promptParts.push("located in");
        promptParts.push(user.country);
    }

    if (user.interests) {
        promptParts.push("with interests");
        promptParts = promptParts.concat(user.interests);
    }

    promptParts.push("without mentioning the age, country and interests explicitly for the following article");

    return promptParts.join(" ");
}

export function buildProfileImagePrompt(user) {
    var promptParts = [];

    promptParts.push("medium shot portret of");

    if (user.gender) {
        promptParts.push("a");
        promptParts.push(user.gender);
    }

    if (user.age) {
        promptParts.push("who is");
        promptParts.push(user.age);
        promptParts.push("year old");
    }

    if (user.appearance) {
        promptParts.push("who has a");
        promptParts = promptParts.concat(user.appearance);
        promptParts.push("appearance");
    }

    if (user.country) {
        promptParts.push("who is from");
        promptParts.push(user.country);
    }

    promptParts.push("with a shallow depth of field");

    if (user.portretBackground) {
        promptParts.push("and a");
        promptParts = promptParts.concat(user.portretBackground);
    }

    return promptParts.join(" ");
}

export function buildtextGeneration(user) {
    var promptParts = [];

    promptParts.push("Write a recipe with HTML tags for a main couse meal with 3 paragraphs for a");

    if (user.gender) {
        promptParts.push(user.gender);
    }

    if (user.age) {
        promptParts.push("of");
        promptParts.push(user.age);
    }

    if (user.country) {
        promptParts.push("located in");
        promptParts.push(user.country);
    }

    if (user.interests) {
        promptParts.push("with interests");
        promptParts = promptParts.concat(user.interests);
    }

    if (user.favoriteIngredients) {
        promptParts.push("containing ingredients");
        promptParts = promptParts.concat(user.favoriteIngredients);
    }

    promptParts.push("without explicitly mentioning the age and interests");

    return promptParts.join(" ");
}
