// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] <----- AN ARRAY OF ARRAYS 
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// senior >= 55

function openOrSenior(data){
    // an array to store the categories 
    const categories = [];  

    // iterate over the data 
    for (let i = 0; i < data.length; i++) {
        const member = data[i]; // member itself is an array with a length of two (AN ARRAY OF ARRAYS)
        const age = member[0];
        const handicap = member[1];
        // check if the current item index 0 is greater than or equal to 55
        if (age >= 55 & handicap > 7){
            categories.push('Senior'); // if so push "Senior" into categories
        } else {
            categories.push('Open');   // else push "Open" into categories
        }
    }

    return categories
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


// SOLUTION WITH SOME *Higher Order Functions*


function openOrSeniorTwo(data){
    // an array to store the categories 
    return data.map((member) => {
        const age = member[0];
        const handicap = member[1];
        // check if the current item index 0 is greater than or equal to 55
        if (age >= 55 && handicap > 7) {
          return 'Senior';
        } else {
          return 'Open';
        }
    });
    }

    console.log(openOrSeniorTwo([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))


// SOLUTION WITH SOME *Array Deconstructuring* 
function openOrSeniorThree(data){
    // an array to store the categories 
     return data.map(([age, handicap]) => {
        // check if the current item index 0 is greater than or equal to 55
        if (age >= 55 && handicap > 7) {
          return 'Senior';
        } else {
          return 'Open';
        }
    });
    }

    console.log(openOrSeniorThree([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
    
 // deconstructuring can take the parameters of a function and break them up (you can also do with objects and arrays)



// SINGLE LINE SOLUTION
 function openOrSeniorFour(data){
     return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
     // if that that then Senior other wise Open
     // anything before the questions mark is considered the condition
    
    }

    console.log(openOrSeniorFour([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))