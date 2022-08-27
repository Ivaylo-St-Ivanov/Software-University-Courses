function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapislazuli = 0;
    let gold = 0;
    let finalHeight = 0;
    let steps = 0;

    for (let i = base; i > 0; i -= 2) {
        steps++;
        finalHeight += increment;

        let outerLayer = 0;
        let inside = 0;

        if (i == 1) {
            outerLayer = i;
            gold = outerLayer * increment;
        } else if (i == 2) {
            outerLayer = i * i;
            gold = outerLayer * increment;
        } else {
            outerLayer = i * 4 - 4;
            inside = (i - 2) * (i - 2);
            stone += inside * increment;
            if (steps % 5 != 0) {
                marble += outerLayer * increment;
            } else {
                lapislazuli += outerLayer * increment;
            }
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapislazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}
thePyramidOfKingDjoser(23, 0.5);