function bills(input) {

    const billForWater = 20;
    const billForNet = 15;

    const period = Number(input[0]);
    let index = 1;

    const totalBillForWater = billForWater * period;
    const totalBillForNet = billForNet * period;
    let totalBillForElecrticity = 0;
    let totalAnotherBills = 0;

    for (let i = 1; i <= period; i++) {
        let currentBillForElectricity = Number(input[index++]);
        totalBillForElecrticity += currentBillForElectricity;
        // • за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
        totalAnotherBills = (totalBillForElecrticity + totalBillForWater + totalBillForNet) * 1.2;
    }

    const averageBillsPerMonth = (totalBillForElecrticity + totalBillForWater + totalBillForNet + totalAnotherBills) / period;
    console.log(`Electricity: ${totalBillForElecrticity.toFixed(2)} lv`);
    console.log(`Water: ${totalBillForWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalBillForNet.toFixed(2)} lv`);
    console.log(`Other: ${totalAnotherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBillsPerMonth.toFixed(2)} lv`);
}
bills(["5"
    , "68.63"
    , "89.25"
    , "132.53"
    , "93.53"
    , "63.22"]);