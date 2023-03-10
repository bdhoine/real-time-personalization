import { getArticles } from "./articles";
import("./loadUser").then((loadUser) => {
    loadUser.loadUserFromUrlParameter().then((user) => {
        if (user) {
            const variation = document.querySelector(".variation");
            if(variation) {
                const article = getArticles().article1.content.toString();
                document.getElementById("text").innerHTML = article;
            }

            import("./promptGenerator").then((promptGenerator) => {
                const prompt = promptGenerator.buildImagePrompt(user);
                import("./ai").then((ai) => {
                    ai.generateUsingWrapperImage(prompt).then((aiResult) => {

                        if (aiResult) {
                            const imageUrl = aiResult["data"]["data"][0]["url"];

                            const bannerDiv = document.getElementsByClassName("section banner banner--loading")[0];

                            const bannerImage = document.createElement("img");

                            let imageURL = imageUrl;
                            let googleProxyURL = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";
                            
                            bannerImage.addEventListener("load", () => {
                                const bannerText = document.getElementsByClassName("banner__text")[0];
                                bannerText.innerHTML = "Welcome " + user.name;

                                import("./dominantColor").then((dominantColorExtractor) => {
                                    const dominantColor =  dominantColorExtractor.getAverageRGB(bannerImage);
                                    document.querySelector(":root").style.setProperty("--accent-color", dominantColor);
                                    document.querySelector(".gradient").style.background = "linear-gradient(to right, "+ dominantColor+ " 35%, #0000 60%)";
                                });

                                bannerDiv.appendChild(bannerText);
                                bannerDiv.appendChild(bannerImage);

                                bannerDiv.classList.toggle("banner--loading");
                                bannerDiv.classList.toggle(user.id);
                            });

                            bannerImage.crossOrigin = "Anonymous";
                            bannerImage.src = googleProxyURL + encodeURIComponent(imageURL);
                        }
                    });
                });

                const textPrompt = document.getElementById("text").innerText;
                const textInstruction = promptGenerator.buildtextInstruction(user);
                import("./ai").then(function (ai) {
                    ai.generateUsingWrapperText(textPrompt, textInstruction).then((aiuser) => {
                        if (aiuser) {
                            document.getElementById("text").innerHTML = "";
                            document.getElementById("text").innerHTML = aiuser["data"]["choices"][0]["text"];
                            if(!variation) {
                                document.getElementById("text").classList.toggle("mainblock__section--loading");
                                document.querySelectorAll(".mainblock__section--loading").forEach(e => e.remove());
                            }
                        }
                    });
                });
            });
        }
    });
});


