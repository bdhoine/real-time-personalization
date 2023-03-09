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
                            document.getElementById("hero-image").src = imageUrl;
                        }
                    });
                });
            });
        }
    });
});


