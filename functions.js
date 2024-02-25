
var _city; 

function createCity(){
    generateOneOffData();
    generateCensusData();

    //#region onOffDataPoints

    function generateOneOffData() {
        oneOffDataPoints = ['name', 'attitudeToOutsiders', 'mainIndustry']
        oneOffData = [];
        oneOffData.name = generateName();
        oneOffData.attitudeToOutsiders = generateAttitudeToOutsiders();
        oneOffData.mainIndustry = generateMainIndustry();
    }

    function generateName(){
        return 'Gravehold';
    }

    function generateAttitudeToOutsiders(){
        return 'Friendly';
    }

    function generateMainIndustry(){
        return 'Mining';
    }

//#endregion


//#region censusData
    function generateCensusData(){
        initialCensusData = {
            year: 0,
            population: getRandomInt(30, 300),
            crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
        }
      

        censusDataPoints = ['year','population', 'crimeRate'];

        censusData = [];
        censusData.push(initialCensusData);

        for (let index = 1; index < 10; index++) {
            const multiplier = 1 + getRandomArbitrary(-0.2, 0.4);
            censusData.push({
                year: index * 5,
                population: Math.trunc( censusData[index-1].population * multiplier),
                crimeRate: getRandomArbitrary(0.1, 5).toFixed(2),
            })
        }
    }
//#endregion

return {
    oneOffDataPoints, 
    oneOffData, 
    censusDataPoints, 
    initialCensusData, 
    censusData}
}



function createSettlement(){
    clearTable();

    _city = createCity();
    const table = document.getElementById('table');

    displayOneOffData(table);
    displayCensusData(table);

    const caption = document.createElement('caption');
    caption.innerText='Fantasy city Census Data';
    table.appendChild(caption);
}


function displayOneOffData(table){
    const tableHeader = document.createElement('thead');
    const tableHeaderCell = document.createElement('th');
    tableHeaderCell.innerText = 'One Off Data Points';
    tableHeaderCell.setAttribute('colspan', '100%');
    tableHeader.appendChild(tableHeaderCell);
    table.appendChild(tableHeader);


    for (let index = 0; index < _city.censusDataPoints.length; index++) {
        const dataPoint = _city.oneOffDataPoints[index];
        const row = document.createElement('tr');

        const headerCell = document.createElement('th');
        headerCell.innerText = dataPoint;
        
        const dataCell = document.createElement('td');
        dataCell.innerText = _city.oneOffData[dataPoint];  
        dataCell.setAttribute('colspan', '50%');
        
        row.appendChild(headerCell);
        row.appendChild(dataCell);
        table.appendChild(row);
    }

    const tableDivider = document.createElement('thead');
    const tableDividerCell = document.createElement('th');
    tableDividerCell.innerText = 'census Data Points';
    tableDividerCell.setAttribute('colspan', '100%');
    tableDivider.appendChild(tableDividerCell);
    table.appendChild(tableDivider);

}


function displayCensusData(table){
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