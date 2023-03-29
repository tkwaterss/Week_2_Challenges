const text = () => "good";

const again = (func, time) => {
    let value

    setTimeout(() => {
        value = func();
    },time)
    
    return value
}

console.log(again(text, 2000))



// function deBounce(cb, x, execute) {
//     let flag = true
//     let timeId
//     function resetFlag() {
//       timeId = setTimeout(function () {
//         flag = true
//       }, x)
//     }
  
//     return function () {
//       if (execute) {
//         return cb()
//       }
  
//       if (flag) {
//         flag = false
//         resetFlag()
//         return cb()
//       } else {
//         flag = false
//         clearTimeout(timeId)
//         resetFlag()
//         return 'too soon'
//       }
//     }
//   }

//   console.log(deBounce(text, 2000, false));