var xValues = ["Jan", "Feb", "Mar", "April", "May", "June", "July"];

new Chart("revenueChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      data: [33, 43, 40, 29, 30, 41, 48],
      backgroundColor: "#9163ba",
      color: "white",
      borderWidth: 1,
      borderRadius: 20,
      fill: false
    },
    {
      data: [-2, -15, -3, -9, -12, -11, -23],
      backgroundColor: "#3ebdb2",
      color: "white",
      borderWidth: 1,

      borderRadius: 20,
      fill: false
    }]
  },

  options: {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {

      x: {
        grid: {
          display: false
        }
      },

    }
  }
});