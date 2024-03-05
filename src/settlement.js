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
    births
    deaths
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

        censusDataPoints = ['years','population', 'births', 'deaths', 'immigration', 'crimeRate'];

        censusData = {
           years: [],
           crimeRate: [],
           population: [],
           births: [],
           deaths: [],
           immigration: [],

        };
        censusData.years.push(initialCensusData.year);
        censusData.crimeRate.push(initialCensusData.crimeRate);
        censusData.population.push(initialCensusData.population);
        censusData.births.push(0);
        censusData.deaths.push(0);
        censusData.immigration.push(0);

        for (let index = 1; index < 10; index++) {
            censusData.years.push(index * 5);
            censusData.crimeRate.push(getRandomArbitrary(0.1, 5).toFixed(2));
        }

        generatePopulationData();
    }

    function generatePopulationData(){
        let multiplier = 1 + getRandomArbitrary(-0.2, 0.4);
        // const years = censusData;
        // const populationData = censusData.population;
        

        for (let index = 1; index < censusData.years.length; index++) {
            const prevPopulation = censusData.population[index-1];
            const newPopulation =  Math.trunc(prevPopulation * multiplier);
            const populationDifference = newPopulation - prevPopulation;
            // difference = 30
            // births = 10
            // deaths = 10
            // immigration = 30 - births + deaths

            const births = getRandomInt(0, populationDifference);
            const deaths = getRandomInt(0, populationDifference);
            const immigration = populationDifference - births + deaths;
            
            censusData.population.push(newPopulation);
            censusData.births.push(births);
            censusData.deaths.push(deaths);
            censusData.immigration.push(immigration);

           
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


