// // // Aliyan Aqeel, 10,03,2024. 

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function showMagicians(magicians: string[]){
  magicians.forEach(magician=>{
    console.log(magician);
  })
}
function makeGreat(magicians: string[]){
 return magicians.map(magician => `${magician} the great.`)
}

let magicians: string[] = ["Harry Houdini", "David Blaine", "Ricky Jay"];

let modifiedMagicians = makeGreat(magicians.slice());


showMagicians(magicians);
showMagicians(modifiedMagicians);
