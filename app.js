// DOM EVENTS EXERCISE

// 1a
const button1 = document.querySelector(`#one`);
// 1b
button1.onclick = () => {
    alert(`Cool! You can hear/understand a hummingbird and ants`);
};

// 2a
const h3 = document.querySelector(`h3`);
// 2b
h3.addEventListener(`mouseenter`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

// 3a
const form = document.querySelector(`form`);
// 3b
// form.addEventListener(`submit`, f => { //f is the parameter
//     f.preventDefault(); //stops the form from submitting
//     const a = form.elements.quote.value; //sets the value to a
//     alert(`${a}`); //displays value of a in alert
//     form.elements.quote.value = ''; //sets textarea back to empty
// });
// OR (Perhaps a better way because it allow a BackEnd submit too)
form.addEventListener(`submit`, () => { 
    alert(`${form.elements.quote.value}`); 
});

// BONUS
// 4a
const darkMode = document.querySelector(`#dm`);
// 4b
// Using getElementsByTagName so an HTMLCollection will be formed of all the elements on the webpage:
const allElements = document.getElementsByTagName(`*`);
darkMode.addEventListener(`click`, () =>{ //listening for click to #dm button
    for (eachElement of allElements) {      //for of loop to iterate through eachElement in the HTMLCollection allElements.
        eachElement.classList.toggle('dark-mode'); //and toggle on the `dark-mode` class from the css page (too cool!)
    };
});

// 5a
const reality = document.querySelector(`#reality`);

// 5b
let clickCount = 0; //this sets the variable clickCount to 0.
reality.addEventListener(`click`, () => {  //this listens for the clicks
    clickCount++;                           //and on each click, adds 1 to clickCount
    if (clickCount < 3) {   //for the 1st and 2nd click, clickCount is under 3
        alert(`You have successfully moved to another reality`); //this alert occurs
    } else if (clickCount === 3)         //on the 3rd click, clickCount is 3. Matt said to make this strict equality.
        alert(`OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!`); //this alert occurs
}); //then after the 3rd click, for 4th and on up clicks, nothing happens. We're stuck!!!!!
