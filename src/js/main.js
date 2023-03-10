import { getArticles } from "./articles";
import("./loadUser").then((loadUser) => {
    loadUser.loadUserFromUrlParameter().then((user) => {
        if (user) {
            const variation = document.querySelector(".variation");
            if (variation) {
                const article = getArticles().article1.content.toString();
                document.getElementById("text").innerHTML = article;
            }

            import("./ai").then((ai) => {
                import("./promptGenerator").then((promptGenerator) => {
                    const imagePrompt = promptGenerator.buildImagePrompt(user);
                    console.log(imagePrompt);
                    ai.generateUsingWrapperImage(imagePrompt).then((aiResult) => {
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
                                    bannerText.innerHTML = "Welcome " + user.name;

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
                                    bannerDiv.classList.toggle("banner--loading");
                                    bannerDiv.classList.toggle(user.id);
                                }

                            });

                            bannerImage.src = googleProxyURL + encodeURIComponent(imageURL);
                        }
                    });

                    const textElement = document.getElementById("text");
                    if (textElement) {
                        const textPrompt = textElement.innerText;
                        const textInstruction = promptGenerator.buildtextInstruction(user);
                        ai.generateUsingWrapperText(textPrompt, textInstruction).then((aiuser) => {
                            if (aiuser) {
                                document.getElementById("text").innerHTML = "";
                                document.getElementById("text").innerHTML = aiuser["data"]["choices"][0]["text"];
                                document.querySelectorAll(".loadingimage").forEach(e => e.remove());

                                if (!variation) {
                                    textElement.classList.toggle("mainblock__section--loading");
                                    document.querySelectorAll(".mainblock__section--loading").forEach(e => e.remove());
                                }
                            }
                        });
                    }

                    const profilePrompt = promptGenerator.buildProfileImagePrompt(user);
                    console.log(profilePrompt);
                    ai.generateUsingWrapperImage(profilePrompt).then((aiResult) => {
                        if (aiResult) {
                            const imageUrl = aiResult["data"]["data"][0]["url"];

                            const profileDiv = document.getElementsByClassName("side")[0];
                            const profileImageDiv = profileDiv.getElementsByClassName("side__image")[0];
                            const profileImage = document.createElement("img");

                            const profileName = document.createElement("h3");
                            profileName.classList.add("side__text");
                            profileName.classList.add("side__text--name");
                            profileName.innerHTML = user.name;

                            const profileAge = document.createElement("p");
                            profileAge.classList.add("side__text");
                            profileAge.classList.add("side__text--age");
                            profileAge.innerHTML = user.age;

                            const profileInterests = document.createElement("ul");
                            profileInterests.classList.add("side__text");
                            profileInterests.classList.add("side__text--interest");

                            user.interests.forEach((interest) => {
                                const profileInterest = document.createElement("li");
                                profileInterest.innerHTML = interest;
                                profileInterests.appendChild(profileInterest);
                            });
                            // document.querySelector(".side__load").remove();

                            profileImage.addEventListener("load", () => {

                                profileDiv.classList.toggle("banner--loading");
                                profileImageDiv.appendChild(profileImage);
                                profileDiv.appendChild(profileName);
                                profileDiv.appendChild(profileAge);
                                profileDiv.appendChild(profileInterests);
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
            color.length < 5 && /./g, '$&$&'
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
