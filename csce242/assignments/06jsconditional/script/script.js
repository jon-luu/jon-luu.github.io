const TOTAL_CLASSES = 25;
const ATTENDANCE_PERCENT = 7; // attendance is worth 7% of the grade

// toggle the small screen menu
document.getElementById("toggleBtn").onclick = (e) => {
    const menuList = document.getElementById("menuList");
    const arrow = document.getElementById("arrow");

    menuList.classList.toggle("open");
    arrow.innerHTML = menuList.classList.contains("open") ? "&#9650;" : "&#9660;";
};

// show Exercise 1, hide Exercise 2
document.getElementById("link1").onclick = (e) => {
    e.preventDefault(); // don't go to link's destination

    document.getElementById("ex1").classList.remove("hidden");
    document.getElementById("ex2").classList.add("hidden");

    e.target.classList.add("active");
    document.getElementById("link2").classList.remove("active");
};

// show Exercise 2, hide Exercise 1
document.getElementById("link2").onclick = (e) => {
    e.preventDefault();

    document.getElementById("ex2").classList.remove("hidden");
    document.getElementById("ex1").classList.add("hidden");

    e.target.classList.add("active");
    document.getElementById("link1").classList.remove("active");

    updateCounter();
};

// calculate the grade lost from missing class
document.getElementById("daysInput").oninput = (e) => {
    const days = parseInt(e.target.value);
    const output = document.getElementById("ex1Output");

    if (isNaN(days) || days < 0) {
        output.innerHTML = "";
        return;
    }

    const percentLost = ((ATTENDANCE_PERCENT / TOTAL_CLASSES) * days).toFixed(1);
    const dayWord = days === 1 ? "day" : "days";

    let message;

    if (days === 0) {
        message = "Perfect attendance! Keep it up.";
    } else if (days <= 2) {
        message = "Just a couple of days. Not a big deal.";
    } else if (days <= 5) {
        message = "You are starting to lose a real chunk of your grade.";
    } else if (days <= 9) {
        message = "This is too many missed classes. You need to get back on track.";
    } else {
        message = "That is a lot of missed class. Talk to your professor.";
    }

    output.innerHTML = `You will lose ${percentLost}% for skipping ${days} ${dayWord}. ${message}`;
};

// count down to the last day of class (Dec 4)
function updateCounter() {
    const today = new Date();
    let lastDay = new Date(today.getFullYear(), 11, 4); // month is 0-indexed, so 11 = December

    if (today > lastDay) {
        lastDay = new Date(today.getFullYear() + 1, 11, 4); // Dec 4 already passed, use next year
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((lastDay - today) / msPerDay);
    const output = document.getElementById("ex2Output");

    let message;

    if (daysLeft <= 0) {
        message = "The semester is over!";
    } else if (daysLeft <= 14) {
        message = "The end is near, push through!";
    } else if (daysLeft <= 30) {
        message = "One month left. Finals are close.";
    } else if (daysLeft <= 60) {
        message = "Over halfway there. Keep going.";
    } else {
        message = "Not time to start counting down yet.";
    }

    output.innerHTML = `You have ${daysLeft} days left in the semester. ${message}`;
}

updateCounter(); // fill in the counter right away, before Exercise 2 is ever clicked