import("./loadUser").then((loadUser) => {
    loadUser.loadUserFromUrlParameter().then((user) => {
        console.log(user);

        if (user) {
            import("./promptGenerator").then((promptGenerator) => {
                const prompt = promptGenerator.buildImagePrompt(user)
                console.log(prompt)
                import("./ai").then((ai) => {
                    ai.generateUsingWrapperImage(prompt).then((aiResult) => {
                        console.log(aiResult);

                        if (aiResult) {
                            const imageUrl = aiResult['data']['data'][0]['url'];

                            console.log(imageUrl)
                            const banner = document.getElementById("banner");

                            const bannerDiv = banner.getElementsByClassName("section banner")[0];
                            console.log(bannerDiv);

                            const bannerImage = document.createElement("img");
                            bannerImage.src = imageUrl;

                            bannerDiv.appendChild(bannerImage)
                        }
                    });
                });
            });
        }
    });
});


