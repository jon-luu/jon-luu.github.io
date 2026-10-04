class Vacation {
    constructor(title, type, description, thingsToDo, pic, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.pic = pic;
        this.mapSrc = mapSrc;
    }

    //the card that goes in the gallery
    get item() {
        const section = document.createElement("section");
        section.classList.add("vacation");

        section.append(this.vacationName());
        section.append(this.vacationType());
        section.append(this.vacationImage());

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    vacationName() {
        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        return h3;
    }

    vacationType() {
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;
        return p;
    }

    vacationImage() {
        const img = document.createElement("img");
        img.src = `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    //map on the left side of the popup
    vacationMap() {
        const iframe = document.createElement("iframe");
        iframe.src = this.mapSrc;
        return iframe;
    }

    //info on the right side of the popup
    moreInfo() {
        const div = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.textContent = this.title;
        div.append(h3);

        div.append(this.pInfo("Type", this.type));
        div.append(this.pInfo("Description", this.description));
        div.append(this.pInfo("Things To Do", this.thingsToDo));

        return div;
    }

    pInfo(property, value) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${property}</strong>: ${value}`;
        return p;
    }

    showModal() {
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = "";
        modalBody.append(this.vacationMap());
        modalBody.append(this.moreInfo());

        document.getElementById("modal").classList.add("w3-show");
    }
}

//builds the google map link for a place
const getMap = (place) => {
    return `https://maps.google.com/maps?q=${place}&output=embed`;
};

const vacations = [];

vacations.push(new Vacation("Asheville", "Mountain", "An artsy mountain city.", "Visit the Biltmore Estate.", "asheville.jpg", getMap("Asheville, NC")));
vacations.push(new Vacation("Boone", "Mountain", "A college town in the Blue Ridge Mountains.", "Go skiing, hike Grandfather Mountain.", "boone.jpg", getMap("Boone, NC")));
vacations.push(new Vacation("Table Rock", "Mountain", "A state park with a famous granite cliff.", "Hike to the summit.", "table-rock.jpg", getMap("Table Rock State Park, SC")));
vacations.push(new Vacation("Myrtle Beach", "Beach", "A busy beach city on the Grand Strand.", "Walk the Boardwalk, ride the SkyWheel.", "myrtle-beach.jpg", getMap("Myrtle Beach, SC")));
vacations.push(new Vacation("Folly Beach", "Beach", "A laid-back surf town near Charleston.", "Surf, walk the pier.", "folly-beach.jpg", getMap("Folly Beach, SC")));
vacations.push(new Vacation("Pawleys Island", "Beach", "A quiet, historic island.", "Relax on the beach, kayak the marsh.", "pawleys-island.jpg", getMap("Pawleys Island, SC")));
vacations.push(new Vacation("Gatlinburg", "Mountain", "A mountain town next to the Great Smoky Mountains.", "Hike the Smokies, ride the SkyLift.", "gatlinburg.jpg", getMap("Gatlinburg, TN")));
vacations.push(new Vacation("Hilton Head", "Beach", "A resort island with wide beaches and bike trails.", "Bike the beach, take a dolphin tour.", "hilton-head.jpg", getMap("Hilton Head Island, SC")));

const vacationsDiv = document.querySelector(".vacations");

vacations.forEach((vacation) => {
    vacationsDiv.append(vacation.item);
});

//close the popup
document.getElementById("close").onclick = () => {
    document.getElementById("modal").classList.remove("w3-show");
};