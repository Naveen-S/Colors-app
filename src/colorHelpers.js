import chroma from 'chroma-js';
// {
//     paletteName: "Flat UI Colors Indian",
//     id: "flat-ui-colors-indian",
//     emoji: "🇮🇳",
//     colors: [
//       { name: "OrchidOrange", color: "#FEA47F" },
//       { name: "SpiroDiscoBall", color: "#25CCF7" },
//       { name: "HoneyGlow", color: "#EAB543" },
//       { name: "SweetGarden", color: "#55E6C1" },
//       { name: "FallingStar", color: "#CAD3C8" },
//       { name: "RichGardenia", color: "#F97F51" },
//       { name: "ClearChill", color: "#1B9CFC" },
//       { name: "WhitePepper", color: "#F8EFBA" },
//       { name: "Keppel", color: "#58B19F" },
//       { name: "ShipsOfficer", color: "#2C3A47" },
//       { name: "FieryFuchsia", color: "#B33771" },
//       { name: "BlueBell", color: "#3B3B98" },
//       { name: "GeorgiaPeach", color: "#FD7272" },
//       { name: "OasisStream", color: "#9AECDB" },
//       { name: "BrightUbe", color: "#D6A2E8" },
//       { name: "MagentaPurple", color: "#6D214F" },
//       { name: "EndingNavyBlue", color: "#182C61" },
//       { name: "SasquatchSocks", color: "#FC427B" },
//       { name: "PineGlade", color: "#BDC581" },
//       { name: "HighlighterLavender", color: "#82589F" }
//     ]
//   },
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
export default function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }

    for(let level of levels) {
        newPalette.colors[level] = [];
    }

    for(let color of starterPalette.colors) {
        let scales = generateScale(color.color, 10).reverse();
        for(let i in scales) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scales[i],
                rgb: chroma(scales[i]).css(),
                rgba: chroma(scales[i]).css().replace(/rgb/, 'rgba').replace(/\)/g, ',1.0)')
            });
        }
    }
    console.log('newPalette', newPalette);
    return newPalette;
}
function getRange(hexColor) {
    const end = "#fff";
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function generateScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}