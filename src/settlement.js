import { getRandomArbitrary, getRandomInt } from "./functions";
export {createCity}

function createCity(){
    generateOneOffData();
    generateCensusData();

    var oneOffDataPoints;
    var oneOffData;
    var censusDataPoints;
    var censusData;
    var initialCensusData;
    

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



