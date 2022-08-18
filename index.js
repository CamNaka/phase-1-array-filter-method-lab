


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = function(drivers, names) {
   return drivers.filter(function(driver) {
     return driver.toLowerCase() === names.toLowerCase()
   })
}


function fuzzyMatch(drivers, names) {
   const letters = drivers.filter(driver => driver.slice(0,names.length) === names)
   return letters
}

function matchName(drivers, names) {
   return drivers.filter(driver => driver.name === names);
}