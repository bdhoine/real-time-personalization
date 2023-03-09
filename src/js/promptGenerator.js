
export function buildImagePrompt(user) {
    var promptParts = [];

    if (user.subjects) {
        promptParts = promptParts.concat(user.subjects);
    } 

    promptParts.push("with focus point top center");

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

    promptParts.push("Rewrite ");
    promptParts.push(contentType);

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
