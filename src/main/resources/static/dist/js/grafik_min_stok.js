//$(document).ready(function()
//      {
//var cx = document.getElementById('ChartMinStok').getContext('2d');
//  var dts = {
//    type: 'bar',
//    data: {
//      labels: [],
//      datasets: [{
//        label: 'Margin ',
//        backgroundColor: 'red',
//        borderColor: 'rgba(200, 200, 200, 0.75)',
//        hoverBackgroundColor: 'rgba(151,187,205,0.8)',
//        hoverBorderColor: 'rgba(200, 200, 200, 1)',
//        data: []
//      }]
//    },
//    options: {
//      scales: {
//        yAxes: [{
//          ticks: {
//            beginAtZero: true
//          }
//        }]
//      }
//    }
//  }
//
//  var getData = function(chartdata) {
//    $.ajax({
//      url: 'http://localhost:1111/MinStok',
//      success: function(data)
//      {
//        data.forEach(function(dts)
//        {
//          chartdata.data.labels.push(dts[1]);
//          chartdata.data.datasets[0].data.push(dts[2]);
//        });
//        var myChart = new Chart(cx, chartdata);
//
//      }
//    });
//  };
//  getData(dts);
//  });
