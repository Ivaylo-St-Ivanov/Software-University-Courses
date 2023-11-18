import { Cloth } from "./Cloth";

const sortedMagazine = (data: Cloth[]): Cloth[] => {
    return [...data].sort((a: Cloth, b: Cloth) => a.size - b.size);
}

const findCloth = (data: Cloth[], color: string) => {
    return data.find(x => x.color == color);
}

export class Magazine {
    type: string
    capacity: number
    clothes: Cloth[]

    constructor(type: string, capacity: number) {
        this.type = type
        this.capacity = capacity
        this.clothes = []
    }

    addCloth(cloth: Cloth) {
        return this.clothes.push(cloth);
    }

    removeCloth(color: string) {
        const result = findCloth(this.clothes, color);
        if (result) {
            this.clothes.splice(this.clothes.indexOf(result), 1);
        }

        return Boolean(result);
    }

    getSmallestCloth() {
        return sortedMagazine(this.clothes)[0];
    }

    getCloth(color: string) {
        return findCloth(this.clothes, color);
    }

    getClothCount() {
        return this.clothes.length;
    }

    report() {
        sortedMagazine(this.clothes);

        let result = (`${this.type} magazine contains:\n`);
        this.clothes.forEach(element => {
            result += `${element}\n`
        });

        return result.trim();
    }
}