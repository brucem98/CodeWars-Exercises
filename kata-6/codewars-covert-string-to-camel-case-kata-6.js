// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized 
//(known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  const words = str.split(/-|_/g);                                          // split the string by dash or underscore
  let camelCase = words[0];                                                 // a place to store the camelCase string & skips capitalizing the first word                                           
  for (let i = 1; i < words.length; i++){                                   // iterate over the split string
    const word = words[i]         
    // append the current word Capitalized to the camelCase string                
    camelCase += word[0].toUpperCase() + word.slice(1)              // skips capitalizing the first word & append the current word Capitalized to the camelCase string


}
return camelCase;                                                           // return the camelCase string

}
console.log(toCamelCase("the-stealth-warrior"))

