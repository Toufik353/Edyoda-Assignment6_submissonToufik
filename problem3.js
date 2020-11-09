// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
// Input (Object):
// var object = {name: “ISRO”, age: 35, role: “Scientist”};
// Output:
// [[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]

var object = {
    name: 'ISRO',
     age: 35,
      role: 'Scientist'
    };
     var arr=[];
    for(var i in object){
        nArr=[];
         nArr.push(i);
        //  console.log(object[i])
         nArr.push(object[i]);
         arr.push(nArr);
    }
    console.log(arr)