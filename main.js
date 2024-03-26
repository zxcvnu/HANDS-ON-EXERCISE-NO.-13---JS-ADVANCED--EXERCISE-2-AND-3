import getUserInput from "./modules.js";
import { Calculator, convertToJson, saveToLocalStorage, getFromLocalStorage, isPositive, operateOnNumbers, fetchData } from "./modules.js"
import { generateData } from "./modules.js";


// Main Program
document.addEventListener("DOMContentLoaded", async () => {
    // User Input
    //const number = getUserInput(); 
    const number = 1;
    
    // Ternary Operator
    const isPositiveNumber = isPositive(number);

    // Classes
    const resultAddition = Calculator.add(5, 3);
    const resultSubtraction = Calculator.subtract(10, 7);

    // JSON
    const jsonData = { key: "value" };
    const jsonString = convertToJson(jsonData);

    // Web Storage
    saveToLocalStorage("savedData", jsonString);
    const retrievedData = getFromLocalStorage("savedData");

    // Higher Order Functions
    const sum = operateOnNumbers(4, 6, (a, b) => a + b);
    const difference = operateOnNumbers(8, 3, (a, b) => a - b);

    // Fetch API (Async/Await)
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    //const fetchedData = await fetchData(apiUrl);


    // Display Results
    console.log("User Input:", number);
    console.log("Is Positive Number:", isPositiveNumber);
    console.log("Result Addition:", resultAddition);
    console.log("Result Subtraction:", resultSubtraction);
    console.log("JSON String:", jsonString);
    console.log("Retrieved Data from Local Storage:", retrievedData);
    console.log("Sum:", sum);
    console.log("Difference:", difference);
   // console.log("Fetched Data:", fetchedData);

    //const tblTHsLabels = ["User ID", "Task ID", "Title", "Status"];
    const tblRecords = document.getElementById("tblRecords");
    const loadData = document.getElementById("loadData");
    const clearTable = document.getElementById("clearTable");
    let dataloaded = false; 
    loadData.addEventListener("click", async () => {
        try {
            if (!dataloaded) {
                const fetchedData = await fetchData(apiUrl);
                generateData(fetchedData);
                dataloaded = true;
            } else {
                console.log("Data has already been loaded.");
                return; 
            }
        } catch (error) {
            console.error("Error loading data:", error);
        }
    });
    clearTable.addEventListener("click", () => {
        tblRecords.innerHTML = "";
        dataloaded = false;
    });

   


});