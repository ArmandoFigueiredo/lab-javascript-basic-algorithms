// Iteration 1: Names and Input
//
// Iteration 2: Conditionals
//
// Iteration 3: Loops

const driverc = "hacker1";
const chrome = "hacker2";

console.log(`the driver's name is ${driverc} `);
console.log(`the navigator's name is ${chrome}`);

if (driverc.length > chrome.length){
    console.log(`The driver has the longest name, it has ${driverc.length} characters.`)
} else if (chrome.length > driverc.length) {
    console.log(`It seems that the navigator has the longest name, it has ${chrome.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driverc.length} characters!`)
}

const driver = "j h o n"
console.log(driver.toUpperCase());

let driverInv=""

for (let i=(driver.length-1);i>-1;i--){        
    driverInv+=driver.charAt(i);              
}
console.log(driverInv);

if  (driver<driverInv) {                                         
    console.log(`The driver's name goes first.`);               
} else if (driver>driverInv) {                                   
    console.log(`Yo, the navigator goes first definitely.`)
} else {                                                        
    console.log(`What?! You both have the same name?`)
}







 











