Array.prototype.sameStructureAs = function (other) {
    const array = this;

    if(array.length == other.length) {
        // console.log(array)
        // console.log(other)
       for(let i = 0; i < array.length; i++){
        //    console.log(array[i])
        //    console.log(other[i])
          if(Array.isArray(array[i]) && Array.isArray(other[i])){
                // console.log(array[i])
                // console.log(other[i].length)
              if(other[i].length == array[i].length){
                for(let j = 0; j < array[i].length; j++){
                    if(Array.isArray(array[i][j]) && Array.isArray(other[i][j])){
                        return true 
                    } 
                }
              } 
            } else if(typeof array[i] === typeof other[i]){
                return true
            }
        }
    }
 
    return false
};
const arr1 = [ 1, [ 1, 1 ] ]
const arr2 = [ 2, [ 2, 2 ] ]
const notArr1 = 1
const notArr2 = 2
//console.log(arr1.sameStructureAs(arr2))
//arr1.sameStructureAs(arr2)

console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ))
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );  