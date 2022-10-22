class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        const currentParticipant = this.listOfParticipants.find(x => x.name == name);

        if (currentParticipant) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const currentParticipantIndex = this.listOfParticipants.findIndex(x => x.name == name);
        const currentParticipant = this.listOfParticipants[currentParticipantIndex];

        if (!currentParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(currentParticipantIndex, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const player = this.listOfParticipants.find(x => x.name == participant1);
        const secondPlayer = this.listOfParticipants.find(x => x.name == participant2);
        if (typeOfGame == 'WaterBalloonFights') {
            if (!player || !secondPlayer) {
                throw new Error('Invalid entered name/s.');
            }
            if (player.condition != secondPlayer.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (player.power > secondPlayer.power) {
                player.wins++;
                return `The ${player.name} is winner in the game ${typeOfGame}.`;
            } else if (player.power < secondPlayer.power) {
                secondPlayer.wins++;
                return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }
        } else {
            if (!player) {
                throw new Error('Invalid entered name/s.');
            }

            player.power += 20;
            return `The ${player.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let output = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
                               .forEach(el => output.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`));
        return output.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());