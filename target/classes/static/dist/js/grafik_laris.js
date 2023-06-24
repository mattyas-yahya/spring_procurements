//$(document).ready(function()
//      {
//var ct = document.getElementById('ChartLaris').getContext('2d');
//  var dataset = {
//    type: 'bar',
//    data: {
//      labels: [],
//      datasets: [{
//        label: 'Sisa Barang ',
//        backgroundColor: 'green',
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
//      url: 'http://localhost:1111/BarangAll',
//      success: function(data)
//      {
//        data.forEach(function(el)
//        {
//          chartdata.data.labels.push(el.nama);
//           chartdata.data.datasets[0].data.push(el.margin);
//        });
//        var myChart = new Chart(ct, chartdata);
//
//      }
//    });
//  };
//  getData(dataset);
//
//    });
