
var msr = document.getElementById('monthlyChart').getContext('2d');
var gradientStroke = msr.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#c91a4e");
gradientStroke.addColorStop(1, "#4559e9");
var monthChart = new Chart(msr, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Medicine",
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: gradientStroke,
            borderWidth: '5',
            data: [44710, 65723, 54321, 45351, 60333, 47640, 70032],
        }]
    },

    // Configuration options go here
    options: {}
});
var psr = document.getElementById('packageChart').getContext('2d');
var packChart = new Chart(psr, {
    type: 'doughnut',
    data: {
        labels: ["BSIT", "CE", "BSA", "EE", "BSP", "BSED"],
        datasets: [{
            label: '# of Votes',
            data: [14710, 25723, 44321, 75351, 10333, 7640],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});

var fr = document.getElementById('financialChart').getContext('2d');
var finStroke = fr.createLinearGradient(500, 0, 100, 0);
finStroke.addColorStop(0, "#c91a4e");
finStroke.addColorStop(1, "#f2cb0c");
var finChart = new Chart(fr, {
    type: 'bar',
    data: {
    datasets: [{
          label: 'Complaints',
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: finStroke,
        borderWidth: '5',
          data: [75, 54, 83, 78],

          // Changes this dataset to become a line
          type: 'line'
        },{
          label: 'Frequency',
          data: [75, 45, 60, 83],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',],
            } 
               ],
    labels: ['January', 'February', 'March', 'April']
  },
    options: {
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
    }
});