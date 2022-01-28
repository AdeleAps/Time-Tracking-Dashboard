// hides & shows tabs

function openStats(event, time) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(time).style.display = "grid";
}

// higlights active tab

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// opens the default tab on load

document.getElementById("defaultOpen").click();

// fetches JSON data

fetch("data.json")
  .then(response => response.json())
  .then(json => console.log(json));
  
// displays JSON data (work in progress)

// let mainTime = document.querySelectorAll(".js-time");
// let daily = document.getElementById("daily");
// let weekly = document.getElementById("weekly");
// let monthly = document.getElementById("monthly");


// daily.addEventListener("click", displayDaily);
// weekly.addEventListener("click", displayWeekly);
// monthly.addEventListener("click", displayMonthly);


// function displayWeekly() {
//   mainTime[0].innerHTML =` <h2>${data[0].timeframes.weekly.current + 'hrs'} </h2>
//   <p>${'Last Week - '+ data[0].timeframes.weekly.previous + 'hrs'} </p> `
// }

// window.onload = displayWeekly;


