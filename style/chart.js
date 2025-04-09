const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'];

const firstChartData = {
    labels: labels,
    datasets: [{
        label: 'Total Cases A',
        data: [11, 25, 17, 34, 44, 25, 34, 46],
        borderColor: '#06E6B2',
        backgroundColor: '#09cea0',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 7
    }]
};

const secondChartData = {
    labels: labels,
    datasets: [{
        label: 'Total Cases B',
        data: [57, 38, 52, 42, 53, 37, 27, 5],
        borderColor: 'tomato',
        backgroundColor: 'black',
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 7
    }]
};

const config1 = {
    type: 'line',
    data: firstChartData,
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 60
            }
        }
    }
};

const config2 = {
    type: 'line',
    data: secondChartData,
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 60
            }
        }
    }
};

new Chart(document.getElementById('first-chart'), config1);
new Chart(document.getElementById('second-chart'), config2);