// // // Aliyan Aqeel, 10,03,2024. 

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size: string = "Large", text: string = "I love Typescipt!"){
  console.log(`A ${size}-sized shirt will be printed with the message: ${text}.`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "I Love Python!");
  