const arr = [1,2,3,4,5,6];
const newarray = arr.map((x) => x*x);
console.log(newarray);



const name = ['manish', 'raunak', 'praveen'];
const newName = name.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
})
console.log(newName);

const paragraph = name.map((item) => {
    return `<p>${item}</p>`
})
console.log(paragraph);