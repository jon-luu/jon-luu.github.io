document.getElementbyID("btn-show-message").onClick = () => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    console.log(e);
}

//styles the link when clicked
document.getElementById("link").onClick = (e) => {
    e.target.className = "cool-link";
}