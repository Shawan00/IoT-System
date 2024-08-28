document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: 1, time: '08:00:00', app: 'Fan', action: 'Turn on' },
        { id: 2, time: '08:01:02', app: 'Light', action: 'Turn off' },
        { id: 3, time: '08:01:04', app: 'Air Conditioner', action: 'Turn on' },
        { id: 4, time: '09:20:06', app: 'Fan', action: 'Turn off' },
        { id: 5, time: '09:45:08', app: 'Light', action: 'Turn on' },
        { id: 6, time: '10:04:10', app: 'Air Conditioner', action: 'Turn off' },
        { id: 7, time: '10:30:12', app: 'Fan', action: 'Turn on' },
        { id: 8, time: '11:43:14', app: 'Light', action: 'Turn off' },
        { id: 9, time: '12:00:16', app: 'Air Conditioner', action: 'Turn on' },
        { id: 10, time: '12:20:18', app: 'Fan', action: 'Turn off' },
        { id: 11, time: '13:50:20', app: 'Light', action: 'Turn on' },
        { id: 12, time: '13:50:22', app: 'Air Conditioner', action: 'Turn off' },
        { id: 13, time: '14:00:43', app: 'Fan', action: 'Turn on' },
        { id: 14, time: '15:20:26', app: 'Light', action: 'Turn off' },
        { id: 15, time: '16:00:28', app: 'Air Conditioner', action: 'Turn on' }
    ];
    
    const rowsPerPage = 12;
    const tableBody = document.getElementById('table-body');
    const pagination = document.getElementById('pagination');

    function renderTable(page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = data.slice(start, end);

        pageData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th scope="row">${row.id}</th>
                <td>${row.time}</td>
                <td>${row.app}</td>
                <td>${row.action}</td>
            `;
            tableBody.appendChild(tr);
        });
    }

    function renderPagination() {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(data.length / rowsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.className = 'page-item';
            li.innerHTML = `
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            `;
            pagination.appendChild(li);
        }
    }

    function setupPagination() {
        renderPagination();
        renderTable(1);

        pagination.addEventListener('click', (event) => {
            if (event.target.classList.contains('page-link')) {
                event.preventDefault();
                const page = parseInt(event.target.getAttribute('data-page'), 10);
                renderTable(page);
            }
        });
    }

    setupPagination();
});
