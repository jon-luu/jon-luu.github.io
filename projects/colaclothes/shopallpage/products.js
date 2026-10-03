// Products for this page.
// Each product builds its own card for the gallery and its own popup.

class Product {
  constructor(name, brand, price, size, condition, pic, link) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.size = size;
    this.condition = condition;
    this.pic = pic;
    this.link = link;
  }

  //the card that goes in the gallery
  get item() {
    //the first product links to the preview page, the rest open the popup
    const card = document.createElement(this.link ? "a" : "article");
    card.classList.add("product-card");

    card.append(this.productImage());
    card.append(this.productBody());

    if (this.link) {
      card.href = this.link;
    } else {
      card.onclick = () => {
        this.showModal();
      };
    }

    return card;
  }

  productImage() {
    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = `images/${this.pic}`;
    img.alt = this.name;
    return img;
  }

  //name, brand, price and tags under the picture
  productBody() {
    const div = document.createElement("div");
    div.classList.add("product-body");

    div.append(this.productInfo());
    div.append(this.productMeta());

    return div;
  }

  productInfo() {
    const div = document.createElement("div");
    div.classList.add("product-info");

    const name = document.createElement("div");
    name.classList.add("product-name");
    name.textContent = this.name;
    div.append(name);

    const brand = document.createElement("div");
    brand.classList.add("product-brand");
    brand.textContent = this.brand;
    div.append(brand);

    return div;
  }

  productMeta() {
    const div = document.createElement("div");
    div.classList.add("product-meta");

    const price = document.createElement("div");
    price.classList.add("product-price");
    price.textContent = this.price;
    div.append(price);

    const badges = document.createElement("div");
    badges.classList.add("product-badges");
    badges.append(this.badge(this.size));

    const condition = this.badge(this.condition);
    condition.classList.add("product-badge--condition");
    badges.append(condition);

    div.append(badges);

    return div;
  }

  badge(text) {
    const div = document.createElement("div");
    div.classList.add("product-badge");
    div.textContent = text;
    return div;
  }

  //picture on the left side of the popup
  modalImage() {
    const img = document.createElement("img");
    img.src = `images/${this.pic}`;
    img.alt = this.name;
    return img;
  }

  //info on the right side of the popup
  moreInfo() {
    const div = document.createElement("div");
    div.classList.add("modal-info");

    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    div.append(h3);

    div.append(this.pInfo("Brand", this.brand));
    div.append(this.pInfo("Price", this.price));
    div.append(this.pInfo("Details", this.size));
    div.append(this.pInfo("Condition", this.condition));

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
    modalBody.append(this.modalImage());
    modalBody.append(this.moreInfo());

    document.getElementById("modal").classList.add("show");
  }
}

const products = [];

products.push(new Product("Patagonia Tres 3-in-1 Parka", "Patagonia", "$95.00", "Size M", "Excellent", "patagonia-parka.jpg"));
products.push(new Product("Salomon Quest 4D 3 GTX Boots", "Salomon", "$78.00", "Size 9", "Excellent", "salomon-boots.jpg"));
products.push(new Product("Patagonia R1 Pullover", "Patagonia", "$42.00", "Size L", "Good", "patagonia-r1.jpg"));
products.push(new Product("REI Co-op Half Dome 2 Plus Tent", "REI Co-op", "$150.00", "Sleeps 2", "Like New", "rei-tent.jpg"));
products.push(new Product("Smartwool Merino 150 Base Layer", "Smartwool", "$28.00", "Size L", "Worn In", "smartwool-base.jpg"));
products.push(new Product("Prana Stretch Zion Convertible Pants", "Prana", "$35.00", "Size 30", "Very Good", "prana-pants.jpg"));
products.push(new Product("Osprey Atmos 65L Backpack", "Osprey", "$95.00", "65L", "Excellent", "osprey-pack.jpg"));
products.push(new Product("Carhartt WIP Detroit Jacket", "Carhartt WIP", "$65.00", "Size M", "Good", "carhartt-jacket.jpg"));

const productGrid = document.querySelector(".product-grid");

products.forEach((product) => {
  productGrid.append(product.item);
});

//close the popup
document.getElementById("close").onclick = () => {
  document.getElementById("modal").classList.remove("show");
};