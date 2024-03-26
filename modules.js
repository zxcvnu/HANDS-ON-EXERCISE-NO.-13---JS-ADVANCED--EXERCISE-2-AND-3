// Module 1: User Input handling
export default function getUserInput() {
    const userInput = prompt("Enter a number:");
    return userInput ? parseInt(userInput) : null;
};

// Module 2: Classes
export class Calculator {
    static add = (a, b) => a + b;
    static subtract = (a, b) => a - b;
}

// Module 3: JSON
export const convertToJson = (data) => JSON.stringify(data);

// Module 4: Web Storage
export const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);
export const getFromLocalStorage = (key) => localStorage.getItem(key);

// Module 5: Ternary Operator
export const isPositive = (number) => (number > 0) ? true : false;

// Module 6: Higher Order Functions
export const operateOnNumbers = (a, b, operation) => operation(a, b);

// Module 7: Fetch API (Async/Await)
export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const tblTHsLabels = ["User ID", "Task ID", "Title", "Status"];
export function generateData(data) {
    const tblHeaderRow = document.createElement("tr");
    const tblHeader = document.createElement("thead");
    tblHeaderRow.style.borderTop = "1px solid black";
    tblHeaderRow.style.borderBottom = "1px solid black";
 
    //Generate 4 Theads
    for(let i=0 ; i < 4 ; i++) {
        const tblTHs = document.createElement("th");
        tblTHs.style.padding = "5px";
        if(i != 3) {
            tblTHs.style.borderRight = "1px solid black";
        }
        tblTHs.innerHTML = tblTHsLabels[i];
        tblHeaderRow.appendChild(tblTHs);
    }
    tblHeader.appendChild(tblHeaderRow);
    tblRecords.appendChild(tblHeader);

    //Generate Records
    const tblBody = document.createElement("tbody");
    data.forEach((rec)=> {
        const tblRow = document.createElement("tr");
        const tbdataUserID = document.createElement("td");
        const tbdataTaskID = document.createElement("td");
        const tbdataTitle = document.createElement("td");
        const tbdataStatus= document.createElement("td");
             
        tbdataUserID.style.borderRight = "1px solid black";
        tbdataUserID.style.padding = "10px";
 
        tbdataTaskID.style.borderRight = "1px solid black";
        tbdataTaskID.style.padding = "10px";
 
        tbdataTitle.style.borderRight = "1px solid black";
        tbdataTitle.style.padding = "10px";
        tbdataTitle.style.width = "550px";
 
        tbdataStatus.style.padding = "10px";
        tbdataStatus.style.width = "150px";
        tbdataStatus.style.fontWeight = "bolder";
        tbdataStatus.style.color = rec.completed ? "green" : "red";
 
        tblRow.style.borderBottom = "1px solid black";
 
        tbdataUserID.innerHTML = rec.userId;
        tbdataTaskID.innerHTML = rec.id;
        tbdataTitle.innerHTML = rec.title;
        tbdataStatus.innerHTML = rec.completed ? "Completed" : "Not yet Completed";
 
        tblRow.appendChild(tbdataUserID);
        tblRow.appendChild(tbdataTaskID);
        tblRow.appendChild(tbdataTitle);
        tblRow.appendChild(tbdataStatus);
 
        tblBody.appendChild(tblRow);
    });
    tblRecords.appendChild(tblBody);
 }