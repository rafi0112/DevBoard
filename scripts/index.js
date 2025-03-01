
const currentDateTimeElement = document.getElementById("currentDate");
const now = new Date();
currentDateTimeElement.innerText = now.toLocaleDateString();

const currentDayName = document.getElementById("currentDay");
const nowDay = new Date();
const dayOfWeek = nowDay.getDay();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
currentDayName.innerText =days[dayOfWeek];


document.getElementById("blogLink").style.cursor = "pointer";
document.getElementById("blogLink").addEventListener("click",function() {
    window.location.href="../blogs.html";
})

document.getElementById("themeBtn").addEventListener("click",function() {
    changeTheme();
    document.getElementById("body").style.backgroundColor = changeTheme();
});


document.getElementById("btn1").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card1Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn1");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});
document.getElementById("btn2").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card2Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn2");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});
document.getElementById("btn3").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card3Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn3");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});
document.getElementById("btn4").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card4Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn4");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});
document.getElementById("btn5").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card5Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn5");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});
document.getElementById("btn6").addEventListener("click", function(){
    let taskAssigned = parseFloat(document.getElementById("taskAssigned").innerText);
    taskAssigned--;
    // alert( taskAssigned);
    document.getElementById("taskAssigned").innerText=taskAssigned;

    let taskDone = parseFloat(document.getElementById("taskDone").innerText);
    // alert(taskDone);
    taskDone++;
    document.getElementById("taskDone").innerText=taskDone;

    let paragraph1 = document.createElement("p");
    paragraph1.classList.add("bg-[#F4F7FF]", "p-3", "rounded-xl", "text-sm");
    // document.getElementById("card1Heading").innerText;
    paragraph1.innerText = document.getElementById("card6Heading").innerText;
    
    let logList = document.getElementById("activityLogList");
    // date
    const date = new Date();
    // alert(date.toLocaleTimeString());
    let time = date.toLocaleTimeString();
    paragraph1.innerHTML += "  " + time;
    paragraph1.innerHTML = "You have completed the task " + paragraph1.innerHTML;

    logList.appendChild(paragraph1);
    const btn1 = document.getElementById("btn6");
    btn1.style.backgroundColor = "gray";
    btn1.disabled = true;
    alert("Board updated successfully");
    if (taskAssigned == 0){
        alert("Successfully completed task assignments");
    }
    
});

document.getElementById("clearHistory").addEventListener("click", function(){
    let activityLogList = document.getElementById("activityLogList");
    activityLogList.innerText="";
})
