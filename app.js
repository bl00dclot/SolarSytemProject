function getMassPlanet() {
    let planet;
    let objectMass;
    objectMass = document.querySelector(`#mass`).value;
    planet = document.querySelector(`#planets`).value;
    if (planet == `Mercury`) {
        ;
        createElements(calculateMass(3.71, objectMass), planet);
    }
    //  else if (planet == `Venus`) {
    //     calculateMass();
    //     createElements();
    // }
    function calculateMass (planetMass, objectMass) {
            let mass = objectMass * ( planetMass / 9.81);
            return mass;
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



