const countSheep = function (num) {
  let result = [];

  for (let i = num; i >= 1; i--) {
    result.push(`${i} sheep...`);
  }

  return result.reverse().join().replaceAll(",", "");
};

console.log(countSheep(3));

// const countSheep = function (num){
//     let str = "";
//     for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//     return str;
//   }
