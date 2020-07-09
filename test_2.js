const arr = [3, 1, 4, 5, 0, -1, 2, 4, 2]

const biggerNumber = (array) =>{
    let number = 0 ;
    array.forEach(element =>{

      return element >= number ? number = element : number =number

    })
    return number
}
console.log(biggerNumber(arr))