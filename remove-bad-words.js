// Given an array of "no-no" words, remove these no-no words from the string provided with minimal code.
let string =
  "There I, was, sitting in Illinois Indistrial Trailer park. with Sparky, my dog. He was a fine boy, tall purebred German Shephard. He's been with me through it all.";
let noNoWords = ["fine", "park", "I", "me"];

//Solution 1 - kinda brute forcing the spaces. going to try regEx to have more finess
const filterString = (input, noNo) => {
  for (let i = 0; i < noNo.length; i++) {
    input = input.replaceAll(` ${noNo[i]} `, " ");
  }
  return input;
};

// console.log(filterString(myString, noNoWords))

// Solution 2
const noNoWordsBad = (input, noNo) => {
  for (let i = 0; i < noNo.length; i++) {
    if (
      input.includes(` ${noNo[i]}.`) ||
      input.includes(` ${noNo[i]},`) ||
      input.includes(` ${noNo[i]}?`) ||
      input.includes(` ${noNo[i]}!`)
    ) {
      //replace all and replace with a space to create a double space (remove all double spaces later)
      input = input.replaceAll(` ${noNo[i]} `, "");
    } else {
      input = input.replaceAll(` ${noNo[i]} `, "");
    }
  }
  return input.split("  ").join("");
};

console.log(noNoWordsBad(string,noNoWords));

// RESULT:
// "There was, sitting in Illinois Indistrial Trailer with Sparky, dog. He was a boy, tall purebred German Shephard. He's been with through it all."

// let regEx = noNo.map(word => {
//    word = /\b word[ .,!?]/ig
// })
