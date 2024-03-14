// // // Aliyan Aqeel, 10,03,2024. 


// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


let animals: string[] = ["Cat", "Dog", "Parrot"];

for(const animal of animals){
  console.log(animal);
}
for(const animal of animals){
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");


