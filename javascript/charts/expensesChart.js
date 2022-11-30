
var xValues = ["Jan", "Feb", "Mar", "April", "May", "June", "July"];

new Chart("expensesChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [100, 300, 180, 120, 400, 300, 170],
            borderWidth:2,
            backgroundColor: "rgba(69, 90, 125,0.5)",
            borderColor: "#455f7f",
            fill: true,
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
              
            },
            x: {
               
                grid: {
                    display: false
                }
            },


        }
    }

});