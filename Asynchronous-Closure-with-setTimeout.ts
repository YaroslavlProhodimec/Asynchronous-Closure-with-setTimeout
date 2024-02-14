1 Asynchronous Closure with setTimeout
const arr = [1, 2, 3]


arr.forEach(num => {
    setTimeout(() => console.log(num), 0)
})
1 2 3
