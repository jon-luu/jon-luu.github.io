//first loop example
document.getElementById("btn-loop").onClick = (e) => {
    console.log("hi");

    for(let i = 0; i < 10; i++) {
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
    }
};