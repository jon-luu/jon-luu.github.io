//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//when you change the number od fays since you watered your plant
//show a message and change the time
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parsetInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    pMessage.innerHTML = numDays;

    if (numDays <= 2) {
        pMessage.innerHTML = "Let your plant rest it's only been " + numDays + " days!";
    }
}