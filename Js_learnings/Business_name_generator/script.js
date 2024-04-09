let btn = document.querySelector('button');
let yourName = document.querySelector('h1');

// Arrays of 100 prefixes and 100 suffixes
let prefixes = [
    "Alpha", "Apex", "Astra", "Blue", "Bright", "City", "Cloud", "Cosmos", "Crystal", "Diamond",
    "Dynamic", "Elite", "Epic", "Eternal", "Evergreen", "Exotic", "Express", "First", "Fresh", "Frontier",
    "Golden", "Grand", "Green", "Harmony", "Infinity", "Jade", "Luminous", "Majestic", "Noble", "Oceanic",
    "Omega", "Optimum", "Pacific", "Paradise", "Peak", "Perfect", "Prestige", "Prime", "Royal", "Silver",
    "Sky", "Spark", "Star", "Summit", "Sunrise", "Supreme", "Titan", "Top", "Ultimate", "Universe",
    "Vibrant", "Vision", "Vital", "Zen", "Absolute", "Adventure", "Alliance", "Alpha", "Arcadia", "Aura",
    "Beacon", "Bloom", "Catalyst", "Celestial", "Champion", "Chronicle", "Continuum", "Crimson", "Divine", "Eclipse",
    "Element", "Elysium", "Epic", "Equinox", "Everest", "Frontier", "Galaxy", "Genesis", "Globe", "Harmony",
    "Horizon", "Illuminate", "Imperial", "Infinite", "Legend", "Liberty", "Majesty", "Meridian", "Mirage", "Mythos",
    "Nebula", "Nova", "Oasis", "Oracle", "Orbit", "Pinnacle", "Prism", "Quest", "Radiant", "Realm",
    "Renew", "Rise", "Spectrum", "Spirit", "Summit", "Terra", "Tranquil", "Unity", "Utopia", "Voyage"
];

let suffixes = [
    "Works", "Solutions", "Tech", "Systems", "Lab", "Co", "Corp", "Group", "Partners", "Consulting",
    "Services", "Studio", "Innovations", "Designs", "Dynamics", "Network", "Enterprises", "Inc", "International", "Industries",
    "Global", "Agency", "Company", "Associates", "Ventures", "World", "Enterprise", "Labs", "Collaborative", "Creators",
    "X", "Square", "Cubed", "Unlimited", "Forge", "Fusion", "Synergy", "Edge", "Nexus", "Hub",
    "Axis", "Wave", "Matrix", "Innovate", "Solutions", "Strategy", "Factory", "Foundry", "Line", "Craft",
    "Forge", "Pulse", "Echo", "Link", "Grid", "Stream", "Ridge", "Spark", "Circuit", "Pulse",
    "Connect", "Union", "Path", "Avenue", "Pipeline", "Route", "Sphere", "Lab", "Lab", "Box",
    "Voyage", "Way", "Pathway", "Arise", "Horizon", "Blueprint", "Sphere", "Pinnacle", "Fusion", "Vortex",
    "Globe", "World", "Loom", "Craft", "Link", "Spark", "Array", "Sphere", "Nest", "Pod",
    "Scope", "Nexus", "Sync", "Craft", "Bloom", "Bolt", "Arc", "Works", "Pulse", "Crew"
];

// Function to select a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

btn.addEventListener('click', () => {
    let userInput = document.querySelector('#shop-name-from-user').value;
    if (!userInput) {
        yourName.textContent = "Please enter your business name";
        return; // Exit the function
    }
    // Select random prefix and suffix
    let prefixName = getRandomItem(prefixes);
    let suffixName = getRandomItem(suffixes);
    
    // Construct the business name
    let businessName = `${prefixName} ${userInput} ${suffixName}`;
    
    // Display the business name
    if(businessName){
        yourName.textContent = businessName;
    }else{
        yourName.textContent = "Enter your business name"
    }
});
