let form = document.getElementById("form")
const Task = []
const validateForm = (event) => {
    event.preventDefault();
    //Task.push(event.target.userinput.value);
    //console.log(Task);

    let display = document.getElementById("display")
    let userinput = event.target.userinput;
    if (userinput.value !== "") {
        Task.push(userinput.value);
        renderTask();
        //display.innerHTML = "";
        // display.innerHTML += Task.map((task, index) =>
        //     `<li>${task} <button onclick="deletetask(${index})"> delete </button></li>`
        // ).join("")
    }
    else {
        alert("Enter Task");
    }
    userinput.value = "";
}
function renderTask(){
        let display = document.getElementById("display");
        display.innerHTML = ""
        for(let i=0;i<Task.length;i++)
        {
            display.innerHTML +=
        `<li>${Task[i]} <button onclick="deletetask(${i})">delete</button></li>`
            
        }
}
function deletetask(index)
{
    Task.splice(index, 1)
    renderTask();
}
// function deletetask(index) {
//     
//     let display = document.getElementById("display");
//     display.innerHTML = ""
//     display.innerHTML += Task.map((task, index) => 
//         `<li>${task} <button onclick="deletetask(${index})">delete</button></li>`
//     ).join("");
// }
form.addEventListener('submit', validateForm);