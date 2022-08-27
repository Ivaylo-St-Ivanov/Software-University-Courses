function salary(input) {

    const fineForFacebook = 150;
    const fineForInstagram = 100;
    const fineForReddit = 50;

    let index = 0;
    let openTabsCount = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let isHaveSalary = true;

    for (let i = 1; i <= openTabsCount; i++) {
        let currentTab = input[index];
        index++;

        switch (currentTab) {
            case "Facebook": salary -= fineForFacebook; break;
            case "Instagram": salary -= fineForInstagram; break;
            case "Reddit": salary -= fineForReddit; break;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            isHaveSalary = false;
            break;
        }
    }

    if (isHaveSalary) {
        console.log(Math.trunc(salary));
    }
}
salary(["3", "500", "Facebook", "Dev.bg", "SoftUni"]);