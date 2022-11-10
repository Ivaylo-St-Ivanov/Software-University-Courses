const tbody = document.querySelector('#results tbody');

document.getElementById('form').addEventListener('submit', addStudent);

loadStudents();

async function addStudent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');
    const studentInfo = { firstName, lastName, facultyNumber, grade };

    await saveStudent(studentInfo);
    tbody.appendChild(createElement(studentInfo));
    event.target.reset();
}

async function saveStudent(studentInfo) {
    const result = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentInfo)
    });

    return result;
}

async function loadStudents() {
    const students = await getCollection();

    tbody.replaceChildren(...students);
}

async function getCollection() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    return Object.values(data).map(s => createElement(s));
}

function createElement(student) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<th>${student.firstName}</th>
    <th>${student.lastName}</th>
    <th>${student.facultyNumber}</th>
    <th>${student.grade}</th>`;

    return tr;
}