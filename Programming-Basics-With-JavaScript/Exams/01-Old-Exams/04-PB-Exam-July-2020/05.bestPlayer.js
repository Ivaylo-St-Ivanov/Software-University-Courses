function bestPlayer(input) {

    let index = 0;
    let current = input[index++];

    let bestPlayer = "";
    let bestscore = 0;

    while (current !== "END") {
        let playerName = current;
        let score = Number(input[index++]);
        if (score > bestscore) {
            bestscore = score;
            bestPlayer = playerName;
            
            // Ако футболистът е вкарал 10 или повече гола, програмата трябва да спре.
            if (score > 9) {
                break;
            }
        }

        current = input[index++];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (bestscore >= 3) {
        console.log(`He has scored ${bestscore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestscore} goals.`);
    }
}
bestPlayer(["Neymar"
    , "2"
    , "Ronaldo"
    , "1"
    , "Messi"
    , "3"
    , "END"]);