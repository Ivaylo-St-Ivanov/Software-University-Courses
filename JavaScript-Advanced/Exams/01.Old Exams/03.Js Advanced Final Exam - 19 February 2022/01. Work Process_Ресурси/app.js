function solve() {

    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birthday = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');

    document.getElementById('add-worker').addEventListener('click', add);

    const tbodyElement = document.getElementById('tbody');
    const budget = document.getElementById('sum');
    let budgetSum = 0;

    function add(e) {
        e.preventDefault();

        const firstNameInput = firstName.value;
        const lastNameInput = lastName.value;
        const emailInput = email.value;
        const birthdayInput = birthday.value;
        const positionInput = position.value;
        const salaryInput = Number(salary.value);

        if (!firstNameInput || !lastNameInput || !emailInput || !birthdayInput || !positionInput || !salaryInput) {
            return;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${firstNameInput}</td>
                        <td>${lastNameInput}</td>
                        <td>${emailInput}</td>
                        <td>${birthdayInput}</td>
                        <td>${positionInput}</td>
                        <td>${salaryInput}</td>
                        <td>
                            <button class='fired'>Fired</button>
                            <button class="edit">Edit</button>
                        </td>`;
        tbodyElement.appendChild(tr);

        budgetSum += salaryInput;
        budget.textContent = `${budgetSum}.00`;

        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthday.value = '';
        position.value = '';
        salary.value = '';

        tr.querySelector('.edit').addEventListener('click', edit);
        tr.querySelector('.fired').addEventListener('click', fired);

        function edit(e) {
           e.target.parentElement.parentElement.remove();

           firstName.value = firstNameInput;
           lastName.value = lastNameInput;
           email.value = emailInput;
           birthday.value = birthdayInput;
           position.value = positionInput;
           salary.value = salaryInput;

           budgetSum -= salaryInput;
           budget.textContent = `${budgetSum}.00`;
        }

        function fired(e) {
            e.target.parentElement.parentElement.remove();
            
            budgetSum -= salaryInput;
            budget.textContent = `${budgetSum}.00`;
        }
    }
}
solve()