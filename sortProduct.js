const multiplyer = (num) => {
    let store = {}

    for(let i = 0; i < num.length; i++) {
       let prod = num[i] * (i+1)
       store[prod] = num[i]
       console.log(store);
    }
    return (Object.values(store))
}
const sortByValueAndIndex = (arr) => {
    let totals = []
    arr.forEach((e, i) => {
    let totalObj = {
        total: e*(i+1),
        i: i
    }
    totals.push(totalObj)
})
totals.sort((a, b) => a.total - b.total)
let newarr = []
totals.forEach(e => newarr.push(arr[e.i]))
return newarr
}

console.log(sortByValueAndIndex([23,2,3,4,5]));
console.log(multiplyer([23,2,3,4,5]));