
var xValues = ["Jan", "Feb", "Mar", "April", "May", "June"];

new Chart("profileReportChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [80, 300, 320, 500, 400, 800],
            borderColor: "#e69e10",
            fill: false,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false
                }
            },
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false
                }
            },


        }
    }

});