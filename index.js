import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", { adjective: randomAdj, noun: randomNoun });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  "abandoned",
  "adventurous",
  "affectionate",
  "ambitious",
  "beautiful",
  "brilliant",
  "bold",
  "calm",
  "carefree",
  "cheerful",
  "creative",
  "dynamic",
  "eclectic",
  "energetic",
  "enthusiastic",
  "exuberant",
  "faithful",
  "friendly",
  "funny",
  "generous",
  "gracious",
  "happy",
  "innovative",
  "inspiring",
  "intelligent",
  "joyful",
  "kind",
  "lovable",
  "luminous",
  "magnificent",
  "mature",
  "motivated",
  "optimistic",
  "outgoing",
  "passionate",
  "positive",
  "powerful",
  "radiant",
  "reliable",
  "resilient",
  "sincere",
  "spirited",
  "strong",
  "successful",
  "supportive",
  "thoughtful",
  "vibrant",
  "visionary",
  "welcoming",
  "wholesome",
  "wise",
  "zesty",
  "zealous",
  "admirable",
  "bright",
  "calm",
  "clear",
  "composed",
  "delightful",
  "diligent",
  "elegant",
  "energetic",
  "friendly",
  "graceful",
  "impressive",
  "jovial",
  "keen",
  "light-hearted",
  "logical",
  "optimistic",
  "polished",
  "resourceful",
  "sophisticated",
  "steadfast",
  "sweet",
  "unconventional",
  "vivid",
  "wonderful",
  "youthful",
  "zealful",
];

const noun = [
  "aardvark",
  "accountant",
  "adventure",
  "affair",
  "airplane",
  "ambulance",
  "analyst",
  "apartment",
  "apparel",
  "apple",
  "architect",
  "armadillo",
  "art",
  "auction",
  "author",
  "aviator",
  "balance",
  "bamboo",
  "banker",
  "bat",
  "beacon",
  "beetle",
  "benefit",
  "bicycle",
  "biology",
  "bistro",
  "boat",
  "bond",
  "botany",
  "brainstorm",
  "brand",
  "bridge",
  "business",
  "cable",
  "camera",
  "capital",
  "car",
  "celebration",
  "charity",
  "chef",
  "chemistry",
  "cloud",
  "company",
  "concert",
  "conference",
  "conqueror",
  "corporation",
  "creator",
  "customer",
  "data",
  "decoration",
  "destination",
  "developer",
  "diamond",
  "director",
  "dreamer",
  "eagle",
  "earth",
  "economist",
  "effort",
  "engineer",
  "event",
  "explorer",
  "fashion",
  "film",
  "fishing",
  "flame",
  "flight",
  "founder",
  "freedom",
  "friendship",
  "future",
  "gallery",
  "gathering",
  "genius",
  "glove",
  "goal",
  "growth",
  "harmony",
  "healer",
  "hero",
  "honor",
  "hotel",
  "humor",
  "ideal",
  "image",
  "innovation",
  "inspiration",
  "internet",
  "journey",
  "judge",
  "kingdom",
  "leader",
  "legacy",
  "library",
  "lifestyle",
  "location",
  "logo",
  "lounge",
  "machine",
  "magazine",
  "market",
  "mansion",
  "mentor",
  "mission",
  "movement",
  "network",
  "notion",
  "oasis",
  "observer",
  "office",
  "origin",
  "organization",
  "path",
  "philosophy",
  "planet",
  "platform",
  "progress",
  "project",
  "prosperity",
  "revolution",
  "resource",
  "rocket",
  "school",
  "search",
  "service",
  "solution",
  "space",
  "specialist",
  "sport",
  "star",
  "station",
  "store",
  "success",
  "sustainability",
  "system",
  "technology",
  "universe",
  "venture",
  "vision",
  "world",
  "workshop",
  "zone",
  "zenith",
];
