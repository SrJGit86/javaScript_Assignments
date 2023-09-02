const month = document.getElementById("month");
const day = document.getElementById("day");
const date = document.getElementById("date");
const year = document.getElementById("year");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Suturday"]

const currentDate = new Date();


const month_name = months[currentDate.getMonth()];
const day_name = days[currentDate.getDay()];
const date_num = currentDate.getDate();
const year_num = currentDate.getFullYear();

month.innerText = month_name;
day.innerText = day_name

console.log(month_name);
console.log(day_name);
console.log(date_num);
console.log(year_num);

date.innerText = date_num;

year.innerText = year_num;