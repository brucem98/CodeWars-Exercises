function findShort(s){
    const words = s.split(' '); // Split the string into an array of words
      let shortest = Infinity; // Initialize shortest with a very large number
      
  
      // Iterate through each word to find the shortest length
      for (let word of words) {
          const length = word.length;
          if (length < shortest) {
              shortest = length; // Update the shortest length if a shorter word is found
          }
      }
      return shortest
    }

    console.log(findShort("bitcoin take over the world maybe who knows perhaps"))