
$(document).ready(function()
{
$.ajax({
 type:"GET",
url: 'http://localhost:1111/sumwo',
success: function(data)
{
data.forEach(function(d)
{
 console.log(d);
$("#allwo").append
(
"<h1>"+JSON.stringify(d)+"</h1>"
);
});
}
});
});


$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/sumend',
success: function(data)
{
data.forEach(function(d)
{
$("#end").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});



$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/sumwip',
success: function(data)
{
data.forEach(function(d)
{
$("#wip").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});



$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/sumtake',
success: function(data)
{
data.forEach(function(d)
{
$("#to").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});



/////////////////pm//////////////////////

$(document).ready(function()
{
$.ajax({
 type:"GET",
url: 'http://localhost:1111/AllPm',
success: function(data)
{
data.forEach(function(d)
{
 console.log(d);
$("#allpm").append
(
"<h1>"+JSON.stringify(d)+"</h1>"
);
});
}
});
});


$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/End_JobPm',
success: function(data)
{
data.forEach(function(d)
{
$("#endpm").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});

$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/sumasset',
success: function(data)
{
data.forEach(function(d)
{
$("#xxxx").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});


$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/Work_In_ProgreesPm',
success: function(data)
{
data.forEach(function(d)
{
$("#wippm").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});



$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/take_overPm',
success: function(data)
{
data.forEach(function(d)
{
$("#topm").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});


$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/c_active_asset',
success: function(data)
{
data.forEach(function(d)
{
$("#cas").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});

$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/c_disposal_asset',
success: function(data)
{
data.forEach(function(d)
{
$("#das").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});


$(document).ready(function()
{
 type:"GET",
$.ajax({
url: 'http://localhost:1111/CountAssetRepair',
success: function(data)
{
data.forEach(function(d)
{
$("#ras").append
(
"<h1>"+d+"</h1>"
);
});
}
});
});

