class Dog {
    constructor(title, breed, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;

    }
    get item() {

    }
}

const dogs = [];

//coco = new Dog("Coco", "Yorkie", 5, "Small", "yorkie.jpg");
//dogs.push(coco);

dogs.push(new Dog("Coco", "Yorkie", 5, "Small", "yorkie.jpg"));
dogs.push(new Dog("Max", "Golden Retriever", 3, "Large", "golden.jpg"));
dogs.push(new Dog("Bella", "Pitbull", 2, "Medium", "labrador.jpg"));