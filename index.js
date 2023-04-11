// Code your solution here

const { arrayContaining } = require("expect");


//manual filter function
function findMatching(collection, nameToFind){
    const driverMatches = []; //initializes the new array for matches
    console.log(driverMatches + " this is the drivermatches");

    for (let i = 0; i<collection.length; i ++){ //for every index of the arg array
        if (collection[i].toLowerCase() === nameToFind.toLowerCase()){
            console.log(collection[i] + " <- found a name");
            driverMatches.push(collection[i]);
            console.log(driverMatches + " <- added this name to drivermatches");
            
        }
        
    }
    console.log(driverMatches);
    return driverMatches;
}


/*function fuzzyMatch(collection, partial) {
    for (const user of collection) {
      if (user.name.includes(partial)) {
        console.log(user.name);
      }
    }
  }
  
  filter(drivers, partial);*/



function fuzzyMatch(collection, partial){
    return collection.filter((driver) =>driver.startsWith(partial));
}

function matchName(collection, name){
    return collection.filter((driver) => driver.name === name);
}











/*function fuzzyMatch(collection, nameToFind){
    const driverMatches = [];
    
    for (let i = 0; i<collection.length;i++){
        let match = false;
        for (let p = 0; p<nameToFind.length; p++){
            console.log(nameToFind[p] + " <- looking for this letter at position " + p)
            if (nameToFind[p] === collection[i][p]){
                console.log(collection[i] + " <-this one matches")
                match = true;
                
            }
            else (match = false);
        }
        if (match = true){
            driverMatches.push(collection[i]);
            console.log(driverMatches + " added another one");
        }
    }

    console.log(driverMatches);
    return driverMatches;
}
*/