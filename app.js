const solarSystem = [
    {gravity: 3.71, name: `Mercury`},
    {gravity: 8.87, name: `Venus`},
    {gravity: 9.81, name: `Earth`},
    {gravity: 3.72, name: `Mars`},
    {gravity: 23.1, name: `Jupiter`},
    {gravity: 10.44, name: `Saturn`},
    {gravity: 8.86, name: `Uranus`},
    {gravity: 11.15, name: `Neptune`},
    {gravity: 0.62, name: `Pluto`},
    {gravity: 274, name: `Sun`},
];

function getMassPlanet() {
    
    if (document.querySelector(`.outputBox`)) {
        document.querySelector(`.outputBox`).remove();
    }
    
    
    let objectMass = parseFloat(document.querySelector('#mass').value);
    if (isNaN(objectMass) || objectMass <= 0) {
        alert("Please enter a valid mass.");
        return;
    }
    
    
    
    
    let planet = document.querySelector(`#planets`).value;
    
    
    
    solarSystem.forEach((element) => {
        if (planet == element.name) {
            createElements(calculateMass(element.gravity, objectMass), planet);
        }
    });
    
    
    
    
    function calculateMass (planetMass, objectMass) {
            let mass = objectMass * ( planetMass / (solarSystem[2].gravity) );
            return Number.parseFloat(mass).toFixed(2) + `kg`;
    };
    
    
    
    
    
    function createElements (planetMass, planet) {
        let outputBox = document.createElement(`div`);
        let outputImg = document.createElement(`img`);
        let outputMass = document.createElement(`h3`);
        outputBox.className = `outputBox`;
        outputImg.className = `outputImg`;
        outputMass.className = `outputMass`;
        document.body.appendChild(outputBox);
        document.querySelector(`.outputBox`).appendChild(outputImg);
        document.querySelector(`.outputBox`).appendChild(outputMass);
        document.querySelector(`.outputImg`).setAttribute(`src`, `./public/img/${planet}.png`);
        document.querySelector(`.outputMass`).textContent = planetMass;
    }
}




