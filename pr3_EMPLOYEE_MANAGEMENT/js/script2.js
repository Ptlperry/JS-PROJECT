let empTable = document.querySelector('#empTable tbody');

let employees = JSON.parse(localStorage.getItem('employees')) || [];

let getData = () => {
    empTable.innerHTML = '';

    if (employees.length === 0) {
        empTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-danger">No Details!!</td>
            </tr>
        `;
        return;
    }

    employees.forEach((emp, index) => {
        let { ename, salary, post, manager, id } = emp;
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${ename}</td>
            <td>${salary}</td>
            <td>${post}</td>
            <td>${manager}</td>
            <td>
                <button onclick="handleDelete(${id})" class="btn btn-outline-primary btn-sm">Delete</button>
            </td>
        `;

        empTable.appendChild(row);
    });
};

const handleDelete = (id) => {
    employees = employees.filter((emp) => emp.id !== id);
    localStorage.setItem('employees', JSON.stringify(employees));
    getData();
};

// Initial load
getData();
