var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
//    console.log(cat);

   //Add height and weight to Fluffy

   cat.weight="80 kg"
   cat.height="6 feet"
   console.log(cat)

   //Fluffy name is spelled wrongly. Update it to Fluffyy

   cat.name="Fluffyy"

   //List all the activities of Fluffyy’s catFriends.
for(var i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].activities)
}

//Print the catFriends names.
for(var k=0;k<cat.catFriends.length;k++){
    console.log(cat.catFriends[k].name)
}

//Print the total weight of catFriends

    console.log(cat.catFriends[0].weight+cat.catFriends[1].weight)

    //Print the total activities of all cats (op:6)

console.log(cat.activities.length+cat.catFriends[0].activities.length+cat.catFriends[1].activities.length)

//Add 2 more activities to bar & foo cats

cat.catFriends[0].activities[2]="ride";
cat.catFriends[0].activities[3]="read"

cat.catFriends[1].activities[2]="write";
cat.catFriends[1].activities[3]="draw"

console.log(cat)

//Update the fur color of bar
cat.catFriends[1].furcolor="green"
console.log(cat)