const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];


function showInfo() {
    const petNum = document.querySelector('#petNum').value;
    const petIndex = parseInt(petNum) - 1;

    if (petIndex >= 0 && petIndex < petsData.length) {
        const pet = petsData[petIndex];
        const info = `Name: ${pet.petName}, Age: ${pet.age}, Weight: ${pet.weightInKilos} kg, Breed: ${pet.breed}`;
        document.querySelector('.selectedPetInfo').textContent = info;
    } else {
        document.querySelector('.selectedPetInfo').textContent = 'Invalid pet number. Please enter a number between 1 and ' + petsData.length + '.';
    }
}