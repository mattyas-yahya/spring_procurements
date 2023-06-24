//$(document).ready(function()
//      {
//var ct = document.getElementById('ChartBarangLaris').getContext('2d');
//  var dataset = {
//    type: 'Line',
//    data: {
//      labels: [],
//      datasets: [{
//        label: 'Total Terjual ',
//        backgroundColor: '#ec101075',
//               borderColor: 'white',
//               hoverBackgroundColor: 'white',
//               hoverBorderColor: 'white',
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
//      url: 'http://localhost:1111/BarangLaris',
//      success: function(data)
//      {
//        data.forEach(function(el)
//        {
//          chartdata.data.labels.push(el[0]);
//           chartdata.data.datasets[0].data.push(el[1]);
//        });
//        var myChart = new Chart.Line(ct, chartdata);
//
//      }
//    });
//  };
//  getData(dataset);
//
//    });
