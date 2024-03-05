/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomArbitrary: () => (/* binding */ getRandomArbitrary),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)\n/* harmony export */ });\n\n\nfunction getRandomArbitrary(min, max) {\n    return Math.random() * (max - min) + min;\n}\n\nfunction getRandomInt(min, max) {\n    const minCeiled = Math.ceil(min);\n    const maxFloored = Math.floor(max);\n    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive\n  }\n\n//# sourceURL=webpack://fantasygenerator/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settlement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlement */ \"./src/settlement.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\nfunction onLoad(){\n    createSettlement();\n}\n\nwindow.addEventListener('load', onLoad)\nconst button = document.getElementById('button');\nbutton.addEventListener('click', onLoad);\n\nconst sideBarButtons = document.getElementById('sideBarButtons');\nconst oneOffDataButton = document.createElement('button');\noneOffDataButton.innerText = 'One Off Data';\noneOffDataButton.addEventListener('click', displayOneOffData);\noneOffDataButton.classList.add('sideBarButton');\nsideBarButtons.appendChild(oneOffDataButton);\n\nconst censusDataButton = document.createElement('button');\ncensusDataButton.innerText = 'Population';\ncensusDataButton.addEventListener('click', displayCensusData);\ncensusDataButton.classList.add('sideBarButton');\nsideBarButtons.appendChild(censusDataButton);\n\nvar _city; \nvar _table;\n\nfunction createSettlement(){\n    _city = (0,_settlement__WEBPACK_IMPORTED_MODULE_0__.createCity)();\n    _table = document.getElementById('table');\n    displayOneOffData();\n    document.getElementById('cityName').innerHTML = _city.oneOffData['name'];\n}\n\n\nfunction displayOneOffData(){\n    clearTable();\n\n    const tableHeader = document.createElement('thead');\n    const tableHeaderCell = document.createElement('th');\n    tableHeaderCell.innerText = 'One Off Data Points';\n    tableHeaderCell.setAttribute('colspan', '100%');\n    tableHeader.appendChild(tableHeaderCell);\n    _table.appendChild(tableHeader);\n\n    for (let index = 0; index < _city.oneOffDataPoints.length; index++) {\n        const dataPoint = _city.oneOffDataPoints[index];\n        const row = document.createElement('tr');\n\n        const headerCell = document.createElement('th');\n        headerCell.innerText = dataPoint;\n        \n        const dataCell = document.createElement('td');\n        dataCell.innerText = _city.oneOffData[dataPoint];  \n        dataCell.setAttribute('colspan', '50%');\n        \n        row.appendChild(headerCell);\n        row.appendChild(dataCell);\n        _table.appendChild(row);\n    }\n}\n\n\nfunction displayCensusData(){\n    clearTable();\n\n    const tableHeader = document.createElement('thead');\n    const tableHeaderCell = document.createElement('th');\n    tableHeaderCell.innerText = 'census Data Points';\n    tableHeaderCell.setAttribute('colspan', '100%');\n    tableHeader.appendChild(tableHeaderCell);\n    _table.appendChild(tableHeader);\n\n    for (let i = 0; i < _city.censusDataPoints.length; i++) {\n        const dataPoint = _city.censusDataPoints[i];\n        const dataRow = document.createElement('tr');\n        const firstChild = document.createElement(i == 0? 'th' : 'td');\n        firstChild.innerText = dataPoint;\n        dataRow.appendChild(firstChild);\n\n        for (let j = 0; j < _city.censusData.years.length; j++) {\n            const cell = document.createElement(i == 0? 'th' : 'td');\n            cell.innerText = _city.censusData[dataPoint][j];\n            dataRow.appendChild(cell);\n        }\n\n        _table.appendChild(dataRow);\n    }\n}\n\nfunction clearTable(){\n    while(_table.firstChild != undefined){\n        _table.removeChild(_table.firstChild);\n    }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://fantasygenerator/./src/index.js?");

/***/ }),

/***/ "./src/settlement.js":
/*!***************************!*\
  !*** ./src/settlement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCity: () => (/* binding */ createCity)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\n\nconst nouns = ['mountain', 'river', 'lake', 'forest', 'shore', 'sea', 'beach'];\nconst adjectives = ['dark', 'lost', 'golden', 'windy', 'cold', 'scorching'];\nconst attitudes = ['friendly', 'welcoming', 'hostile', 'indifferent'];\nconst industries = ['mining', 'farming', 'fishing', 'blacksmithing', 'herding', 'hunting', 'gathering', 'mercinaries'];\n/*\n    one off:\n    name\n    size (area)\n    \n\n    census:\n    population\n    births\n    deaths\n    immigration rate\n    crime rate\n    unemployment rate\n    median wealth\n    density\n\n*/\n\nfunction createCity(){\n    generateOneOffData();\n    generateCensusData();\n\n    var oneOffDataPoints;\n    var oneOffData;\n    var censusDataPoints;\n    var censusData;\n    var initialCensusData;\n    \n\n    //#region onOffDataPoints\n   \n    function generateOneOffData() {\n        oneOffDataPoints = ['name', 'area', 'attitudeToOutsiders', 'mainIndustry']\n        oneOffData = [];\n        oneOffData.name = generateName();\n        oneOffData.area = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, 30) + 'km squared';\n        oneOffData.attitudeToOutsiders = generateAttitudeToOutsiders();\n        oneOffData.mainIndustry = generateMainIndustry();\n    }\n\n    function generateName(){\n        return adjectives[(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, adjectives.length)] + nouns[(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, nouns.length)];\n    }\n\n    function generateAttitudeToOutsiders(){\n        return attitudes[(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, attitudes.length)];\n    }\n\n    function generateMainIndustry(){\n        return industries[(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, industries.length)];\n    }\n\n//#endregion\n\n\n//#region censusData\n    function generateCensusData(){\n        initialCensusData = {\n            year: 0,\n            population: (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(30, 300),\n            crimeRate: (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomArbitrary)(0.1, 5).toFixed(2),\n        }\n\n        censusDataPoints = ['years','population', 'births', 'deaths', 'immigration', 'crimeRate'];\n\n        censusData = {\n           years: [],\n           crimeRate: [],\n           population: [],\n           births: [],\n           deaths: [],\n           immigration: [],\n\n        };\n        censusData.years.push(initialCensusData.year);\n        censusData.crimeRate.push(initialCensusData.crimeRate);\n        censusData.population.push(initialCensusData.population);\n        censusData.births.push(0);\n        censusData.deaths.push(0);\n        censusData.immigration.push(0);\n\n        for (let index = 1; index < 10; index++) {\n            censusData.years.push(index * 5);\n            censusData.crimeRate.push((0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomArbitrary)(0.1, 5).toFixed(2));\n        }\n\n        generatePopulationData();\n    }\n\n    function generatePopulationData(){\n        let multiplier = 1 + (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomArbitrary)(-0.2, 0.4);\n        // const years = censusData;\n        // const populationData = censusData.population;\n        \n\n        for (let index = 1; index < censusData.years.length; index++) {\n            const prevPopulation = censusData.population[index-1];\n            const newPopulation =  Math.trunc(prevPopulation * multiplier);\n            const populationDifference = newPopulation - prevPopulation;\n            // difference = 30\n            // births = 10\n            // deaths = 10\n            // immigration = 30 - births + deaths\n\n            const births = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, populationDifference);\n            const deaths = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, populationDifference);\n            const immigration = populationDifference - births + deaths;\n            \n            censusData.population.push(newPopulation);\n            censusData.births.push(births);\n            censusData.deaths.push(deaths);\n            censusData.immigration.push(immigration);\n\n           \n        }\n\n\n    }\n\n//#endregion\n\nreturn {\n    oneOffDataPoints, \n    oneOffData, \n    censusDataPoints, \n    initialCensusData, \n    censusData}\n}\n\n\n\n\n//# sourceURL=webpack://fantasygenerator/./src/settlement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;