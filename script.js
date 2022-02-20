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

// fetches JSON data and displays it


function appendData(timeFrame) {
  let mainInfo = document.createElement('h2');
  let previousInfo = document.createElement('p');
  previousInfo.classList.add("previous");
  timeFrame.appendChild(mainInfo);
  timeFrame.appendChild(previousInfo);
}

$(document).ready(function(){
  $.getJSON("data.json", function(data){

    // weekly 

    let weeklyWork = document.getElementById("weekly-work");
    appendData(weeklyWork);
    weeklyWork.children[0].textContent = data[0].timeframes.weekly.current+"hrs";
    weeklyWork.children[1].textContent = "Last week - " + data[0].timeframes.weekly.previous + "hrs";

    let weeklyPlay = document.getElementById("weekly-play");
    appendData(weeklyPlay);
    weeklyPlay.children[0].textContent = data[1].timeframes.weekly.current+"hrs";
    weeklyPlay.children[1].textContent = "Last week - " + data[1].timeframes.weekly.previous + "hrs";

    let weeklyStudy = document.getElementById("weekly-study");
    appendData(weeklyStudy);
    weeklyStudy.children[0].textContent = data[2].timeframes.weekly.current+"hrs";
    weeklyStudy.children[1].textContent = "Last week - " + data[2].timeframes.weekly.previous + "hrs";
    
    let weeklyExercise = document.getElementById("weekly-exercise");
    appendData(weeklyExercise);
    weeklyExercise.children[0].textContent = data[3].timeframes.weekly.current+"hrs";
    weeklyExercise.children[1].textContent = "Last week - " + data[3].timeframes.weekly.previous + "hrs";

    let weeklySocial = document.getElementById("weekly-social");
    appendData(weeklySocial);
    weeklySocial.children[0].textContent = data[4].timeframes.weekly.current+"hrs";
    weeklySocial.children[1].textContent = "Last week - " + data[4].timeframes.weekly.previous + "hrs";

    let weeklySelfCare = document.getElementById("weekly-self-care");
    appendData(weeklySelfCare);
    weeklySelfCare.children[0].textContent = data[5].timeframes.weekly.current+"hrs";
    weeklySelfCare.children[1].textContent = "Last week - " + data[5].timeframes.weekly.previous + "hrs";

    //daily 

    let dailyWork = document.getElementById("daily-work");
    appendData(dailyWork);
    dailyWork.children[0].textContent = data[0].timeframes.daily.current+"hrs";
    dailyWork.children[1].textContent = "Last week - " + data[0].timeframes.daily.previous + "hrs";

    let dailyPlay = document.getElementById("daily-play");
    appendData(dailyPlay);
    dailyPlay.children[0].textContent = data[1].timeframes.daily.current+"hrs";
    dailyPlay.children[1].textContent = "Last week - " + data[1].timeframes.daily.previous + "hrs";

    let dailyStudy = document.getElementById("daily-study");
    appendData(dailyStudy);
    dailyStudy.children[0].textContent = data[2].timeframes.daily.current+"hrs";
    dailyStudy.children[1].textContent = "Last week - " + data[2].timeframes.daily.previous + "hrs";
    
    let dailyExercise = document.getElementById("daily-exercise");
    appendData(dailyExercise);
    dailyExercise.children[0].textContent = data[3].timeframes.daily.current+"hrs";
    dailyExercise.children[1].textContent = "Last week - " + data[3].timeframes.daily.previous + "hrs";

    let dailySocial = document.getElementById("daily-social");
    appendData(dailySocial);
    dailySocial.children[0].textContent = data[4].timeframes.daily.current+"hrs";
    dailySocial.children[1].textContent = "Last week - " + data[4].timeframes.daily.previous + "hrs";

    let dailySelfCare = document.getElementById("daily-self-care");
    appendData(dailySelfCare);
    dailySelfCare.children[0].textContent = data[5].timeframes.daily.current+"hrs";
    dailySelfCare.children[1].textContent = "Last week - " + data[5].timeframes.daily.previous + "hrs";

    // monthly

    let monthlyWork = document.getElementById("monthly-work");
    appendData(monthlyWork);
    monthlyWork.children[0].textContent = data[0].timeframes.monthly.current+"hrs";
    monthlyWork.children[1].textContent = "Last week - " + data[0].timeframes.monthly.previous + "hrs";

    let monthlyPlay = document.getElementById("monthly-play");
    appendData(monthlyPlay);
    monthlyPlay.children[0].textContent = data[1].timeframes.monthly.current+"hrs";
    monthlyPlay.children[1].textContent = "Last week - " + data[1].timeframes.monthly.previous + "hrs";

    let monthlyStudy = document.getElementById("monthly-study");
    appendData(monthlyStudy);
    monthlyStudy.children[0].textContent = data[2].timeframes.monthly.current+"hrs";
    monthlyStudy.children[1].textContent = "Last week - " + data[2].timeframes.monthly.previous + "hrs";
    
    let monthlyExercise = document.getElementById("monthly-exercise");
    appendData(monthlyExercise);
    monthlyExercise.children[0].textContent = data[3].timeframes.monthly.current+"hrs";
    monthlyExercise.children[1].textContent = "Last week - " + data[3].timeframes.monthly.previous + "hrs";

    let monthlySocial = document.getElementById("monthly-social");
    appendData(monthlySocial);
    monthlySocial.children[0].textContent = data[4].timeframes.monthly.current+"hrs";
    monthlySocial.children[1].textContent = "Last week - " + data[4].timeframes.monthly.previous + "hrs";

    let monthlySelfCare = document.getElementById("monthly-self-care");
    appendData(monthlySelfCare);
    monthlySelfCare.children[0].textContent = data[5].timeframes.monthly.current+"hrs";
    monthlySelfCare.children[1].textContent = "Last week - " + data[5].timeframes.monthly.previous + "hrs";
    
  }).fail(function(){
      console.log("An error has occurred.");
  });
});

