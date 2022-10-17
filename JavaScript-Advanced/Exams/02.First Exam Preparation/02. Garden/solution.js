class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
            if (quantity < 1) {
                throw new Error('The quantity cannot be zero or negative.');
            }

            const plant = this.plants.find(x => x.plantName == plantName);
            if (!plant) {
                throw new Error(`There is no ${plantName} in the garden.`);
            }
            if (plant.ripe) {
                throw new Error(`The ${plantName} is already ripe.`);
            }
            plant.ripe = true;
            plant.quantity += quantity;
            return quantity == 1 ? `${quantity} ${plantName} has successfully ripened.` : `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(x => x.plantName == plantName);
        if (plantIndex == -1) {  
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        const plant = this.plants[plantIndex];
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });

        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }   

    generateReport() {
        const firstRow = `The garden has ${this.spaceAvailable} free space left.`;

        const sortedPlants = this.plants.map(x => x.plantName).sort((a, b) => a.localeCompare(b));
        const secondRow = `Plants in the garden: ${sortedPlants.join(', ')}`;

        let thirdRow = 'Plants in storage: The storage is empty.';
        if (this.storage.length) {
            const storageOutput = this.storage.map(x => `${x.plantName} (${x.quantity})`);
            thirdRow = `Plants in storage: ${storageOutput.join(', ')}`;
        }

        return [firstRow, secondRow, thirdRow].join('\n');
    }
}

const myGarden = new Garden(250);

console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



