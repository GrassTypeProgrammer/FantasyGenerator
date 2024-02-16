

class Settlement{
    
    constructor(){
        this.initialCensusData = {
            population: getRandomInt(30, 300),
            crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
        }

        this.censusDataPoints = ['population', 'crimeRate'];

        this.censusData = [];
        this.censusData.push(this.initialCensusData);

        for (let index = 1; index < 5; index++) {
            const multiplier = 1 + getRandomArbitrary(-0.2, 0.4);
            this.censusData.push({
                population: Math.trunc( this.censusData[index-1].population * multiplier),
                crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
            })
        }

        this.censusLength = 2
    }
}

function createSettlement(){
    var city = new Settlement();
    for (let index = 0; index < city.censusData.length; index++) {
        const element = city.censusData[index];
        console.log(element.population)
    }

    const table = document.getElementById('table');
    const header = document.createElement('tr');
    
    for (let index = 0; index < city.censusDataPoints.length; index++) {
        const dataPoint = city.censusDataPoints[index];
        const headerCell = document.createElement('th');
        headerCell.innerText = dataPoint;
        header.appendChild(headerCell);
    }
    
    table.appendChild(header);
    
    for (let i = 0; i < city.censusData.length; i++) {
        const dataRow = document.createElement('tr');
        for (let index = 0; index < city.censusDataPoints.length; index++) {
            const dataPoint = city.censusDataPoints[index];
            const dataCell = document.createElement('td');
            dataCell.innerText = city.censusData[i][dataPoint];   
            dataRow.appendChild(dataCell);
        }
        
        table.appendChild(dataRow);
    }

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
