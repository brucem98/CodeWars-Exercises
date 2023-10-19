// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript

function sortAnimal(animals) {
  if (animals.length === 0) {
    return [];
  }

  function compareAnimals(a, b) {
    // First, compare by number of legs
    if (a.numberOfLegs < b.numberOfLegs) return -1;
    if (a.numberOfLegs > b.numberOfLegs) return 1;

    // If number of legs is equal, compare by name
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0; // Both are equal
  }

  const sortedList = [...animals].sort(compareAnimals);

  return sortedList;
}

console.log(
  sortAnimal([
    { name: "Centipede", numberOfLegs: 100 },
    { name: "Snail", numberOfLegs: 0 },
    { name: "Lizard", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 },
  ])
);
