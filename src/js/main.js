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
                            bannerImage.src = imageUrl;

                            bannerDiv.classList.toggle("banner--loading");
                            bannerDiv.appendChild(bannerImage);
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

