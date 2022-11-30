var lbls = ["Fashion", "Electronics", "Sports", "Decor"];

new Chart("orderStatisticsChart", {
    type: "doughnut",
    data: {
        labels: lbls,
        datasets: [{
            data: [150, 200, 40, 60],
            borderColor: "#333232",
            borderWidth: 1,
            backgroundColor: [
                '#3ebdb2',
                '#823ebd',
                '#3ebd44',
                '#bd793e',
            ],
            hoverOffset: 3,

        }],

    },
    options: {
        cutout: 40,

        plugins: {
            legend: {
                display: false
            }

        },
        scales: {
            y: {
                display: false,
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