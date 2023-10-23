// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(n) {
  const tower = [];
  const width = 2 * n - 1;

  for (let i = 0; i < n; i++) {
    const numBlocks = 2 * i + 1;
    const numSpaces = (width - numBlocks) / 2;
    const row =
      " ".repeat(numSpaces) + "*".repeat(numBlocks) + " ".repeat(numSpaces);
    tower.push(row);
  }

  return tower.join("\n");
}

console.log(towerBuilder(3));
