
var _city; 

class Settlement{
    
    constructor(){
        this.initialCensusData = {
            year: 0,
            population: getRandomInt(30, 300),
            crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
        }

        this.censusDataPoints = ['year','population', 'crimeRate'];

        this.censusData = [];
        this.censusData.push(this.initialCensusData);

        for (let index = 1; index < 10; index++) {
            const multiplier = 1 + getRandomArbitrary(-0.2, 0.4);
            this.censusData.push({
                year: index * 5,
                population: Math.trunc( this.censusData[index-1].population * multiplier),
                crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
            })
        }

        this.censusLength = 2
    }
}


function createSettlement(){
    clearTable();

    _city = new Settlement();
    const table = document.getElementById('table');
    const header = document.createElement('tr');
    
    for (let index = 0; index < _city.censusDataPoints.length; index++) {
        const dataPoint = _city.censusDataPoints[index];
        const headerCell = document.createElement('th');
        headerCell.innerText = dataPoint;
        header.appendChild(headerCell);
    }
    
    table.appendChild(header);
    
    for (let i = 0; i < _city.censusData.length; i++) {
        const dataRow = document.createElement('tr');
        for (let index = 0; index < _city.censusDataPoints.length; index++) {
            const dataPoint = _city.censusDataPoints[index];
            const dataCell = document.createElement('td');
            dataCell.innerText = _city.censusData[i][dataPoint];  
            
            const modifier = getRandomInt(0, 2);
            if(modifier != 0){
                dataCell.classList.add('padding' + modifier);
            }
            
            dataRow.appendChild(dataCell);
        }
        
        table.appendChild(dataRow);
    }
    
    const caption = document.createElement('caption');
    caption.innerText='Fantasy _city Census Data';
    table.appendChild(caption);
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

function clearTable(){
    const table = document.getElementById('table');
    
    while(table.firstChild != undefined){
        table.removeChild(table.firstChild);
    }
}