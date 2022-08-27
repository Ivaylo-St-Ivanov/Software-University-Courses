function songs(input) {

    let inputCopy = input.slice(0);

    class SongsList {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        playSong() {
            console.log(`${this.name}`);
        }
    }

    let numberOfSongs = +inputCopy.shift();
    let command = inputCopy.pop();
    let playing = [];
    for (let i = 0; i < numberOfSongs; i++) {
        let current = inputCopy[i].split('_');
        let playFromTypeList = new SongsList(current[0], current[1], current[2]);
        if (command === 'all') {
            playing.push(playFromTypeList);
        } else if (current[0] === command) {
            playing.push(playFromTypeList);
        }
    }

    for (let song of playing) {
        song.playSong();
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);