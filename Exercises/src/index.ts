// Giriş
//------------------------------------------
// let myname: String | number = "Qurban";

import { type } from "os";
import { performance } from "perf_hooks";

// let arr = [] as string[];
// let arr1: (number | string)[] = [];
// let arr2: (number | string)[] = [6, 4, "2"];
// let arr3: (number | string)[] = [];

// arr3.push(5);
// arr3.push("Qurban");

// // function f(): [number, string] {
// //   return [25, "abc"];
// // }

// // const c = f();

// function logPerson(ad: string, soyad: string, yas: number) {
//   console.log({ ad, soyad, yas });
// }
// logPerson("Qurban", "Qurbanzade", 28);

// function yaz(ad: string, tekrar: number) {
//   for (let i = 0; i < tekrar; i++) {
//     console.log(ad);
//   }
// }
// yaz("Qurban", 3);

// Tip Adlandırma
//------------------------------------------

// type Person = { ad?: string; soyad?: string; yas: number };
// const obj: Person = {
//   ad: "Qurban",
//   yas: 28,
// };

// type Colors = "blue" | "red" | "green";
// type customColors = "syan" | "magenta" | "yellow";
// type allColors = Colors | customColors;
// const myColor: Colors = "green";
// const colorArr: Colors[] = ["blue", "green", "red"];
// const colorArr1: (Colors | customColors)[] = [
//   "blue",
//   "green",
//   "red",
//   "magenta",
// ];
// const colorArr2: allColors[] = ["blue", "yellow"];

// type Person1 = { ad: string; soyad: string; yas: number };
// type Dog = { ad: string; cins: string; yas: number };

// type PersonDog = Person1 & Dog;
// const user: PersonDog = { cins: "Doberman", ad: "Rex", yas: 2, soyad: "Mex" };

// const myMap = new Map();

// myMap.set("qurban", "abc");

// console.log(myMap);

// Modullar
//------------------------------------------

import Person, { Student } from "./person";

console.log(Person.ad);
console.log({ ad: "Qurban", sinif: 11 } as Student);
