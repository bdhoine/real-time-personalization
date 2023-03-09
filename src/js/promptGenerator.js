
export function buildImagePrompt(user) {
    var promptParts = [];

    if (user.subjects) {
        console.log(user.subjects)
        promptParts = promptParts.concat(user.subjects);
    } 

    promptParts.push("with focus point top center")

    if (user.mood) {
        promptParts.push("with moods")
        promptParts = promptParts.concat(user.mood)
    }

    if (user.artStyles) {
        promptParts.push("with art styles") 
        promptParts = promptParts.concat(user.artStyles)
    }

    if (user.background) {
        promptParts.push("with a") 
        promptParts = promptParts.concat(user.background)
        promptParts.push("background")
    }


    return promptParts.join(" ");
}