var xValues = ["M", "T", "W", "T", "F", "S", "S"];

new Chart("revenueChartSmall", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            data: [2300, 210, 3000, 4400, 275, 500, 2000],
            color: "white",
            borderColor: "green",
            backgroundColor: "#9163ba",
            fill: false,

        }]
    },

    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            display: false,
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false
                }
            },
            x: {
                display: false,
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