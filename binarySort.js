let test1 = [1,7,-2,4,-6,2,9,5,8,3];

//divide into two arrays sorted/unsorted with first unsorted element in sorted array
//iterate through and add unsorted elements to sorted array

const binarySort = (array) => {
    let result = [array[0]];
    for (let i = 1; i < array.length; i++ ) {
        let num = array[i];
        for ( let j = 0; j < result.length;  j++) {
                
            
        }
    }

    return result;
}

console.log(binarySort(test1));