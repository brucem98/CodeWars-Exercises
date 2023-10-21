function sumArray(array) {
  if (array === null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    const min = Math.min(...array);
    const max = Math.max(...array);

    const minIndex = array.indexOf(min);
    const maxIndex = array.indexOf(max);

    if (minIndex !== -1) {
      array.splice(minIndex, 1);
    }

    if (maxIndex !== -1) {
      array.splice(maxIndex, 1);
    }

    return array.reduce((a, b) => a + b, 0);
  }
}

console.log(sumArray([0, 1, 6, 10, 10]));
