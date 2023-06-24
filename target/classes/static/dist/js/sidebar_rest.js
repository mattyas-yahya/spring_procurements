
$(document).ready(function()
      {
          $.ajax({
              url: 'http://localhost:1111/WoIncoming',//http://localhost:1111/BarangAll
               success: function(data)
                {
                 data.forEach(function(dt)
                {
                     $("#tdatax").append
                         (
                         "<tr>"+
                         "<td>"+"<h2>"+dt.kode_wo+"</h2>"+"<h4>"+dt.title+"</h4>"+"</td>"
                         +"</tr>"
                         );
                      console.log(dt.kodewo);

                                 });

                               }
                             });
                });
