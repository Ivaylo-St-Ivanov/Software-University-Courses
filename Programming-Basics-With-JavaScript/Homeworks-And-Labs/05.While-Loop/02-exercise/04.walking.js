function walking(input) {

    const goal = 10000;

    let index = 0;
    let current = input[index++];
    let totalSteps = 0;

    while (current !== "Going home") {
        let currentSteps = Number(current);
        totalSteps += currentSteps;
        if (totalSteps >= goal) {
            break;
        }

        current = input[index++];
    }

    if (current === "Going home") {
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;
    }

    let difference = Math.abs(totalSteps - goal);
    if (totalSteps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${difference} steps over the goal!`);
    } else {
        console.log(`${difference} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"]);