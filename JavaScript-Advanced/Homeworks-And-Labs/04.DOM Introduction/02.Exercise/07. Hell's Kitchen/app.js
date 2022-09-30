function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      'use strict';
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurantInfo = {};
      let bestRestaurant;
      let bestAverageSalary = 0;

      for (const current of input) {
         const [restaurant, workers] = current.split(' - ');
         const workersArray = workers.split(', ');

         for (const worker of workersArray) {
            const [name, salary] = worker.split(' ');

            if (!restaurantInfo.hasOwnProperty(restaurant)) {
               restaurantInfo[restaurant] = {};
            }
            restaurantInfo[restaurant][name] = Number(salary);
         }
      }
      const entries = Object.entries(restaurantInfo);

      for (const [restaurant, info] of entries) {
         const salaries = Object.values(info);
         let totalSalaries = 0;

         for (const salary of salaries) {
            totalSalaries += salary;
         }
         const averageSalary = totalSalaries / salaries.length;
         if (averageSalary > bestAverageSalary) {
            bestRestaurant = restaurant;
            bestAverageSalary = averageSalary;
         }
      }
      const sorted = Object.entries(restaurantInfo[bestRestaurant]).sort((a, b) => b[1] - a[1]);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${sorted[0][1].toFixed(2)}`;
      let result = '';
      for (const [worker, salary] of sorted) {
         result += `Name: ${worker} With Salary: ${salary} `;
      }
      document.querySelector('#workers p').textContent = result;
   }
}