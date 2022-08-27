function histogram(input) {

    let index = 0;
    let num = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0; i < num; i++) {
        let x = Number(input[index]);
        index++;

        if (x < 200) {
            p1Counter += 1;
        } else if (x >= 200 && x < 400) {
            p2Counter += 1;
        } else if (x >= 400 && x < 600) {
            p3Counter += 1;
        } else if (x >= 600 && x < 800) {
            p4Counter += 1;
        } else if (x >= 800) {
            p5Counter += 1;
        }
    }

    const p1Percentage = p1Counter / num * 100;
    const p2Percentage = p2Counter / num * 100;
    const p3Percentage = p3Counter / num * 100;
    const p4Percentage = p4Counter / num * 100;
    const p5Percentage = p5Counter / num * 100;

    console.log(p1Percentage.toFixed(2) + "%");
    console.log(p2Percentage.toFixed(2) + "%");
    console.log(p3Percentage.toFixed(2) + "%");
    console.log(p4Percentage.toFixed(2) + "%");
    console.log(p5Percentage.toFixed(2) + "%");
}
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);