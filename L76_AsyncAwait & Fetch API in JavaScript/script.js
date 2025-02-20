// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {
    console.log('Loading Modules..');
    console.log('Do something elsee...');
    console.log('Load data');
    let data = await getData();
    console.log(data)
    console.log('Process data');
    console.log('Task 2...');
}
main()
// data.then((v)=>{
//     console.log(data)
//     console.log('Process data');
//     console.log('Task 2...');
// })