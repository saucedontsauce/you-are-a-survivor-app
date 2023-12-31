
function enterUserAge(){
    let disp = document.getElementById("indexResponse");
    let years = document.getElementById("userAge").value;
    let months = years * 12;
    let weeks = years * 52;
    let days = years * 365;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;   
    disp.innerHTML = ""
    disp.insertAdjacentHTML("beforeend", "<p>" + seconds + " seconds<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + minutes + " minutes<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + hours + " hours<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + days + " days<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + weeks + " weeks<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + months + " months<p>");
    disp.insertAdjacentHTML("beforeend", "<p>" + years + " years<p>");
}
