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

        const contentType = "article";
        const textPrompt = user["subjects"] + " in the style of " + user["artStyles"].join(" ");
        const textInstruction = "Rewrite " + contentType + " for a " + user["gender"] + "of " + user["age"] + " located in " + user["country"] + " with interests " + user["interests"].join(", ") + " without mentioning the age, country and interests explicitly for the following article";

        console.log(textPrompt);
        console.log(textInstruction);

        import("./ai").then(function (ai) {
            ai.generateUsingWrapperText(textPrompt, textInstruction).then((aiuser) => {
                console.log("user" + aiuser);

                if (aiuser) {
                    const text = aiuser["data"]["choices"][0]["text"];
                    console.log("text: " + text);

                    document.getElementById("hero-text").textContent = text;
                }
            });
        });
    });
});


