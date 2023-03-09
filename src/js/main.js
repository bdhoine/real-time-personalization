import("./loadUser").then(function (loadUser) {
    loadUser.loadUserFromUrlParameter().then((result) => { 
        
        console.log(result);
        
        if (result) {      
            const prompt = result['subjects'] + " in the style of " + result['artStyles'].join(" ")

            console.log(prompt)

            import("./ai").then(function (ai) {
                ai.generateUsingWrapperImage(prompt).then((aiResult) => { 
                    console.log(aiResult);

                    if (aiResult) {
                        const imageUrl = aiResult['data']['data'][0]['b64_json'];
                        document.getElementById("hero-image").src = "data:image/png;base64, " + imageUrl;
                    }
                });
            })
        }
    });
})


