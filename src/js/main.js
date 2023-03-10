import { getArticles } from "./articles";
import("./loadUser").then((loadUser) => {
    loadUser.loadUserFromUrlParameter().then((user) => {
        if (user) {
            const variation = document.querySelector(".variation");
            if (variation) {
                const article = getArticles().article1.content.toString();
                document.getElementById("text_variation").innerHTML = article;
            }

            import("./ai").then((ai) => {
                import("./promptGenerator").then((promptGenerator) => {
                    const imagePrompt = promptGenerator.buildImagePrompt(user);
                    console.log(imagePrompt);
                    ai.generateImageUsingWrapperImage(imagePrompt).then((aiResult) => {
                        if (aiResult) {
                            const imageUrl = aiResult["data"]["data"][0]["url"];

                            const bannerDiv = document.getElementsByClassName("section banner banner--loading")[0];

                            const bannerImage = document.createElement("img");
                            bannerImage.crossOrigin = "Anonymous";

                            let imageURL = imageUrl;
                            let googleProxyURL = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

                            bannerImage.addEventListener("load", () => {
                                const bannerText = document.getElementsByClassName("banner__text")[0];
                                if (bannerText !== undefined) {

                                    if (!variation) {
                                        bannerText.innerHTML = "Your daily recipe";
                                    } else {
                                        bannerText.innerHTML = "Welcome " + user.name;
                                    }

                                    import("./dominantColor").then((dominantColorExtractor) => {
                                        const dominantColor = dominantColorExtractor.getAverageRGB(bannerImage);
                                        document.querySelector(":root").style.setProperty("--accent-color", dominantColor);
                                        document.querySelector(".gradient").style.background = "linear-gradient(to right, " + dominantColor + " 35%, #0000 60%)";
                                    });
                                    import("./dominantColor").then((dominantColorExtractor) => {
                                        const dominantColor = dominantColorExtractor.getAverageRGB(bannerImage);
                                        document.querySelector(":root").style.setProperty("--accent-color", dominantColor);
                                        document.querySelector(".gradient").style.background = "linear-gradient(to right, " + dominantColor + " 35%, #0000 60%)";
                                        console.log(dominantColor);
                                        console.log(isTooDark(dominantColor));
                                        if (isTooDark(dominantColor)) {
                                            document.querySelector(":root").style.setProperty("--text-color", "#1b1b1b");
                                            document.querySelector(":root").style.setProperty("--bg-color", "#f7f9f9");
                                        }
                                    });

                                    bannerDiv.appendChild(bannerText);
                                    bannerDiv.appendChild(bannerImage);

                                    bannerDiv.classList.toggle("banner--loading");
                                    bannerDiv.classList.toggle(user.id);

                                    bannerDiv.appendChild(bannerText);
                                    bannerDiv.appendChild(bannerImage);
                                    // document.querySelector(".loadingimage").remove();
                                    bannerDiv.classList.toggle("banner--loading");
                                    bannerDiv.classList.toggle(user.id);
                                }

                            });

                            bannerImage.src = googleProxyURL + encodeURIComponent(imageURL);
                        }
                    });

                    const textElement = document.getElementById("text_variation");
                    if (textElement) {
                        const textPrompt = textElement.innerText;
                        const textInstruction = promptGenerator.buildtextInstruction(user);
                        ai.generateTextEditUsingWrapperText(textPrompt, textInstruction).then((aiuser) => {
                            if (aiuser) {
                                textElement.innerHTML = "";
                                textElement.innerHTML = aiuser["data"]["choices"][0]["text"];
                                document.querySelectorAll(".loadingimage").forEach(e => e.remove());

                                if (!variation) {
                                    textElement.classList.toggle("mainblock__section--loading");
                                    document.querySelectorAll(".mainblock__section--loading").forEach(e => e.remove());
                                }
                            }
                        });
                    }

                    const textGenerationElement = document.getElementById("text_generation");
                    if (textGenerationElement) {
                        const textPrompt = promptGenerator.buildtextGeneration(user);
                        import("./ai").then(function (ai) {
                            ai.generateTextUsingWrapperText(textPrompt).then((aiResult) => {
                                if (aiResult) {
                                    textGenerationElement.innerHTML = "";
                                    textGenerationElement.innerHTML = aiResult["data"]["choices"][0]["text"];
                                }
                            });
                        });
                    }

                    const profilePrompt = promptGenerator.buildProfileImagePrompt(user);
                    console.log(profilePrompt);
                    ai.generateImageUsingWrapperImage(profilePrompt).then((aiResult) => {
                        if (aiResult) {
                            const imageUrl = aiResult["data"]["data"][0]["url"];

                            const profileDiv = document.getElementsByClassName("side")[0];
                            const profileImageDiv = profileDiv.getElementsByClassName("side__image")[0];
                            const mainblock_section = profileDiv.getElementsByClassName("mainblock__section")[0];

                            const profileImage = document.createElement("img");

                            const profileName = document.createElement("h3");
                            profileName.classList.add("side__text");
                            profileName.classList.add("side__text--name");
                            profileName.innerHTML = user.name;

                            const profileAge = document.createElement("p");
                            profileAge.classList.add("side__text");
                            profileAge.classList.add("side__text--age");
                            profileAge.innerHTML = "Age: " + user.age;

                            const profileLocation = document.createElement("p");
                            profileLocation.classList.add("side__text");
                            profileLocation.classList.add("side__text--location");
                            profileLocation.innerHTML = "Location: " + user.country;

                            const profileRelationshipStatus = document.createElement("p");
                            profileRelationshipStatus.classList.add("side__text");
                            profileRelationshipStatus.classList.add("side__text--relationship");
                            profileRelationshipStatus.innerHTML = "Relationship: " + user.relationship;

                            const profileInterests = document.createElement("ul");
                            profileInterests.classList.add("side__text");
                            profileInterests.classList.add("side__text--interest");

                            const profileHobbies = document.createElement("span");
                            profileHobbies.classList.add("side__text");
                            profileHobbies.classList.add("side__text--hobbies");
                            profileHobbies.innerHTML = "Hobbies:";

                            user.interests.forEach((interest) => {
                                const profileInterest = document.createElement("li");
                                profileInterest.innerHTML = interest;
                                profileInterests.appendChild(profileInterest);
                            });

                            profileImage.addEventListener("load", () => {

                                // profileDiv.classList.toggle("banner--loading");
                                profileImageDiv.appendChild(profileImage);
                                mainblock_section.appendChild(profileName);
                                mainblock_section.appendChild(profileAge);
                                mainblock_section.appendChild(profileLocation);
                                mainblock_section.appendChild(profileRelationshipStatus);
                                mainblock_section.appendChild(profileHobbies);
                                mainblock_section.appendChild(profileInterests);

                                Array.prototype.slice.call(profileDiv.getElementsByClassName("line")).forEach((line) => {
                                    line.remove();
                                });
                            });

                            profileImage.src = imageUrl;
                        }
                    });
                });
            });
        }
    });
});

function isTooDark(color) {
    let r;
    let g;
    let b;
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, "$&$&"
        )
        );

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    // HSP equation from http://alienryderflex.com/hsp.html
    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {
        return false;
    }
    else {
        return true;
    }
}
