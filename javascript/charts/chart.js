var xValues = ["Jan", "Feb", "Mar", "April", "May", "June"];

new Chart("orderChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [20, 100, 210, 150, 30, 275],
            borderColor: "green",
            fill: false,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }

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