function gladiatorInventory(input) {

    const inventory = input.shift().split(' ');

    for (const current of input) {
        const [command, equipment] = current.split(' ');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    const part = inventory.splice(inventory.indexOf(equipment), 1);
                    inventory.push(part[0]);
                }
                break;
            case 'Upgrade':
                const [part, upgrade] = equipment.split('-');
                if (inventory.includes(part)) {
                    const index = inventory.indexOf(part) + 1;
                    inventory.splice(index, 0, `${part}:${upgrade}`)
                }
                break;
        }
    }

    let result = '';

    for (const current of inventory) {
        result += `${current} `;
    }

    console.log(result);
}

gladiatorInventory(['SWORD Shield Spear',

    'Buy Bag',

    'Trash Shield',

    'Repair Spear',

    'Upgrade SWORD-Steel']);