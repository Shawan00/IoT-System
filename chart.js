const ctx1 = document.getElementById('temperatureChart').getContext('2d');
        const temperatureChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
                datasets: [{
                    label: 'Temperature (°C)',
                    data: [20, 20, 20.5, 21, 22, 23, 24, 25, 25, 24.3, 22.8, 22, 21, 20, 20],
                    borderColor: '#FD7238',
                    backgroundColor: '#FD723870',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 1,
                    pointBackgroundColor: '#FD7238'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false  
                        },
                        ticks: {
                            display: false  
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)'
                        },
                        suggestedMin: 15,
                        suggestedMax: 40
                    }
                }
            }
        });

const ctx2 = document.getElementById('humidityChart').getContext('2d');
const humidityChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        datasets: [{
            label: 'Humidity (%)',
            data: [55, 50, 53, 55, 55, 40, 47, 60, 70, 75, 65, 48, 44, 40, 43],
            borderColor: '#3C91E6',
            backgroundColor: '#3C91E670',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 1,
            pointBackgroundColor: '#3C91E6'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false  
                },
                ticks: {
                    display: false  
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Humidity (%)'
                },
                suggestedMin: 30,
                suggestedMax: 100
            }
        }
    }
});

const ctx3 = document.getElementById('brightnessChart').getContext('2d');
        const brightnessChart = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
                datasets: [{
                    label: 'Brightness (lx)',
                    data: [100, 100, 100, 100, 100, 140, 170, 237, 246, 260, 268, 292, 300, 316, 283],
                    borderColor: '#FFCE26',
                    backgroundColor: '#FFCE2670',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 1,
                    pointBackgroundColor: '#FFCE26'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false  
                        },
                        ticks: {
                            display: false  
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Brightness (lx)'
                        },
                        suggestedMin: 50,
                        suggestedMax: 350
                    }
                }
            }
        });

function updateLabel(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.textContent = 'On';
    } else {
        label.textContent = 'Off';
    }
}