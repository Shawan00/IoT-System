document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: 1, time: '08:00:00', temperature: '23', humidity: '60', brightness: '200' },
        { id: 2, time: '08:00:02', temperature: '24', humidity: '61', brightness: '205' },
        { id: 3, time: '08:00:04', temperature: '22', humidity: '62', brightness: '210' },
        { id: 4, time: '08:00:06', temperature: '23', humidity: '60', brightness: '200' },
        { id: 5, time: '08:00:08', temperature: '24', humidity: '63', brightness: '195' },
        { id: 6, time: '08:00:10', temperature: '25', humidity: '59', brightness: '220' },
        { id: 7, time: '08:00:12', temperature: '26', humidity: '58', brightness: '225' },
        { id: 8, time: '08:00:14', temperature: '24', humidity: '60', brightness: '210' },
        { id: 9, time: '08:00:16', temperature: '23', humidity: '61', brightness: '215' },
        { id: 10, time: '08:00:18', temperature: '22', humidity: '62', brightness: '200' },
        { id: 11, time: '08:00:20', temperature: '23', humidity: '63', brightness: '205' },
        { id: 12, time: '08:00:22', temperature: '24', humidity: '64', brightness: '210' },
        { id: 13, time: '08:00:24', temperature: '25', humidity: '65', brightness: '215' },
        { id: 14, time: '08:00:26', temperature: '26', humidity: '66', brightness: '220' },
        { id: 15, time: '08:00:28', temperature: '27', humidity: '67', brightness: '225' }
        
        // Add more rows as needed
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
                <td>${row.temperature}</td>
                <td>${row.humidity}</td>
                <td>${row.brightness}</td>
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
