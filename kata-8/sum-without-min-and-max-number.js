function sumArray(array) {
  if (array === null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    const filterArray = array.filter(
      (num) => num !== Math.min(...array) && num !== Math.max(...array)
    );

    return filterArray.reduce((a, b) => a + b, 0);
  }
}

console.log(sumArray([0, 1, 6, 10, 10]));
