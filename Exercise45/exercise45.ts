// // // Aliyan Aqeel, 10,03,2024. 

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// 
function createCar(manufacturer: string, model: string, ...extras:{[key:string]: any}[]){
  const car: {manufacturer: string, model: string, [key:string]: any}={
    manufacturer,
    model,
  }
  extras.forEach(extra =>{
    const [key, value] = Object.entries(extra)[0];
    car[key] = value;
  })
  return car;
}

const carInfo = createCar("Honda", "Civic", {color: "White"}, {year:2023});

console.log(carInfo);

