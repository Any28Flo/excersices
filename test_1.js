const array = [20, 28, 28, 27, 28, 25];
const findElement = ( element , array) =>{
      let newArray =[]

}
function groupArray(  array){
      let newArray = [];
            array.map((element, index) => {
                  if(newArray.length === 0){
                        newArray.push([element])
                  }else {
                        for(let i = 0 ; i < newArray.length ; i++) {
                              console.log(newArray[i].includes(element))
                              if (newArray[i].includes(element)) {
                                    newArray[i].push(element)
                                    break
                              } else {

                                    newArray.push([element])
                                    break
                              }
                        }
                        console.log(newArray)
                  }
            })

}

let test_1 =groupArray(array);
console.log(test_1)
