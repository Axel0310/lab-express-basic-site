let treesInfo = null;
let treeIndex = 0;


function displayTreeInfo(info) {
    document.getElementById("tree-label").textContent = info.records[treeIndex].fields.libellefrancais;
    document.getElementById("tree-district").textContent = info.records[treeIndex].fields.arrondissement;
    document.getElementById("tree-circum").textContent = info.records[treeIndex].fields.circonferenceencm + " cm";
    document.getElementById("tree-height").textContent = info.records[treeIndex].fields.hauteurenm + " m";
    document.getElementById("tree-species").textContent = info.records[treeIndex].fields.espece;
    document.getElementById("tree-genre").textContent = info.records[treeIndex].fields.genre;
}

function fetchTreeInfo(){
    return axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&q=&rows=50&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais");
}

function displayRandPic(){
    document.getElementById("carousel-img").style.backgroundImage = "";
    document.getElementById("carousel-img").style.backgroundImage = `url("https://picsum.photos/400/400")`;
}

async function initCarousel() {
    try{
        treesInfo = await fetchTreeInfo();
        treesInfo = treesInfo.data;
        console.log(treesInfo);
        displayTreeInfo(treesInfo);
        displayRandPic();
    } catch(err) {
        console.log(err);
    }
}

function displayNextTree() {
    treeIndex = (treeIndex + 1) % 50;
    displayTreeInfo(treesInfo);
    displayRandPic();
}

function displayPrevTree() {
    treeIndex = (treeIndex + 49) % 50;
    displayTreeInfo(treesInfo);
    displayRandPic();
}

initCarousel();
document.getElementById("btn-next").onclick = displayNextTree;
document.getElementById("btn-prev").onclick = displayPrevTree;