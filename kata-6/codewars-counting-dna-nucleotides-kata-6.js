// For a given DNA genetic code represented by a string, count the number of times the letters A (adenine), C (cytosine), G (guanine) and T (thymine) appears and return and object.
// The input string may contain both upper and lower case characters.

// For example:

// var genCode = 'aCCggT';

// getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}
// Also, should a nucleotide type not be present within the string, it should still be present in the object returned with it's value as 0. For example:

// var genCode = 'ACG';

// getCountedNucleotides(genCode); // return {A: 1, C: 1, G: 1, T: 0}



// *let genCode = 'TCCAGGTTTAACGG'*
let genCode = 'TAGGTTTAAGG'

function getCountedNucleiotides(genCode) {
    let code = genCode.toUpperCase();
    let counts = { A: 0, C: 0, G: 0, T: 0};

    for (let i = 0; i < code.length; i++) {
        counts[code[i]]++;
    }

    return counts
}


console.log(getCountedNucleiotides(genCode))


function getCountedNucleotidesTwo(genCode){
    let obj = {A:0,C:0,G:0,T:0}
    genCode.toUpperCase().split('').forEach(item => obj[item]++)
    return obj
  }