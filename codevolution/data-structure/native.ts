//! Array
const array: any[] = [1, 2, 3, "a", "b"];

array.pop();
array.shift();
array.push("c");
array.unshift(0);
console.log({ array });

//! Object
const obj = {
  name: "yass",
  age: 29,
  "key-three": "any",
  intro: function () {
    console.log(this.name, this.age);
  },
};
obj["new key"] = 777;
console.log({ obj });

//! Sets
const setData = new Set([1, 2, 3]);
for (const item of setData) {
  console.log({ item });
}

//! Maps
const map = new Map<number, string>([[1, "a"]]);
for (const [key, value] of map) {
  console.log({ map: [key, value] });
}
map.set(2, "3");
console.log(map.has(2));
