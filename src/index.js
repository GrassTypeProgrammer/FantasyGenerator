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

    document.getElementById('cityName').innerHTML = _city.oneOffData['name'];
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
    for (let i = 0; i < _city.censusDataPoints.length; i++) {
        const dataPoint = _city.censusDataPoints[i];
        const dataRow = document.createElement('tr');
        const firstChild = document.createElement(i == 0? 'th' : 'td');
        firstChild.innerText = dataPoint;
        dataRow.appendChild(firstChild);

        for (let j = 0; j < _city.censusData.length; j++) {
            const cell = document.createElement(i == 0? 'th' : 'td');
            cell.innerText = _city.censusData[j][dataPoint]
            dataRow.appendChild(cell);
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





