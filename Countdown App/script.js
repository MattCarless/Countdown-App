console.log(moment());

let todaysDate = moment().format("DD-MM-YYYY");
console.log(todaysDate);
let userSelectedDate = document.getElementById('user-input-data-html');
const userSubmitButtonClicked = document.getElementById('user-button-html');
const displayCountdownData = document.getElementById('display-data-html');
let daysRemainingCountdown = 0; // temp value

const displayData = () => {
   console.log(todaysDate);
let userSelectedDataFormatted = userSelectedDate.value; // shows user selected date in correct format
console.log(userSelectedDataFormatted);
userSelectedDataFormatted.to(todaysDate,true); // not working
console.log(userSelectedDataFormatted); // not working
 console.log(differenceBetweenDates);
 displayCountdownData.innerHTML = `You have ${daysRemainingCountdown} days left! `;
console.log("function works");
}

userSubmitButtonClicked.addEventListener('click', displayData);

/* 

-Need to work out gap between  current date and user selected date, parse that value and display it in daysRemainingCountdown variable

*/