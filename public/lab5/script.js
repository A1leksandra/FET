document.addEventListener('DOMContentLoaded', function () {
    const variantNumber = 8;

    const form = document.getElementById('infoForm');

    function clearErrors() {
        const rows = form.querySelectorAll('.form-row');
        rows.forEach(row => row.classList.remove('error'));
    }

    function validateField(value, regex) {
        return regex.test(value.trim());
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const fullNameInput = document.getElementById('fullName');
        const groupInput = document.getElementById('group');
        const idCardInput = document.getElementById('idCard');
        const birthDateInput = document.getElementById('birthDate');
        const emailInput = document.getElementById('email');

        const fullNameRegex = /^[A-Za-zА-ЯІЇЄҐа-яіїєґ'’\-]+ [A-ZА-ЯІЇЄҐ]\.[A-ZА-ЯІЇЄҐ]\.$/u;
        const groupRegex = /^[A-Za-zА-ЯІЇЄҐ]{2}-\d{2}$/u;
        const idCardRegex = /^[A-Za-zА-ЯІЇЄҐ]{2} №\d{6}$/u;
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;

        let hasError = false;

        if (!validateField(fullNameInput.value, fullNameRegex)) {
            form.querySelector('[data-field="fullName"]').classList.add('error');
            hasError = true;
        }

        if (!validateField(groupInput.value, groupRegex)) {
            form.querySelector('[data-field="group"]').classList.add('error');
            hasError = true;
        }

        if (!validateField(idCardInput.value, idCardRegex)) {
            form.querySelector('[data-field="idCard"]').classList.add('error');
            hasError = true;
        }

        if (!validateField(birthDateInput.value, dateRegex)) {
            form.querySelector('[data-field="birthDate"]').classList.add('error');
            hasError = true;
        }

        if (!validateField(emailInput.value, emailRegex)) {
            form.querySelector('[data-field="email"]').classList.add('error');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        const newWin = window.open('', '_blank', 'width=500,height=400');
        const html = `
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Введені дані</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h2 { margin-bottom: 10px; }
                    p { margin: 4px 0; }
                </style>
            </head>
            <body>
                <h2>Введена інформація</h2>
                <p><strong>ПІБ:</strong> ${fullNameInput.value}</p>
                <p><strong>Група:</strong> ${groupInput.value}</p>
                <p><strong>ID-card:</strong> ${idCardInput.value}</p>
                <p><strong>Дата народження:</strong> ${birthDateInput.value}</p>
                <p><strong>e-mail:</strong> ${emailInput.value}</p>
            </body>
            </html>
        `;
        newWin.document.open();
        newWin.document.write(html);
        newWin.document.close();
    });

    const table = document.getElementById('numberTable');
    let specialCell = null;

    let number = 1;
    for (let r = 0; r < 6; r++) {
        const row = document.createElement('tr');
        for (let c = 0; c < 6; c++) {
            const cell = document.createElement('td');
            cell.textContent = number;
            if (number === variantNumber) {
                specialCell = cell;
                cell.classList.add('special');
            }
            row.appendChild(cell);
            number++;
        }
        table.appendChild(row);
    }

    const colorPicker = document.getElementById('colorPicker');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    if (specialCell) {
        specialCell.addEventListener('mouseover', function () {
            specialCell.style.backgroundColor = getRandomColor();
        });

        specialCell.addEventListener('mouseout', function () {
            specialCell.style.backgroundColor = '';
        });

        specialCell.addEventListener('click', function () {
            specialCell.style.backgroundColor = colorPicker.value;
        });

        specialCell.addEventListener('dblclick', function () {
            const colIndex = specialCell.cellIndex;
            const rows = table.rows;
            const color = colorPicker.value;

            for (let r = 0; r < rows.length; r++) {
                const cells = rows[r].cells;
                for (let c = colIndex; c < cells.length; c += 2) {
                    cells[c].style.backgroundColor = color;
                }
            }
        });
    }
});
