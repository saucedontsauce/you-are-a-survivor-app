
function enterUserAge(){
      
    let years = document.getElementById("userAge").value;
    let months = years * 12;
    let weeks = years * 52;
    let days = years * 365;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;   

    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + seconds + " seconds<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + minutes + " minutes<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + hours + " hours<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + days + " days<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + weeks + " weeks<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + months + " months<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + years + " years<p>");
}

function enterUserAgeAgain(){
    location.reload();
}