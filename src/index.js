import {createCity} from './settlement';
import { getRandomInt } from './functions';

function onLoad(){
    createSettlement();
}

window.addEventListener('load', onLoad)

const button = document.getElementById('button');
button.addEventListener('click', onLoad);




var _city; 



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

function clearTable(){
    const table = document.getElementById('table');
    
    while(table.firstChild != undefined){
        table.removeChild(table.firstChild);
    }
}





