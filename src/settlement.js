import { getRandomArbitrary, getRandomInt } from "./functions";
export {createCity}


const nouns = ['mountain', 'river', 'lake', 'forest', 'shore', 'sea', 'beach'];
const adjectives = ['dark', 'lost', 'golden', 'windy', 'cold', 'scorching'];
const attitudes = ['friendly', 'welcoming', 'hostile', 'indifferent'];
const industries = ['mining', 'farming', 'fishing', 'blacksmithing', 'herding', 'hunting', 'gathering', 'mercinaries'];
/*
    one off:
    name
    size (area)
    

    census:
    population
    birth rate
    death rate
    immigration rate
    crime rate
    unemployment rate
    median wealth
    density

*/

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
        oneOffDataPoints = ['name', 'area', 'attitudeToOutsiders', 'mainIndustry']
        oneOffData = [];
        oneOffData.name = generateName();
        oneOffData.area = getRandomInt(0, 30) + 'km squared';
        oneOffData.attitudeToOutsiders = generateAttitudeToOutsiders();
        oneOffData.mainIndustry = generateMainIndustry();
    }

    function generateName(){
        return adjectives[getRandomInt(0, adjectives.length)] + nouns[getRandomInt(0, nouns.length)];
    }

    function generateAttitudeToOutsiders(){
        return attitudes[getRandomInt(0, attitudes.length)];
    }

    function generateMainIndustry(){
        return industries[getRandomInt(0, industries.length)];
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



