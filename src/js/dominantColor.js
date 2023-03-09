import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs";

export function getAverageRGB(imgEl) {
    console.log(imgEl);
    const colorThief = new ColorThief();
    // Make sure image is finished loading
    const dominantColor = colorThief.getColor(imgEl);
    return rgbToHex(dominantColor[0], dominantColor[1], dominantColor[2]);
}

const rgbToHex = (r, g, b) => "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}).join("");