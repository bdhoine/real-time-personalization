import("./loadUser").then((loadUser) => {
    loadUser.loadUserFromUrlParameter().then((user) => {

        if (user) {
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
                                bannerText.textContent = "Welcome " + user.name;

                                import("./dominantColor").then((dominantColorExtractor) => {
                                    const dominantColor =  dominantColorExtractor.getAverageRGB(bannerImage);
    
                                    bannerText.style.color = dominantColor;
    
                                    console.log(dominantColor);
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

                const textPrompt = promptGenerator.buildTextPrompt(user);
                const textInstruction = promptGenerator.buildtextInstruction(user);
                import("./ai").then(function (ai) {
                    ai.generateUsingWrapperText(textPrompt, textInstruction).then((aiuser) => {
                        if (aiuser) {
                            document.getElementById("text").textContent = aiuser["data"]["choices"][0]["text"];
                            document.getElementById("text").classList.toggle("mainblock__section--loading");
                        }
                    });
                });
            });
        }
    });
});


