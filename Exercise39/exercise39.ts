// // // Aliyan Aqeel, 10,03,2024. 

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string){
  return `"${city}, ${country}"`;
}

const pair1: string = city_country("Karachi", "Pakistan");
const pair2: string = city_country("Copenhagen", "Denmark");
const pair3: string = city_country("Istanbul", "Turkiye");

console.log(pair1);
console.log(pair2);
console.log(pair3);  
