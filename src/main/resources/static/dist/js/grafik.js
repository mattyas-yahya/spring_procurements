//$(document).ready(function()
//      {
//       var ctx ;
//       ctx = document.getElementById("myChart").getContext("2d");
//
//
//  var dataset = {
//    type: 'Line',
//    data: {
//      labels: [],
//      datasets: [{
//        label: 'Stok ',
//        backgroundColor: 'rgba(151,187,205,0.2)',
//        borderColor: 'white',
//        hoverBackgroundColor: 'white',
//        hoverBorderColor: 'white',
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
//  var getData = function(chartdata)
//   {
//    $.ajax({
//      url: 'http://localhost:1111/BarangStok',//http://localhost:1111/BarangAll
//      success: function(data)
//       {
//        data.forEach(function(dt)
//        {
//          chartdata.data.labels.push(dt.nama);
//          chartdata.data.datasets[0].data.push(dt.stok_akhir);
//        });
//        var myChart = new Chart.Line(ctx, chartdata);
//
//      }
//    });
//  };
//  getData(dataset);
//  });
//
