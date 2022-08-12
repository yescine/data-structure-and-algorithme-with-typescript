//? avg Theta = O(1)
class HashTable<T> {
  private table: (T|string)[][];
  size: number;
  constructor(size: number) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key: string): number {
    let total = 0;
    for (let idx = 0; idx < key.length; idx++) {
      total += key.charCodeAt(idx);
    }
    return total % this.size;
  }

  set(key: string, value: T) {
    const idx = this.hash(key);
    //! collision
    // this.table[idx] = value;

    let test = this.table[idx];
    let bucket: (T | string)[][];
    // @ts-ignore
    if (!test) this.table[idx] = [[key, value]];
    else {
      const sameKey = bucket.find((elem) => elem[0] === key);
      if (sameKey) sameKey[1] = value;
      else bucket.push([key, value]);
    }
  }

  get(key: string) {
    const idx = this.hash(key);
    //! collision
    // return this.table[idx];

    let test = this.table[idx];
    let bucket: (T | string)[][];
    if (test) {
      const sameKeyItem = test.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  }

  remove(key: string) {
    const idx = this.hash(key);
    //! collision
    // this.table[idx] = undefined;

    let test = this.table[idx];
    let bucket: (T | string)[][];
    if (test) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  public get value(): object {
    const result = {};
    this.table.forEach((elem) => {
      result[elem[0][0].toString()] = elem[0][1];
    });
    return result;
  }
}

const table = new HashTable<string>(10);
table.set("name", "ali");
table.set("age", "25");

console.log({ value: table.value });
console.log({ get: table.get("name") });
