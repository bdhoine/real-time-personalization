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
                                    console.log(dominantColor);
                                    console.log(isTooDark(dominantColor));
                                    if(isTooDark(dominantColor)) {
                                        document.querySelector(":root").style.setProperty("--text-color", "#1b1b1b");
                                        document.querySelector(":root").style.setProperty("--bg-color", "#f7f9f9");
                                    }
                                });

                                bannerDiv.appendChild(bannerText);
                                bannerDiv.appendChild(bannerImage);
                                document.querySelector(".loadingimage").remove();
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


function isTooDark(hexcolor){
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    // Return new color if to dark, else return the original
    console.log(yiq)
    return (yiq < 70);
}
