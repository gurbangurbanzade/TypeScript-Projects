var myname = "Qurban";
var arr = [];
var arr1 = [];
var arr2 = [6, 4, "2"];
var arr3 = [];
arr3.push(5);
arr3.push("Qurban");
// function f(): [number, string] {
//   return [25, "abc"];
// }
// const c = f();
function logPerson(ad, soyad, yas) {
    console.log({ ad: ad, soyad: soyad, yas: yas });
}
logPerson("Qurban", "Qurbanzade", 28);
function yaz(ad, tekrar) {
    for (var i = 0; i < tekrar; i++) {
        console.log(ad);
    }
}
yaz("Qurban", 3);
