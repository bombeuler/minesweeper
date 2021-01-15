const make2dArr = (x, y, content) => {
  let arr = [];
  for (let i = 0; i < x; i++) {
    let arr2 = [];
    for (let j = 0; j < y; j++) {
      arr2.push(content);
    }
    arr.push(arr2);
  }
  return arr;
};

const random2d = (x, y) => [
  Math.floor(Math.random() * x),
  Math.floor(Math.random() * y),
];

export { make2dArr, random2d };
