class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let invites = [];
        for (const player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            playerValue = Number(playerValue);

            const currentName = this.invitedPlayers.find(x => x.name == name);
            if (!currentName) {
                this.invitedPlayers.push({ name, age, playerValue });
                invites.push(name);
            } else {
                if (playerValue > currentName.playerValue) {
                    currentName.playerValue = playerValue;
                }
            }
        }
        return `You successfully invite ${invites.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        const info = selectedPlayer.split('/');
        const name = info[0];
        const playerOffer = info[1];

        const currentName = this.invitedPlayers.find(x => x.name == name);
        if (!currentName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (playerOffer < currentName.playerValue) {
            const difference = currentName.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`);
        }

        currentName.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const currentName = this.invitedPlayers.find(x => x.name == name);
        if (!currentName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currentName.age < age) {
            const difference = age - currentName.age;
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let output = ['Players list:'];
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
                           .forEach(el => output.push(`Player ${el.name}-${el.playerValue}`));
        return output.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());