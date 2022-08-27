function gramophone(band, album, song) {

    const songDurationInSec = band.length * album.length * song.length / 2;
    // The plate makes a full rotation every 2.5 seconds.
    const rotations = Math.ceil(songDurationInSec / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');