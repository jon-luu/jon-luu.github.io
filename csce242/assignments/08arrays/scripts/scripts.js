// Associative arrays: key = destination name, value = Google Maps embed URL
const mountains = [];
mountains["Asheville"] = "https://maps.google.com/maps?q=Asheville,+NC&output=embed";
mountains["Boone"] = "https://maps.google.com/maps?q=Boone,+NC&output=embed";
mountains["Hot Springs"] = "https://maps.google.com/maps?q=Hot+Springs,+NC&output=embed";
mountains["Table Rock"] = "https://maps.google.com/maps?q=Table+Rock+State+Park,+SC&output=embed";

const beaches = [];
beaches["Myrtle Beach"] = "https://maps.google.com/maps?q=Myrtle+Beach,+SC&output=embed";
beaches["Folly Beach"] = "https://maps.google.com/maps?q=Folly+Beach,+SC&output=embed";
beaches["Hilton Head"] = "https://maps.google.com/maps?q=Hilton+Head+Island,+SC&output=embed";
beaches["Outer Banks"] = "https://maps.google.com/maps?q=Outer+Banks,+NC&output=embed";

const typeSelect = document.getElementById("destination-type");
const list = document.getElementById("destination-list");
const map = document.getElementById("map");

typeSelect.onchange = () => {
    list.innerHTML = "";
    map.classList.add("hidden");

    let destinations;
    if (typeSelect.value === "mountains") {
        destinations = mountains;
    } else if (typeSelect.value === "beaches") {
        destinations = beaches;
    } else {
        return;
    }

    for (let name in destinations) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = name;

        a.onclick = (e) => {
            e.preventDefault();
            map.src = destinations[name];
            map.classList.remove("hidden");
        };

        li.append(a);
        list.append(li);
    }
};