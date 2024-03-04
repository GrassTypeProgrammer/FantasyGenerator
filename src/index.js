import {createCity} from './settlement';
import { getRandomInt } from './functions';

function onLoad(){
    createSettlement();
}

window.addEventListener('load', onLoad)
const button = document.getElementById('button');
button.addEventListener('click', onLoad);

const sideBarButtons = document.getElementById('sideBarButtons');
const oneOffDataButton = document.createElement('button');
oneOffDataButton.innerText = 'One Off Data';
oneOffDataButton.addEventListener('click', displayOneOffData);
oneOffDataButton.classList.add('sideBarButton');
sideBarButtons.appendChild(oneOffDataButton);

const censusDataButton = document.createElement('button');
censusDataButton.innerText = 'Population';
censusDataButton.addEventListener('click', displayCensusData);
censusDataButton.classList.add('sideBarButton');
sideBarButtons.appendChild(censusDataButton);

var _city; 
var _table;

function createSettlement(){
    _city = createCity();
    _table = document.getElementById('table');
    displayOneOffData();
    document.getElementById('cityName').innerHTML = _city.oneOffData['name'];
}


function displayOneOffData(){
    clearTable();

    const tableHeader = document.createElement('thead');
    const tableHeaderCell = document.createElement('th');
    tableHeaderCell.innerText = 'One Off Data Points';
    tableHeaderCell.setAttribute('colspan', '100%');
    tableHeader.appendChild(tableHeaderCell);
    _table.appendChild(tableHeader);


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
        _table.appendChild(row);
    }
}


function displayCensusData(){
    clearTable();

    const tableHeader = document.createElement('thead');
    const tableHeaderCell = document.createElement('th');
    tableHeaderCell.innerText = 'census Data Points';
    tableHeaderCell.setAttribute('colspan', '100%');
    tableHeader.appendChild(tableHeaderCell);
    _table.appendChild(tableHeader);

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

        _table.appendChild(dataRow);
    }
}

function clearTable(){
    while(_table.firstChild != undefined){
        _table.removeChild(_table.firstChild);
    }
}





