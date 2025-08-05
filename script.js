const wordList = [
  "the","be","of","and","a","to","in","he","have","it","that","for","they","with",
  "as","not","on","she","at","by","this","we","you","do","but","from","or","which",
  "one","would","all","will","there","say","who","make","when","can","more","if",
  "no","man","out","other","so","what","time","up","go","about","than","into","could",
  "state","only","new","year","some","take","come","these","know","see","use","get",
  "like","then","first","any","work","now","may","such","give","over","think","most",
  "even","find","day","also","after","way","many","must","look","before","great",
  "back","through","long","where","much","should","well","people","down","own","just",
  "because","good","each","those","feel","seem","how","high","too","place","little",
  "world","very","still","nation","hand","old","life","tell","write","become","here",
  "show","house","both","between","need","mean","call","develop","under","last","right",
  "move","thing","general","school","never","same","another","begin","while","number",
  "part","turn","real","leave","might","want","point","form","off","child","few","small",
  "since","against","ask","late","home","interest","large","person","end","open","public",
  "follow","during","present","without","again","hold","govern","around","possible","head",
  "consider","word","program","problem","however","lead","system","set","order","eye",
  "plan","run","keep","face","fact","group","play","stand","increase","early","course",
  "change","help","line"
];
const marineWords = [
  "ocean", "sea", "fish", "shark", "whale", "seal", "dolphin", "coral", "reef", "wave",
  "beach", "tide", "crab", "shell", "starfish", "kelp", "algae", "squid", "octopus", "lobster",
  "shrimp", "plankton", "boat", "ship", "harbor", "bay", "coast", "island", "current", "deep",
  "surface", "anchor", "sail", "deck", "submarine", "scuba", "snorkel", "buoy", "diver", "gill",
  "fins", "flippers", "net", "trawl", "whirlpool", "jetty", "dock", "pier", "harpoon", "mussel",
  "clam", "urchin", "barnacle", "seaweed", "manta", "ray", "eel", "orca", "bluefish", "marlin",
  "salmon", "tuna", "halibut", "bass", "cod", "snapper", "grouper", "herring", "anchovy", "sardine",
  "barracuda", "rockpool", "storm", "tsunami", "surf", "drift", "seabed", "sand", "shellfish", "paddle",
  "kayak", "canoe", "rowboat", "lifeboat", "lifeguard", "lifebuoy", "nautical", "navigation", "compass", "radar",
  "hull", "mast", "rudder", "propeller", "captain", "crew", "marine", "saltwater", "brine", "gulf",
  "strait", "channel", "estuary", "lagoon", "tidal", "swell", "float", "sponge", "driftwood", "buoyancy",
  "albatross", "seagull", "pelican", "penguin", "walrus", "narwhal", "seafoam", "blowhole", "breach", "school",
  "pod", "spawn", "cove", "shoal", "diving", "seashell", "scallop", "fin", "tail", "scales",
  "swim", "wet", "splash", "freedive", "deepsea", "voyage", "explorer", "nets", "trawler", "tanker",
  "cargo", "reef", "seaweed", "kelp", "cowfish", "stingray", "crustacean", "mudflat", "brackish", "parrotfish",
  "anglerfish", "pipefish", "sunfish", "moonfish", "snail", "clam", "urchin", "urchins", "mollusk", "shrimp",
  "eelgrass", "drifter", "flounder", "sardine", "barracuda", "halibut", "bream", "skate", "guppy", "minnow",
  "tarpin", "cobia", "smelt", "sprat", "krill", "silverside", "goby", "wrasse", "blenny", "chub",
  "snapper", "grunt", "porgy", "drum", "jack", "trevally", "mackerel", "amberjack", "tilefish", "triggerfish",
  "damselfish", "butterfish", "rockfish", "catfish", "perch", "sculpin", "scad", "scampi", "flatfish", "swimmer",
  "clinger", "sinker", "floater", "reefer", "navigator", "sailer", "sinker", "gatherer", "dig", "gravel",
  "kelpy", "briny", "foamy", "ripple", "tidal", "surfing", "salty", "oyster", "pilot", "drifter"
];

const textDisplay = document.getElementById("text");
const input = document.getElementById("input");

let wordsLeft;

generateText()

input.addEventListener("input", function(e) {
    
    console.log("letter typed");
});

displayText();




function wordTyped() {
    
}

function displayText() {
    textDisplay.innerHTML = generateText(10, wordList);
}

function generateText(number, words) {
    wordsLeft = words;
    shuffle(wordsLeft);
    //return (wordsLeft.slice(0, number).join().replaceAll(",", " "));
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle
    while (currentIndex != 0) {

        // Pick a remaining element
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}