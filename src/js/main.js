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
                                    document.querySelector(".loadingimage").remove();
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


function isTooDark(hexcolor) {
    var r = parseInt(hexcolor.substr(1, 2), 16);
    var g = parseInt(hexcolor.substr(3, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    // Return new color if to dark, else return the original
    console.log(yiq)
    return (yiq < 70);
}
