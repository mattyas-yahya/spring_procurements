
//$(document).ready( function ()
//{
//anychart.data.loadJsonFile('http://localhost:1111/Cbd', function (data)
//{
//var chart = anychart.bar(data);
//chart.title('Biaya perbulan');
//chart.container('container_dt');
//chart.draw();
//});
//
//anychart.data.loadJsonFile('http://localhost:1111/SumCostByMonth', function (data)
//{
//var chart = anychart.column(data);
//chart.title('Pivot Biaya perbulan');
//chart.container('container_dt1');
//chart.draw();
//});
//});
//reverse function

//klik untuk pasien////
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//$("#tab_3xxx").hide();
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//
//function run()
//{
//var t = document.getElementById('asset_code');
//t.onclick = function (event)
// {
//$("#cek").show();
//};
//}
//})
//();
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}

//function run()
//{
//var t = document.getElementById('tabelmass');
//t.onclick = function (event)
// {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR')
// { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('bv');
//var f2 = document.getElementById('cv');
//var f3 = document.getElementById('dv');
//var f4 = document.getElementById('ev');
//var f5 = document.getElementById('fv');
//var f6 = document.getElementById('gv');
//var f7 = document.getElementById('hv');
//var f8 = document.getElementById('iv');
//var f9 = document.getElementById('jv');
//var f10 =document.getElementById('kv');
//var f11 =document.getElementById('lv');
//var f11 =document.getElementById('mv');
//var f12 =document.getElementById('nv');
//var f13 =document.getElementById('ov');
//
//f1.value = cells[1].innerHTML;
//f2.value = cells[2].innerHTML;
//f3.value = cells[3].innerHTML;
//f4.value = cells[4].innerHTML;
//f5.value = cells[5].innerHTML;
//f6.value = cells[6].innerHTML;
//f7.value = cells[7].innerHTML;
//f8.value = cells[8].innerHTML;
//f9.value = cells[9].innerHTML;
//f10.value = cells[10].innerHTML;
//f11.value = cells[11].innerHTML;
//f12.value = cells[12].innerHTML;
//f13.value = cells[13].innerHTML;
//f13.value = cells[13].innerHTML;
//
//
//
//$("#id_safety").        val(document.getElementById ('bv').value);
//$("#asset_name").       val(document.getElementById ('cv').value);
//$("#serial").           val(document.getElementById ('dv').value);
//$("#asset_code").       val(document.getElementById ('ev').value);
//$("#parent_code").      val(document.getElementById ('fv').value);
//$("#purchase_date").    val(document.getElementById ('gv').value);
//$("#grup").             val(document.getElementById ('hv').value);
//$("#model").            val(document.getElementById ('iv').value);
//$("#lokasi").         val(document.getElementById ('jv').value);
//$("#asset_tag").        val(document.getElementById ('kv').value);
//$("#Price").         val(document.getElementById ('lv').value);
//$("#Price").           val(document.getElementById ('mv').value);
//$("#safety_referensi").           val(document.getElementById ('nv').value);
//$("#vendor").            val(document.getElementById ('ov').value);
//
////document.getElementById("simpan_asset").value="Edit";
////var status="Edit";
////document.getElementById('simpan_asset').innerHTML=status;
//};
//}
//})
//();
//buat modal asset to spare part
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelassmodal');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//
//$("#id_asset").val(document.getElementById('a').value);
//$("#kode_asset").val(document.getElementById('d').value);
//$("#lokasi").val(document.getElementById('h').value);
//};
//}
//})
//();

//
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodass');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//
//$("#id_asset").val(document.getElementById('a').value);
//$("#kode_asset").val(document.getElementById('d').value);
//$("#lokasi").val(document.getElementById('h').value);
//};
//}
//})
//();




//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodasspm');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//
//
//$("#id_asset").val(document.getElementById('a').value);
//$("#kode_asset").val(document.getElementById('b').value);
//
//};
//}
//})
//();

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelprev');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//var f10 = document.getElementById('j');
//var f11 = document.getElementById('k');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//f11.value = cells[10].innerHTML;
//
//
//$("#id_pm").val(document.getElementById('a').value);
//$("#id_asset").val(document.getElementById('b').value);
//$("#kode_asset").val(document.getElementById('d').value);
//$("#title").val(document.getElementById('e').value);
//var status="Edit";
////document.getElementById('simpan_pm').innerHTML=status;
//};
//}
//})
//();
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodjadpm');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//
//
////$("#id_pm").val(document.getElementById('a').value);
//$("#id_asset").val(document.getElementById('b').value);
//$("#deskripsi").val(document.getElementById('d').value);
//$("#kode_asset").val(document.getElementById('c').value);
//
//$("#title").val(document.getElementById('d').value).editable(true);
//var status="Edit";
//document.getElementById('simpan_pm').innerHTML=status;
//};
//}
//})
//();


//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabedept');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//
//
////$("#id_dept").val(document.getElementById('a').value);
//$("#nama_dept").val(document.getElementById('b').value);
//$("#kode_dept").val(document.getElementById('c').value);
//
//
//
//
//var status="Edit";
////document.getElementById('simpan_dept').innerHTML=status;
//};
//}
//})
//();


////////////////////////klik untuk modul wo/////////////////////////////

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodep');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('ar');
//var f2 = document.getElementById('br');
//var f3 = document.getElementById('cr');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//
//$("#id_dept").val(document.getElementById('ar').value);
//$("#nama_dept").val(document.getElementById('cr').value);
//};
//}
//})
//();

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodaswo');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('axx');
//var f2 = document.getElementById('bxx');
//var f3 = document.getElementById('cxx');
//var f4 = document.getElementById('dxx');
//var f5 = document.getElementById('exx');
//var f6 = document.getElementById('fxx');
//var f7 = document.getElementById('gxx');
//var f8 = document.getElementById('hxx');
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//
//$("#id_asset").val(document.getElementById('axx').value);
//$("#kode_asset").val(document.getElementById('dxx').value);
//$("#lokasi").val(document.getElementById('hxx').value);
//document.getElementById('deskripsi').value="";
//};
//}
//})
//();


//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodpm');
//t.onclick = function (event)
//{
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR')
//{target = target.parentElement;}
//var cells = target.cells;
//if (!cells.length || target.parentNode.nodeName === 'THEAD')
//{
//return;
//}
//
//var f1 = document.getElementById('az');
//var f2 = document.getElementById('bz');
//var f3 = document.getElementById('cz');
//var f4 = document.getElementById('dz');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//
//$("#id_pm").val(document.getElementById('az').value);
//$("#issue").val(document.getElementById('dz').value);
//$("#kode_asset").val(document.getElementById('cz').value);
//
//
//};
//}
//})
//();

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelwo');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//var f10 = document.getElementById('j');
//var f11= document.getElementById('k');
//var f12 = document.getElementById('l');
//var f13 = document.getElementById('m');
//var f14 = document.getElementById('n');
//var f15 = document.getElementById('o');
//var f16 = document.getElementById('p');
//var f17 = document.getElementById('q');
//var f18 = document.getElementById('r');
//var f19 = document.getElementById('s');
//var f20 = document.getElementById('t');
//var f21 = document.getElementById('u');
//var f22 = document.getElementById('v');
//var f23 = document.getElementById('w');
//
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//f11.value = cells[10].innerHTML;
//f12.value = cells[11].innerHTML;
//f13.value = cells[12].innerHTML;
//f14.value = cells[13].innerHTML;
//f15.value = cells[14].innerHTML;
//f16.value = cells[15].innerHTML;
//f17.value = cells[16].innerHTML;
//f18.value = cells[17].innerHTML;
//f19.value = cells[18].innerHTML;
//f20.value = cells[19].innerHTML;
//f21.value = cells[20].innerHTML;
//f22.value = cells[21].innerHTML;
//f23.value = cells[22].innerHTML;
//
//var tabelwo=$("#tabelwo").dataTable();
//
//////$("#id_wo").val(document.getElementById('a').value);
////$("#id_asset").val(document.getElementById('b').value);
////$("#id_pm").val(document.getElementById('c').value);
////$("#id_dept").val(document.getElementById('d').value);
////$("#kode_wo").val(document.getElementById('e').value);
////$("#kodewo").val(document.getElementById('f').value);
////$("#nama_dept").val(document.getElementById('g').value);
////$("#issue").val(document.getElementById('h').value);
////$("#kode_asset").val(document.getElementById('i').value);
////$("#lokasi").val(document.getElementById('j').value);
////$("#status_pekerjaan").val(document.getElementById('k').value);
////$("#prioritas").val(document.getElementById('l').value);
////$("#action").val(document.getElementById('m').value);
////$("#jenis_pekerjaan").val(document.getElementById('n').value);
////$("#pembuatan").val(document.getElementById('o').value);
////$("#downtime").val(document.getElementById('p').value);
////$("#uptime").val(document.getElementById('q').value);
////$("#quantity_troble").val(document.getElementById('r').value);
////$("#mtbf").val(document.getElementById('s').value);
////$("#mttr").val(document.getElementById('t').value);
////$("#3xx").val(document.getElementById('id_wo').value).show();
//////$('#tabedept').on('click', function(e)
//
////$("#id_wo").val(document.getElementById('ax').value);
//$("#id_asset").val(document.getElementById('b').value);
//$("#id_pm").val(document.getElementById('c').value);
//$("#id_dept").val(document.getElementById('d').value);
//$("#kode_wo").val(document.getElementById('e').value);
//$("#nama_dept").val(document.getElementById('f').value);
//$("#issue").val(document.getElementById('g').value);
//$("#kode_asset").val(document.getElementById('h').value);
//$("#lokasi").val(document.getElementById('i').value);
//$("#status_pekerjaan").val(document.getElementById('j').value);
//$("#prioritas").val(document.getElementById('k').value);
//$("#action").val(document.getElementById('l').value);
//$("#jenis_pekerjaan").val(document.getElementById('m').value);
//$("#pembuatan").val(document.getElementById('n').value);
//$("#downtime").val(document.getElementById('o').value);
//$("#uptime").val(document.getElementById('p').value);
//$("#quantity_troble").val(document.getElementById('q').value);
//$("#batch_no").val(document.getElementById('r').value);
//$("#product_name").val(document.getElementById('s').value);
//$("#Quantity").val(document.getElementById('t').value);
//$("#UOM").val(document.getElementById('u').value);
//$("#mtbf").val(document.getElementById('v').value);
//$("#mttr").val(document.getElementById('w').value);
////$("#3xx").val(document.getElementById('id_wo').value).show();
//};
//}
//})
//();
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//$("#tab_tk2").val(document.getElementById('id_wo').value).hide();
//$("#tab_tk3").val(document.getElementById('id_wo').value).hide();
//
//var t = document.getElementById('tabelwoto');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//var f10 = document.getElementById('j');
//var f11= document.getElementById('k');
//var f12 = document.getElementById('l');
//var f13 = document.getElementById('m');
//var f14 = document.getElementById('n');
//var f15 = document.getElementById('o');
//var f16 = document.getElementById('p');
//
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//f11.value = cells[10].innerHTML;
//f12.value = cells[11].innerHTML;
//f13.value = cells[12].innerHTML;
//f14.value = cells[13].innerHTML;
//f15.value = cells[14].innerHTML;
//f16.value = cells[15].innerHTML;
//
//$("#id_wo").val(document.getElementById('a').value);
//$("#kode_wo").val(document.getElementById('e').value);
//$("#issue").val(document.getElementById('g').value);
//
//$("#tab_tk2").val(document.getElementById('id_wo').value).show();
//};
//}
//})
//();






//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelbwo');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//var f10 = document.getElementById('j');
//var f11= document.getElementById('k');
//var f12 = document.getElementById('l');
//var f13 = document.getElementById('m');
//var f14 = document.getElementById('n');
//var f15 = document.getElementById('o');
//var f16 = document.getElementById('p');
//var f17 = document.getElementById('q');
//
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//f11.value = cells[10].innerHTML;
//f12.value = cells[11].innerHTML;
//f13.value = cells[12].innerHTML;
//f14.value = cells[13].innerHTML;
//f15.value = cells[14].innerHTML;
//f16.value = cells[15].innerHTML;
//f17.value = cells[16].innerHTML;
//
//
//$("#id_wo").val(document.getElementById('a').value);
//$("#kodewo").val(document.getElementById('f').value);
//$("#start_biy").val(document.getElementById('o').value);
//
//};
//}
//})
//();

//
//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelbiy');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('ac');
//var f2 = document.getElementById('bc');
//var f3 = document.getElementById('cc');
//var f4 = document.getElementById('dc');
//var f5 = document.getElementById('ec');
//var f6 = document.getElementById('fc');
//var f7 = document.getElementById('gc');
//var f8 = document.getElementById('hc');
//var f9 = document.getElementById('ic');
//var f10 = document.getElementById('jc');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//
//$("#id_biaya").val(document.getElementById('ac').value);
//$("#grup").val(document.getElementById('bc').value);
//$("#id_wo").val(document.getElementById('cc').value);
//$("#kodewo").val(document.getElementById('dc').value);
//$("#id_header_moveout").val(document.getElementById('ec').value);
//$("#referensi").val(document.getElementById('fc').value);
//$("#jumlah_orang").val(document.getElementById('gc').value);
//$("#biaya").val(document.getElementById('hc').value);
//$("#start_biy").val(document.getElementById('ic').value);
//$("#deskripsi").val(document.getElementById('jc').value);
//document.getElementById('simpan_biaya').innerHTML="Edit";
//
//};
//}
//})
//();


//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmodspare');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//var f10 = document.getElementById('j');
//var f11 = document.getElementById('k');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//f10.value = cells[9].innerHTML;
//f11.value = cells[10].innerHTML;
//$("#id_spare_part").val(document.getElementById ('a').value);
//$("#kode_spare_part").val(document.getElementById ('c').value);
//$("#harga").val(document.getElementById ('i').value);
//
//};
//}
//})
//();

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelmov');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//var f5 = document.getElementById('e');
//var f6 = document.getElementById('f');
//var f7 = document.getElementById('g');
//var f8 = document.getElementById('h');
//var f9 = document.getElementById('i');
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//f5.value = cells[4].innerHTML;
//f6.value = cells[5].innerHTML;
//f7.value = cells[6].innerHTML;
//f8.value = cells[7].innerHTML;
//f9.value = cells[8].innerHTML;
//
//$("#id_moveout").val(document.getElementById ('a').value);
//$("#id_spare_part").val(document.getElementById ('b').value);
//$("#kode_moveout").val(document.getElementById ('c').value);
//$("#kode_spare_part").val(document.getElementById ('d').value);
//$("#keterangan").val(document.getElementById ('e').value);
//$("#tgl_moveout").val(document.getElementById ('f').value);
//$("#jumlah").val(document.getElementById ('g').value);
//$("#harga").val(document.getElementById ('h').value);
//$("#total").val(document.getElementById ('i').value);
//};
//}
//})
//();


//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//$("#tab_3_biy").val(document.getElementById('ac').value).hide();
//$("#tab_2_biy").val(document.getElementById('ac').value).hide();
//var t = document.getElementById('tableopen');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//
//
//$("#id_header_moveout").val(document.getElementById ('a').value);
//$("#referensi").val(document.getElementById ('b').value);
//$("#csvreferensi").val(document.getElementById ('b').value);
//$("#deskripsi").val(document.getElementById ('c').value);
//$("#stat_transaction").val(document.getElementById ('d').value);
//
//$("#tab_3_biy").val(document.getElementById('ac').value).hide();
//$("#tab_2_biy").val(document.getElementById('ac').value).show();
//
//};
//}
//})
//();


//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//$("#tab_3_mt").val(document.getElementById('ac').value).hide();
//$("#tab_2_mt").val(document.getElementById('ac').value).hide();
//var t = document.getElementById('tabelbreakheaderAll');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//
//$("#MTid_breakdown_header").val(document.getElementById ('a').value);
//$("#MTreference").val(document.getElementById ('c').value);
//
////$("#Id_MtbfMttr").val(document.getElementById ('a').value);
//$("#referensi").val(document.getElementById ('b').value);
//$("#csvreferensi").val(document.getElementById ('b').value);
//$("#deskripsi").val(document.getElementById ('c').value);
//$("#stat_transaction").val(document.getElementById ('d').value);
//
////$("#tab_3_mt").val(document.getElementById('ac').value).hide();
//$("#tab_2_mt").val(document.getElementById('ac').value).show();
//
//};
//}
//})
//();

//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelhemovAll');
//t.onclick = function (event)
//{
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('a');
//var f2 = document.getElementById('b');
//var f3 = document.getElementById('c');
//var f4 = document.getElementById('d');
//
//
//f1.value = cells[0].innerHTML;
//f2.value = cells[1].innerHTML;
//f3.value = cells[2].innerHTML;
//f4.value = cells[3].innerHTML;
//
//
//$("#id_header_moveout").val(document.getElementById ('a').value);
//$("#referensi").val(document.getElementById ('b').value);
//$("#deskripsi").val(document.getElementById ('c').value);
//$("#stat_transaction").val(document.getElementById ('d').value);
//
//};
//}
//})
//();




(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', vv, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',vv );
}
function vv()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("kode_wo").value = 'WO-'+randomNum;
month = '' + (now.getMonth() + 1),
day = '' + now.getDate(),
year = now.getFullYear();
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
document.getElementById("pembuatan").value =  [year, month, day].join('-');

}
})
();

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', vv, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',vv );
}
function vv()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("kode_moveout").value =  'MOV-'+randomNum;
document.getElementById("hreferensi").value =  'CSV-'+randomNum;
document.getElementById("kode_pm").value =  'PM-'+randomNum;
document.getElementById("breference").value =  'JBR-'+randomNum;

}
})
();

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', breakdown, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',breakdown );
}
function breakdown()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("breference").value =  'JBR-'+randomNum;
}
})
();

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', breaker, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',breaker );
}
function breaker()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);

month = '' + (now.getMonth() + 1),
day = '' + now.getDate(),
year = now.getFullYear();
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

//document.getElementById("date").value =  [year, month, day].join('-');
document.getElementById("cdate").value =  [year, month, day].join('-');
//document.getElementById("copreference").value =  'CPS-'+randomNum;
document.getElementById("cpreference").value =  'CPRO-'+randomNum;
}
})
();


(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', prj, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',prj );
}
function prj()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);

month = '' + (now.getMonth() + 1),
day = '' + now.getDate(),
year = now.getFullYear();
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

document.getElementById("date").value =  [year, month, day].join('-');
document.getElementById("cpreference").value =  'CPRO-'+randomNum;
}
})
();

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', CSV, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',CSV );
}
function CSV()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("hreferensi").value =  'CSV-'+randomNum;
}
})
();

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', total, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',total );
}
function total()
{
//var q=parseFloat(document.form_biaya.harga.value);
//var b=parseFloat(document.form_biaya.jumlah.value);
//document.getElementById("total").value =q*b;
}
})
();




function totaled()
{
var q=parseFloat(document.form_biaya.harga.value);
var b=parseFloat(document.form_biaya.jumlah.value);
document.getElementById("total").value =q*b;
}
function totalcostdoc()
{
var q=parseFloat(document.form_cost_document.quantity.value);
var b=parseFloat(document.form_cost_document.cost.value);
document.getElementById("total").value =q*b;
}

function totalformula()
{
var qty    = parseInt(document.getElementById("qty").value);
var price    = parseInt(document.getElementById("price").value);
document.getElementById("amount").value =qty*price;
}


(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', run, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload', run);
}
function run()
{
var t = document.getElementById('tabel_log_fail');
t.onclick = function (event) {
event = event || window.event; //IE8
var target = event.target || event.srcElement;
while (target && target.nodeName !== 'TR') { // find TR
target = target.parentElement;
}
var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
if (!cells.length || target.parentNode.nodeName === 'THEAD') {
return;
}
var f1 = document.getElementById('a');
var f2 = document.getElementById('b');
var f3 = document.getElementById('c');
var f4 = document.getElementById('d');
var f5 = document.getElementById('e');
var f6 = document.getElementById('f');
var f7 = document.getElementById('g');
var f8 = document.getElementById('h');
var f9 = document.getElementById('i');
var f10 = document.getElementById('j');
var f11= document.getElementById('k');
var f12 = document.getElementById('l');
var f13 = document.getElementById('m');
var f14 = document.getElementById('n');
var f15 = document.getElementById('o');
var f16 = document.getElementById('p');
var f17 = document.getElementById('q');



f1.value = cells[0].innerHTML;
f2.value = cells[1].innerHTML;
f3.value = cells[2].innerHTML;
f4.value = cells[3].innerHTML;
f5.value = cells[4].innerHTML;
f6.value = cells[5].innerHTML;
f7.value = cells[6].innerHTML;
f8.value = cells[7].innerHTML;
f9.value = cells[8].innerHTML;
f10.value = cells[9].innerHTML;
f11.value = cells[10].innerHTML;
f12.value = cells[11].innerHTML;
f13.value = cells[12].innerHTML;
f14.value = cells[13].innerHTML;
f15.value = cells[14].innerHTML;
f16.value = cells[15].innerHTML;


$("#id_wo").val(document.getElementById('a').value);
$("#id_asset").val(document.getElementById('b').value);
$("#id_pm").val(document.getElementById('c').value);
$("#id_dept").val(document.getElementById('d').value);
$("#kode_wo").val(document.getElementById('e').value);
$("#nama_dept").val(document.getElementById('f').value);
$("#issue").val(document.getElementById('g').value);
$("#kode_asset").val(document.getElementById('h').value);
$("#lokasi").val(document.getElementById('i').value);
$("#status_pekerjaan").val(document.getElementById('j').value);
$("#prioritas").val(document.getElementById('k').value);
$("#tindakan").val(document.getElementById('l').value);

$("#id_wo").val(document.getElementById('a').value);
$("#kode_wo").val(document.getElementById('f').value);
$("#kode_asset").val(document.getElementById('i').value);
$("#PotentialFailureMode").val(document.getElementById('h').value);

};
}
})
();


(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', run, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload', run);
}
function run()
{
var t = document.getElementById('tabelfail');
t.onclick = function (event) {
event = event || window.event; //IE8
var target = event.target || event.srcElement;
while (target && target.nodeName !== 'TR') { // find TR
target = target.parentElement;
}
var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
if (!cells.length || target.parentNode.nodeName === 'THEAD') {
return;
}
var f1 = document.getElementById('ai');
var f2 = document.getElementById('bi');
var f3 = document.getElementById('ci');
var f4 = document.getElementById('di');
var f5 = document.getElementById('ei');
var f6 = document.getElementById('fi');
var f7 = document.getElementById('gi');
var f8 = document.getElementById('hi');
var f9 = document.getElementById('ii');


f1.value = cells[0].innerHTML;
f2.value = cells[1].innerHTML;
f3.value = cells[2].innerHTML;
f4.value = cells[3].innerHTML;
f5.value = cells[4].innerHTML;
f6.value = cells[5].innerHTML;
f7.value = cells[6].innerHTML;
f8.value = cells[7].innerHTML;
f9.value = cells[8].innerHTML;

$("#id_failur").  val(document.getElementById('ai').value);
$("#flreferensi").   val(document.getElementById('bi').value);
$("#id_wo").val(document.getElementById('ci').value);
$("#kode_wo").    val(document.getElementById('di').value);
$("#kode_asset"). val(document.getElementById('ei').value);
$("#issue").      val(document.getElementById('fi').value);
$("#Efek").   val(document.getElementById('gi').value);
$("#penyebab").   val(document.getElementById('hi').value);
$("#tindakan").       val(document.getElementById('ii').value);
document.getElementById('simpan_failur').innerHTML="Edit";
 };
}
})
();


(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', run, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload', run);
}
function run()
{
var t = document.getElementById('tabelsafety');
t.onclick = function (event) {
event = event || window.event; //IE8
var target = event.target || event.srcElement;
while (target && target.nodeName !== 'TR') { // find TR
target = target.parentElement;
}
var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
if (!cells.length || target.parentNode.nodeName === 'THEAD') {
return;
}
var f1 = document.getElementById('a');
var f2 = document.getElementById('b');
var f3 = document.getElementById('c');
var f4 = document.getElementById('d');
var f5 = document.getElementById('e');

f1.value = cells[0].innerHTML;
f2.value = cells[1].innerHTML;
f3.value = cells[2].innerHTML;
f4.value = cells[3].innerHTML;
f5.value = cells[4].innerHTML;


//$("#id_safety").  val(document.getElementById('a').value);
$("#referensi").   val(document.getElementById('b').value);
$("#safety_referensi").   val(document.getElementById('b').value);
$("#keterangan").val(document.getElementById('c').value);
$("#safety_procedure").    val(document.getElementById('d').value);
$("#alat_safety"). val(document.getElementById('e').value);
//document.getElementById('simpan_safety').innerHTML="Edit";
};
}
})
();

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


$('#tgl_pengerjaan').click(function()
{
$('#modpm').modal('show');
}
);





$("button").click(function()
{
$("#tabel_log_wo").table2excel({
// exclude CSS class
exclude: ".noExl",
name: "Worksheet Name",
filename: "history.xls" //do not include extension
});
});
$("button").click(function()
{
$("#tabelhisbiy").table2excel({
// exclude CSS class
exclude: ".noExl",
name: "Worksheet Name",
filename: "history_cost.xls" //do not include extension
});
});
///modul sparepart////
$("#kode_spare_part").click(function()
{
$("#tab_3x").val(document.getElementById('ax').value).show();
});
///////

///modul sparepart////
$("#kode_asset").click(function()
{
$("#tab_3xxx").val(document.getElementById('ax').value).show();
});
$("#tab_1xxx").click(function()
{
$("#tab_3xxx").val(document.getElementById('ax').value).hide();
});

$("#safety_referensi").click(function()
{
$("#tab_3xxx").val(document.getElementById('ax').value).hide();
});
///////////////////////////////
///modul sparepart////
//$("#safety_referensi").click(function()
//{
//$("#tab_4x").val(document.getElementById('as').value).show();
//});

///////////////////////////////
///modul biaya////
$("#referensi").click(function()
{
$("#tab_3_biy").val(document.getElementById('ac').value).show();
});

///////////////////////////////
$("#0xx").click(function()
{
//$("#3xx").val(document.getElementById('id_wo').value).hide();
});
$("#1xx").click(function()
{
//$("#3xx").val(document.getElementById('id_wo').value).hide();
});
$("#2xx").click(function()
{
//$("#3xx").val(document.getElementById('id_wo').value).hide();
});

///////////////////////////////
$("#kode_wo").click(function()
{
$("#tab_tk3").val(document.getElementById('id_wo').value).show();
});
///////modul takeover//////////
$("#tab_tk1").click(function()
{
$("#tab_tk2").val(document.getElementById('id_wo').value).hide();
$("#tab_tk3").val(document.getElementById('id_wo').value).hide();
});

(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', vx, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',vx );
}
function vx()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("kode_TO").value =  'TO-'+randomNum;
//document.getElementById("kode_pm").value =  'PM-'+randomNum;
//document.form_pm.kode_pm.value='PM-'+randomNum;


document.getElementById("kode_wo").value ='';
}
})
();
//////////////////////////



//////////////////////////////////////
(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', fl, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',fl );
}
function fl()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("flreferensi").value =  'FL-'+randomNum;

}
})
();
////////////////////////////////////////

//////////////////////////////////////set default id value...///////////////////
(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', cv, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',cv );
}
function cv()
{
//document.getElementById("id_asset").value ="Empty";
//document.getElementById("id_pm").value = "Empty";
//document.getElementById("id_dept").value = "Empty";
}
})
();

/////////////////////////
$("#new_to").click(function()
{
$("#tab_tk2").show();
});

$("#tsimpan").click(function()
{
$("#tab_tk2").show();
});

///////////////////////////////////////

$("#MTreference").click(function()
{
$("#tab_3_mt").show();
});


(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', pmq, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',pmq );
}
function pmq()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("kode_pm").value =  'PM-'+randomNum;
}
})
();(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', pmq, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload',pmq );
}
function pmq()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("kode_pm").value =  'PM-'+randomNum;
}
})
();








(
function()
{
if (window.addEventListener)
{
window.addEventListener('load', run, false);
}
else if (window.attachEvent)
{
window.attachEvent('onload', run);
}
function run()
{

   $("#endiv").hide();
     $('#status').on('change', function() {
         var selected = $('#status option:selected').val();
         if ( selected === "End_Job" ) {
             //alert("will show");
              $("#endiv").show();
               $("#startdiv").hide();
           // inputToHide.show();
         }
         else {
             //alert("will hide");
              $("#endiv").hide();
              document.getElementById("end").value =  "";
               $("#startdiv").show();
          //  inputToHide.hide();
         }
     });
}
})
();





//(
//function()
//{
//if (window.addEventListener)
//{
//window.addEventListener('load', run, false);
//}
//else if (window.attachEvent)
//{
//window.attachEvent('onload', run);
//}
//function run()
//{
//var t = document.getElementById('tabelpro');
//t.onclick = function (event) {
//event = event || window.event; //IE8
//var target = event.target || event.srcElement;
//while (target && target.nodeName !== 'TR') { // find TR
//target = target.parentElement;
//}
//var cells = target.cells; //cell collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
//if (!cells.length || target.parentNode.nodeName === 'THEAD') {
//return;
//}
//var f1 = document.getElementById('b');
//var f2 = document.getElementById('c');
//var f3 = document.getElementById('d');
//var f4 = document.getElementById('e');
//
//
//
//
//f1.value = cells[1].innerHTML;
//f2.value = cells[2].innerHTML;
//f3.value = cells[3].innerHTML;
//f4.value = cells[4].innerHTML;
//
//
//
////$("#id_pm").  val(document.getElementById('a').value);
////$("#jid_pm").  val(document.getElementById('a').value);
//
//$("#cdate").   val(document.getElementById('b').value);
//$("#cpreference").   val(document.getElementById('c').value);
//$("#cdescrip").val(document.getElementById('d').value);
//$("#cstatus").    val(document.getElementById('e').value);
//
//$("#date").   val(document.getElementById('b').value);
//$("#reference").   val(document.getElementById('c').value);
//$("#descrip").val(document.getElementById('d').value);
//$("#status").    val(document.getElementById('e').value);
//
//$("#mdate").   val(document.getElementById('b').value);
//$("#mreference").   val(document.getElementById('c').value);
//$("#mdescrip").val(document.getElementById('d').value);
//$("#mstatus").    val(document.getElementById('e').value);
//
//
//$("#editform").show();
//$("#materialform").show();
//};
//}
//})
//();








//service request oee


//document.getElementById("mttr").value =DT/QOfTroble;

