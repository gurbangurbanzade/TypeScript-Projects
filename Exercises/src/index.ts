let myname: String | number = "Qurban";

let arr = [] as string[];
let arr1: (number | string)[] = [];
let arr2: (number | string)[] = [6, 4, "2"];
let arr3: (number | string)[] = [];

arr3.push(5);
arr3.push("Qurban");

// function f(): [number, string] {
//   return [25, "abc"];
// }

// const c = f();

function logPerson(ad: string, soyad: string, yas: number) {
  console.log({ ad, soyad, yas });
}
logPerson("Qurban", "Qurbanzade", 28);

function yaz(ad: string, tekrar: number) {
  for (let i = 0; i < tekrar; i++) {
    console.log(ad);
  }
}
yaz("Qurban", 3);
