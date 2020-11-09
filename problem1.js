// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var object = {
    name:'RajiniKanth', 
    age: 33,
     hasPets : false
    };

    var arr=[];
        for(var i in object){
         arr.push(object[i])
          }
          
    
    
    console.log((arr))
