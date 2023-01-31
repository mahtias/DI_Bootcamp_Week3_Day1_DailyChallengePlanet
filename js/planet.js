// Créez un tableau dont la valeur est les planètes du système solaire.
/*
Pour chaque planète du tableau, créez un <div>fichier using createElement. 
Cette div doit avoir une classe nommée "planet".
*/


let thePlanets = ["mercure", "venus", "terre", "mars", "jupiter", "saturne", "uranus", "neptune"]
let colorPlanet = ["blue", "green", "red", "pink", "black", "yellow", "white", "gray"]


// thePlanets.forEach(element =>console.log(element) ) //cette possiblité ou

let i=0

thePlanets.forEach(element => {
    
    let divPlanet = document.createElement("div")
    
    divPlanet.classList.add("planet")
    
    document.body.appendChild(divPlanet)

   document.querySelectorAll(".planet")[i].style.background = colorPlanet[i]

    console.log(element)
    i++;
});
          
// Chaque planète doit avoir une couleur de fond différente. 
// ( Astuce : vous pouvez ajouter une nouvelle classe à chaque planète
// chaque classe contenant une couleur de fond différente).

// document.querySelector("mercure").classList.add("colormercure")

// document.querySelector("venus").classList.add("colorvenus")