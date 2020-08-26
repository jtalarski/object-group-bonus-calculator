const employees = [{
        name: "Atticus",
        employeeNumber: "2405",
        annualSalary: "47000",
        reviewRating: 3,
    },
    {
        name: "Jem",
        employeeNumber: "62347",
        annualSalary: "63500",
        reviewRating: 4,
    },
    {
        name: "Scout",
        employeeNumber: "6243",
        annualSalary: "74750",
        reviewRating: 5,
    },
    {
        name: "Robert",
        employeeNumber: "26835",
        annualSalary: "66000",
        reviewRating: 1,
    },
    {
        name: "Mayella",
        employeeNumber: "89068",
        annualSalary: "35000",
        reviewRating: 1,
    },
];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?
// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
console.log(employees);
/*## Processing Employee Bonuses
Loop over the `employees` array and do the following:
* use each employee object as the input to the function described below.
* `console.log` the results of each iteration.
## Function Logic
Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:
* The `name` property should contain the employee's name.
* The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
* The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
* The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.
employeeNumber.length>4 then they get the bonus
- However, if their annual income is greater than \$65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% or below 0% total.
NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.
*/
let newEmployees = [];

function bonusCalculation(employees) {
    newEmployees = [];
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);
        calculateBonusPercentage(employees[i]);
    }

    function calculateBonusPercentage(object) {
        const maxBonusPercent = 0.13;
        const minBonusPercent = 0;
        let bonusPercent = 0;
        if (object.employeeNumber < 10000) {
            bonusPercent = 0.05;
            //console.log(bonusPercent);
        }
        if (object.annualSalary > 65000) {
            bonusPercent -= 0.01;
            //console.log();
        }
        if (object.reviewRating < 3) {
            console.log(object.name + " no bonus ");
        } else if (object.reviewRating === 3) {
            bonusPercent += 0.04;
            console.log(bonusPercent);
            console.log(object.name + " 4% bonus ");
        } else if (object.reviewRating === 4) {
            bonusPercent += 0.06;
            console.log(bonusPercent);
            console.log(object.name + " 6% bonus ");
        } else if (object.reviewRating === 5) {
            bonusPercent += 0.1;
            console.log(bonusPercent);
            console.log(object.name + " 10% bonus ");
        }
        if (bonusPercent > maxBonusPercent) {
            bonusPercent = 0.13;
        } else if (bonusPercent < minBonusPercent) {
            bonusPercent = 0;
        }
        let totalBonus = Number(object.annualSalary) * bonusPercent;
        console.log("Bonus amount : $", totalBonus);
        let totalCompensation = Number(object.annualSalary) + totalBonus;
        console.log("New salary amount : $", totalCompensation);
        newEmployees.push({
            name: object.name,
            bonusPercentage: bonusPercent,
            totalBonus: totalBonus,
            totalCompensation: totalCompensation,
        });
        console.log(newEmployees);
    }
}
bonusCalculation(employees);