
	$(document).ready(function()
        {
        $('#calendar').fullCalendar({
            header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
       navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true,
            events: "../calendar"
        });

    });









//$(document).ready(function()
//{
//
//
//
//var source = [{}];
// type:"GET",
//$.ajax({
//url: '/calendar',
//success: function(data)
//{
//data.forEach(function(d)
//{
//console.log(d);
// source.push({
//          start: d[0],
//          end: d[1],
//          title:d[2]
//        });
//  console.log(source);
//});
//}
//});
//
//
//
//
//        $('#calendar').fullCalendar({
//            header: {
//        left: 'prev,next today',
//        center: 'title',
//        right: 'month,basicWeek,basicDay'
//      },
//       navLinks: true, // can click day/week names to navigate views
//      editable: true,
//      eventLimit: true,
//            events: source
//        });
//
//
//});

