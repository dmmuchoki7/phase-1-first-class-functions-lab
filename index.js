// Code your solution in this file!
let driv= ['Antonia', 'Nuru','Amari', 'Mo'];
//function two drivers
//returns First two drivers
const returnFirstTwoDrivers= ()=> {return (driv.slice(0,2))};

//returns last two drivers
const returnLastTwoDrivers= ()=> {return (driv.slice(2,4))};

//returns the two functions above in to an array
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Fare multiplier
function createFareMultiplier(multiplier){
    return function (){ return multiplier *multiplier;};

}

//fare doubler
const fareDoubler = function (fare){
    return fare*2;
}

//fare tripler
const fareTripler= (fare) => {return fare*3;}; 

//
function selectDifferentDrivers(driv, selectingDrivers){
    return selectingDrivers(driv);
}
