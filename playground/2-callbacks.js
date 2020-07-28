// setTimeout(() => {
//     console.log("Three seconds was up");
// }, 3000);
//
// const names = ["Mihai", "Andrei", "John"];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });
// console.log(shortNames);
//
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0
//         }
//         callback(data);
//     }, 1000);
// };
// geocode("Bucharest", (data) => {
//     console.log(data);
// });

const add = (nr1, nr2, callback) => {
    setTimeout(() => {
        callback(nr1 + nr2);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum);
})