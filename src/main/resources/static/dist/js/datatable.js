var tabelprev;
var tabelprev1;
var tabel_project_material;
var tabel_project_detail;
var tabelass;
var tabelmodalass;
var tabelmodalass1;
var tabelass1;
var tabless1;
var tabelver;
var tabelver1;
var dataver ;
var tabelc;
var tabeloc;
var  tabelacc;
var  tabelacccount;
var  tabelacc1;
var tabeldetilmat;
var tabeldetilmat1;
var tabelmass;
var tabelmass1;
var dataq;
var tablex ;
var Tablelog;
var Tablelog1;
var tabelv;
var datav;
var tabelInventory;
var tabelInventory1;
var start ;
var end ;
var tabelplt;
var tabelplt1;
var tabelpro;
var tabelpro1;
var tabelwoend;
var tabelwoend1;
var tabelcostdoc;
var tabelcostdoc1;
var tabel_calendar;
var tabel_calendar1;
var tabelhprend;
var tabelhprend1;
var tblpo;
var tblpo1;
var tpropen;
var tabeldown;
var tabel_sum_cost_by_date;
var tabel_aud_cost_by_date;
var tabel_log_down;
var tabel_header_bom;
var tabel_formula;
var tabelCostbyAccount;
var tabel_overview;
var tabel_Tr_asset;
var tabel_issue_costing;
var tabel_issue;
var tabel_issue1;
var tabel_Onhand;
var tabel_Onhand1;
var tabel_dashboard;
var tabel_suku_cadang;
var tabedept ;
var  tabel_Items ;
var tabelhistorycostdoc;
var tabel_journal;
var tabel_journal1;
var tabel_journal_transaction;
var tabel_journal_transaction1;
var tabel_work_orders_info;
var tabel_pm_info;
var tabel_asset_info;
var tabel_jenis_kendaraan;
var tabel_kendaraan;
var tabel_pelanggan;
var tabel_member;
var tabel_member1;
var tabel_transaksi;
var tabel_report_transaksi;
var tabel_jasa;
var tabel_pr;
var tabel_pr_line
var tabel_po;
var tabel_po_line;

$(document).ready( function ()
{
        var x;
        tabel_po_line = $('#tabel_po_line').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/POL_All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns":
 [
{ "mData":"id_po_line"},
{ "mData":"po_number"},
{ "mData":"pr_number"},
{ "mData":"item_number"},
{ "mData":"product_name"},
{ "mData":"qty"},
{ "mData":"note"},
{ "mData":"unit_price"},
{ "mData":"subtotal"},
{ "mData":"uom"}
]
});

     
$("#tabel_po").click(function (event)
{      
        $("#new_line").show();
var rows_selected = tabel_po.column(0).checkboxes.selected();
var tabel_po1 = $('#tabel_po').DataTable().row('.selected').data();
$('#po_number_line1').val(tabel_po1['po_number']);
$('#po_number_line').val(tabel_po1['po_number']);
$('#name1').val(tabel_pr1['name']);
$('#request_date1').val(tabel_pr1['request_date']);
$('#date_required1').val(tabel_pr1['date_required']);
$('#departemen1').val(tabel_pr1['departemen']);
$('#requester1').val(tabel_pr1['requester']);
console.log(x.value());

});


$('#po_number_line1').on( 'keyup click', function ()
{
        //$("#new_line").show();
        $("#liner").show();
        tabel_po_line.search( this.value ).draw();
});



});

$(document).ready( function ()
{
        var x;
        tabel_po = $('#tabel_po').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PO_All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns":
 [
{ "mData":"id_purchase_order"},
{ "mData":"po_number"},
{ "mData":"create_date"},
{ "mData":"created_by"}
]
});

     
$("#tabel_po").click(function (event)
{      
        $("#new_line").show();
var rows_selected = tabel_pr.column(0).checkboxes.selected();
var tabel_pr1 = $('#tabel_pr').DataTable().row('.selected').data();
$('#pr_number_line1').val(tabel_pr1['pr_number']);
$('#name1').val(tabel_pr1['name']);
$('#request_date1').val(tabel_pr1['request_date']);
$('#date_required1').val(tabel_pr1['date_required']);
$('#departemen1').val(tabel_pr1['departemen']);
$('#requester1').val(tabel_pr1['requester']);
console.log(x.value());

});


$('#pr_number_line1').on( 'keyup click', function ()
{
        $("#liner").show();
        tabel_pr_line.search( this.value ).draw();
});


});

$(document).ready( function ()
{
        var x;
        tabel_pr_line = $('#tabel_pr_line').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PRL_All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns":
 [
{ "mData":"id_pr_req_line"},
{ "mData":"pr_number"},
{ "mData":"requester"},
{ "mData":"item_number"},
{ "mData":"product_name"},
{ "mData":"qty"},
{ "mData":"uom"},
{ "mData":"note"}
]
});

     
$("#tabel_pr").click(function (event)
{      
        $("#new_line").show();
var rows_selected = tabel_pr.column(0).checkboxes.selected();
var tabel_pr1 = $('#tabel_pr').DataTable().row('.selected').data();
$('#pr_number_line1').val(tabel_pr1['pr_number']);
$('#name1').val(tabel_pr1['name']);
$('#request_date1').val(tabel_pr1['request_date']);
$('#date_required1').val(tabel_pr1['date_required']);
$('#departemen1').val(tabel_pr1['departemen']);
$('#requester1').val(tabel_pr1['requester']);
console.log(x.value());

});


$('#pr_number_line1').on( 'keyup click', function ()
{
        $("#liner").show();
        tabel_pr_line.search( this.value ).draw();
});


});


$(document).ready( function ()
{
$("#new_line").click(function (event)
{
var rows_selected = tabel_pr.column(0).checkboxes.selected();
var tabel_pr1 = $('#tabel_pr').DataTable().row('.selected').data();
$('#pr_number_line').val(tabel_pr1['pr_number']);
$('#requester_line').val(tabel_pr1['requester']);
console.log(tabel_pr1['pr_number']);
});


tabel_pr = $('#tabel_pr').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PR_All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_pr_req"},
{ "mData":"pr_number"},
{ "mData":"name"},
{ "mData":"request_date"},
{ "mData":"date_required"},
{ "mData":"departemen"},
{ "mData":"requester"}
]
});

$('#kode_pelanggan').on( 'keyup click', function ()
{
        $("#tmember").show();
        tabel_member.search( this.value ).draw();
});

});



$(document).ready( function ()
{
        $("#div_table_jasa").hide();
        tabel_jasa = $('#tabel_jasa').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/jasa/All",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_jasa"},
{ "mData":"nama_jasa"},
{ "mData":"harga"}
]
});

$("#jsedit").click(function (event)
{

 $("#div_table_jasa").hide();
var rows_selected = tabel_jasa.column(0).checkboxes.selected();
var   tabel_jasa1 = $('#tabel_jasa').DataTable().row('.selected').data();

// $('#id_asset').val(rows_selected.join(","));
$('#id_jasa').val(rows_selected.join(","));
$('#nama_jasa').val(tabel_jasa1['nama_jasa']);
$('#harga').val(tabel_jasa1['harga']);
})

$("#nama_jasa").click(function (event)
{
        $("#div_table_jasa").show();
})


});


$(document).ready(function(){
        // DataTable
         tabel_report_transaksi = $('#tabel_report_transaksi').DataTable({
                "columnDefs": [ {
                        "targets": 0,
                        "searchable": false
                      } ],
                              "select": {"style": "multi"},
        "order": [[1, "asc"]],
        "sAjaxDataProp": "",
        "footerCallback": function ( row, data, start, end, display )
        {
        var api = this.api(), data;
        // Remove the formatting to get integer data for summation
        var intVal = function ( i )
        {
        return typeof i === 'string' ?
        i.replace(/[\$,]/g, '')*1 :
        typeof i === 'number' ?
        i : 0;
        };
        
        // Total over all pages ,13 is colounm who sum
        
        total = api.column( 1, { search: 'applied'}).data().reduce( function (a, b)
        {
        return intVal(a) + intVal(b);
        },
        0);
        
        // Update footer
        $(api.column(1).footer()).html('Grand Total : '+ total +' ');
        },
        "scrollY": "800px",
        "scrollX": "200px",
        "serverSide": true,
        "processing": true,
        "ajax": {
        "url": "/TransaksiRest/transaksi_all",
        "dataSrc": "",
        "type": "POST",
        "data": function(d){
        d.start_date = $('#start_date').val();
        d.end_date = $('#end_date').val();
        }
        }
        ,
        "aoColumns": [
        { "mData": 0},
        { "mData": 1}
        ]
        });
        $("#ohadd").click(function (event)
        {
        $("#form_journal").show();
        $("#form_journal").reset();
        });
        $("#ohedit").click(function (event)
        {
        
        });
     
        // Search button
        $('#btn_search').click(function(event){
                tabel_report_transaksi.draw();
        event.preventDefault();
        });
        });



$(document).ready( function ()
{

$("#tredit").click(function (event)
{
var rows_selected = tabel_member.column(0).checkboxes.selected();
var tabel_transaksi1 = $('#tabel_transaksi').DataTable().row('.selected').data();
$('#id_pelanggan').val(rows_selected.join(","));
$('#kode').val(tabel_transaksi1['kode']);
$('#nama_pelanggan').val(tabel_transaksi1['nama']);
$("#tmember").hide();
});

$("#tradd").click(function (event)
{
$("#trgeneral").show();
});
$("#trrefresh").click(function (event)
{
        tabel_transaksi.ajax.reload();
});
$("#tmember").hide();
$("#trgeneral").hide();

tabel_transaksi = $('#tabel_transaksi').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/TransaksiRest/TransaksiAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_transaksi"},
{ "mData":"id_jasa","visible":false},
{ "mData":"kode"},
{ "mData":"transaction_date"},
{ "mData":"nama_pelanggan","visible":false},
{ "mData":"jenis_kendaraan","visible":false},
{ "mData":"merek","visible":false},
{ "mData":"nopol","visible":false},
{ "mData":"nama_jasa"},
{ "mData":"harga"}

]
});

$('#kode_pelanggan').on( 'keyup click', function ()
{
        $("#tmember").show();
        tabel_member.search( this.value ).draw();
});

});


$(document).ready( function ()
{

$("#memedit").click(function (event)
{
var rows_selected = tabel_member.column(0).checkboxes.selected();
tabel_member1 = $('#tabel_member').DataTable().row('.selected').data();
$('#id_pelanggan').val(rows_selected.join(","));
$('#kode_pelanggan').val(tabel_member1['kode']);
$('#kode').val(tabel_member1['kode']);
$('#nama_pelanggan').val(tabel_member1['nama']);
$('#biaya').val(tabel_member1['biaya']);
$("#tmember").hide();
});

$("#memadd").click(function (event)
{
$("#mgeneral").show();
});
$("#mrefresh").click(function (event)
{
        tabel_member.ajax.reload();
});
$("#tmember").hide();
$("#mgeneral").hide();

tabel_member = $('#tabel_member').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"responsive": true,
"order": [[1, "asc"]],
"sAjaxSource": "/MemberRest/MemberAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_member"},
{ "mData":"kode"},
{ "mData":"nama"},
{ "mData":"alamat"}
]
});

$('#kode_pelanggan').on( 'keyup click', function ()
{
        $("#tmember").show();
        tabel_member.search( this.value ).draw();
});

});

$(document).ready( function ()
{
        
        $("#peledit").click(function (event)
        {
                var rows_selected = tabel_pelanggan.column(0).checkboxes.selected();
var   tabel_pelanggan1 = $('#tabel_pelanggan').DataTable().row('.selected').data();
$('#kode').val(tabel_pelanggan1['kode_pelanggan']);
$('#nama_pelanggan').val(tabel_pelanggan1['nama_pelanggan']);
$('#jenis_kendaraan').val(tabel_pelanggan1['jenis_kendaraan']);
$('#merek').val(tabel_pelanggan1['merek']);
$('#nopol').val(tabel_pelanggan1['nopol']);
$('#harga').val(tabel_pelanggan1['harga']);
$('#biaya').val(tabel_pelanggan1['biaya']);

$("#tpelanggan").hide();
});
$("#peladd").click(function (event)
{
$("#pelgeneral").show();
});
$("#pelrefresh").click(function (event)
{
        tabel_pelanggan.ajax.reload();
});
$("#tpelanggan").hide();
$("#pelgeneral").hide();

        tabel_pelanggan = $('#tabel_pelanggan').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PelangganRest/PelangganAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_pelanggan"},
{ "mData":"kode_pelanggan"},
{ "mData":"nama_pelanggan"},
{ "mData":"jenis_kendaraan"},
{ "mData":"merek"},
{ "mData":"nopol"},
{ "mData":"biaya"}
]
});

$('#kode').on( 'keyup click', function ()
{
        $("#tpelanggan").show();
        tabel_pelanggan.search( this.value ).draw();
});

});

$(document).ready( function ()
{
        tabel_kendaraan = $('#tabel_kendaraan').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/kendaraan_rest/kendaraanAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_kendaraan"},
{ "mData":"jenis_kendaraan"},
{ "mData":"merek"}
]
});
});

$(document).ready( function ()
{
        $("#jkedit").click(function (event)
        {
$("#tjenis_kendaraan").hide();
});
$("#tjenis_kendaraan").hide();

$('#jenis_kendaraan').on( 'keyup click', function ()
{
        $("#tjenis_kendaraan").show();
        tabel_jenis_kendaraan.search( this.value ).draw();
});
tabel_jenis_kendaraan = $('#tabel_jenis_kendaraan').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/jenis_kendaraan_rest/jenis_kendaraanAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"id_jenis_kendaraan"},
{ "mData":"jenis_kendaraan"},
{ "mData":"merek"},
{ "mData":"biaya"}
]
});
$("#jkedit").click(function (event)
{
$("#jkgeneral").show();
// $("#activated").show();
// $("#spare").show();
// $("#cek").hide();
var rows_selected = tabel_jenis_kendaraan.column(0).checkboxes.selected();
var   tabel_jenis_kendaraan1 = $('#tabel_jenis_kendaraan').DataTable().row('.selected').data();

$('#id_jenis_kendaraan').val(rows_selected.join(","));
$('#jenis_kendaraan').val(tabel_jenis_kendaraan1['jenis_kendaraan']);
$('#merek').val(tabel_jenis_kendaraan1['merek']);
$('#biaya').val(tabel_jenis_kendaraan1['biaya']);
})
$("#jkrefresh").click(function (event)
{
        tabel_jenis_kendaraan.ajax.reload();
})
});

$(document).ready( function ()
{
 tabel_dashboard = $('#tabel_dashboard').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/SumCostByMonth",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2}
]
});

//var dt = anychart.data.parseHtmlTable('#tabel_dashboard'); //parse data from HTML table
//var chart = anychart.bar(); //create chart
//chart.xAxis().title("Date");//create name for X axis
//chart.yAxis().title("Downtime Per Minute"); //create name for Y axis
//chart.data(dt); //specify data source
//var legend = chart.legend();
//legend.enabled(true); //enable legend
//chart.container("container_dt"); //reference the container Id
//chart.draw();

});


$(document).ready( function ()
{
 tabel_asset_info = $('#tabel_asset_info').DataTable({
"autoWidth": false,
"columnDefs":[{"defaultContent":"-","targets":"_all", "className": 'mdc-data-table__cell'}],
"searching": false,
 "paging": false,
 "info": false,
"sAjaxSource": "/asset_info",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2},
{ "mData": 3}
]
});
setInterval (tabel_asset_info.ajax.reload, 100);
});

$(document).ready( function ()
{
 tabel_pm_info = $('#tabel_pm_info').DataTable({
"autoWidth": false,
"columnDefs":[{"defaultContent":"-","targets":"_all", "className": 'mdc-data-table__cell'}],
"searching": false,
 "paging": false,
 "info": false,
"sAjaxSource": "/jadwal_info",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2},
{ "mData": 3}
]
});
setInterval (tabel_pm_info.ajax.reload, 100);
});

$(document).ready( function ()
{
 tabel_work_orders_info = $('#tabel_work_orders_info').DataTable({
"autoWidth": false,
"columnDefs":[{"defaultContent":"-","targets":"_all", "className": 'mdc-data-table__cell'}],
"searching": false,
 "paging": false,
 "info": false,
"sAjaxSource": "/work_orders_info",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2},
{ "mData": 3}
]
});
setInterval (tabel_work_orders_info.ajax.reload, 100);

});


$(document).ready( function ()
{
tabel_suku_cadang = $('#tabel_suku_cadang').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/scgAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_suku_cadang"},
{ "mData": "ast_name" },
{ "mData": "srl" },
{ "mData": "ast_code"},
{ "mData": "kode_suku_cadang" },
{ "mData": "nama_suku_cadang"},
{ "mData": "jumlah" }
]
});
setInterval (tabel_suku_cadang.ajax.reload, 100);

});

$(document).ready( function ()
{
var table = $('#tabelto').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/TakeAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_take_over"},
{ "mData": "id_wo.id_wo" },
{ "mData": "kode_TO" },
{ "mData": "kode_wo"},
{ "mData": "title" },
{ "mData": "start"},
{ "mData": "end" },
{ "mData": "vendor_asal" },
{ "mData": "vendor_baru" }
]
});


$('#1').change(function() {
table.columns(0).visible(!$(this).is(':checked'))
});

$('#2').change(function() {
table.columns(1).visible(!$(this).is(':checked'))
})
$('#3').change(function() {
table.columns(2).visible(!$(this).is(':checked'))
})
$('#4').change(function() {
table.columns(3).visible(!$(this).is(':checked'))
})
$('#5').change(function() {
table.columns(4).visible(!$(this).is(':checked'))
})
$('#6').change(function() {
table.columns(5).visible(!$(this).is(':checked'))
})
$('#7').change(function() {
table.columns(6).visible(!$(this).is(':checked'))
})
$('#8').change(function() {
table.columns(7).visible(!$(this).is(':checked'))
})
$('#9').change(function() {
table.columns(8).visible(!$(this).is(':checked'))
})
$('#10').change(function() {
table.columns(9).visible(!$(this).is(':checked'))
})
$('#11').change(function() {
table.columns(10).visible(!$(this).is(':checked'))
})
$('#kode_wo').on( 'click', function ()
{
table.search( this.value ).draw();
} );
});

$(document).ready( function ()
{
tabelass = $('#tabelass').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/AssetAll",
"scrollX": "200px",
"scrollY": "400px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_asset", "defaultContent": ""},
{ "mData": "id_vendor.id_vendor" ,"defaultContent": "" ,"visible":false},
{ "mData": "asset_name" },
{ "mData": "serial"},
{ "mData": "asset_code" },
{ "mData": "parent_code"},
{ "mData": "purchase_date" },
{ "mData": "grup" },
{ "mData": "model" },
//{ "mData": "location" },
{ "mData": "asset_tag" },
//{ "mData": "status" },
{ "mData": "warranty" },
//{ "mData": "safety_referensi","defaultContent": "" },
{ "mData": "vendor_name" },
{ "mData": "price"}
// { "mData": "reason" }


]
});
$("#edit").hide();
$("#general").hide();
$("#activated").hide();
$("#spare").hide();

tabelass.on('click', function(e)
{
$("#edit").show();
$("#add").hide();
});
$("#overview").click(function (event)
{
$("#add").show();
$("#edit").hide();
$("#general").hide();
$("#activated").hide();
$("#spare").hide();
document.getElementById("form_asset").reset();
document.getElementById("form_Tr_asset").reset();
document.getElementById("form_suku_cadang").reset();
})

$("#add").click(function (event)
{
$("#general").show();
$("#activated").show();
$("#spare").show();
})

$("#edit").click(function (event)
{
$("#general").show();
$("#activated").show();
$("#spare").show();
$("#cek").hide();
var rows_selected = tabelass.column(0).checkboxes.selected();
var   tabelass1 = $('#tabelass').DataTable().row('.selected').data();

$('#id_asset').val(rows_selected.join(","));
$('#id_asset1').val(rows_selected.join(","));
$('#id_vendor').val(tabelass1['id_vendor']['id_vendor']);
$('#asset_name').val(tabelass1['asset_name']);
$('#asset_name1').val(tabelass1['asset_name']);
$('#asset_name2').val(tabelass1['asset_name']);
$('#serial').val(tabelass1['serial']);
$('#serial1').val(tabelass1['serial']);
$('#serial2').val(tabelass1['serial']);
$('#asset_code').val(tabelass1['asset_code']);
$('#asset_code1').val(tabelass1['asset_code']);
$('#asset_code2').val(tabelass1['asset_code']);
$('#parent_code').val(tabelass1['parent_code']);
$('#parent_code1').val(tabelass1['parent_code']);
$('#purchase_date').val(tabelass1['purchase_date']);
$('#grup').val(tabelass1['grup']);
$('#model').val(tabelass1['model']);
$('#location').val(tabelass1['location']);
$('#lokasi').val(tabelass1['location']);
$('#asset_tag').val(tabelass1['asset_tag']);
$('#asset_tag1').val(tabelass1['asset_tag']);
$('#status').val(tabelass1['status']);
$('#warranty').val(tabelass1['warranty']);
$('#safety_referensi').val(tabelass1['safety_referensi']);
$('#vendor_name').val(tabelass1['vendor_name']);
$('#Price').val(tabelass1['price']);
})

tabelass.on('clicked', function(e)
{
$("#modal_tr_asset").show();
$("#form_Tr_asset").show();
});
$("#refresh").click(function (event)
{
tabelass.ajax.reload();
})
});

$(document).ready( function ()
{
tabelmodalass = $('#tabelmodalass').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/AssetRepair",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_asset", "defaultContent": ""},
{ "mData": "id_safety.id_safety" ,"defaultContent": "" ,"visible":false},
{ "mData": "id_location.id_location" ,"defaultContent": "" ,"visible":false},
{ "mData": "id_vendor.id_vendor" ,"defaultContent": "" ,"visible":false},
{ "mData": "asset_name" },
{ "mData": "serial"},
{ "mData": "asset_code" },
{ "mData": "parent_code"},
{ "mData": "purchase_date" },
{ "mData": "grup" },
{ "mData": "model" },
{ "mData": "location" },
{ "mData": "asset_tag" },
{ "mData": "status" },
{ "mData": "warranty" },
{ "mData": "safety_referensi","defaultContent": "" },
{ "mData": "vendor_name" },
{ "mData": "price"},
{ "mData": "reason" }


]
});

tabelmodalass.on('click', function(e)
{
$("#cek").hide();
var rows_selected = tabelmodalass.column(0).checkboxes.selected();
tabelmodalass1 = $('#tabelmodalass').DataTable().row('.selected').data();

$('#id_asset').val(rows_selected.join(","));
$('#sid_asset').val(rows_selected.join(","));
$('#id_safety').val(tabelmodalass1['id_safety']['id_safety']);
$('#id_vendor').val(tabelmodalass1['id_vendor']['id_vendor']);
$('#asset_name').val(tabelmodalass1['asset_name']);
$('#serial').val(tabelmodalass1['serial']);
$('#asset_code').val(tabelmodalass1['asset_code']);
$('#parent_code').val(tabelmodalass1['parent_code']);
$('#purchase_date').val(tabelmodalass1['purchase_date']);
$('#grup').val(tabelmodalass1['grup']);
$('#model').val(tabelmodalass1['model']);
$('#location').val(tabelmodalass1['location']);
$('#lokasi').val(tabelmodalass1['location']);
$('#asset_tag').val(tabelmodalass1['asset_tag']);
$('#status').val(tabelmodalass1['status']);
$('#warranty').val(tabelmodalass1['warranty']);
$('#safety_referensi').val(tabelmodalass1['safety_referensi']);
$('#vendor_name').val(tabelmodalass1['vendor_name']);
$('#Price').val(tabelmodalass1['price']);

});

//setInterval (tabelass1.ajax.reload, 100000);
});

$(document).ready( function ()
{
tabelmass = $('#tabelmass').DataTable({
"columnDefs":[{ "targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/AssetActive",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_asset", "defaultContent": ""},
{ "mData": "id_location.id_location" ,"defaultContent": "" ,"visible":false},
{ "mData": "asset_name" },
{ "mData": "serial"},
{ "mData": "asset_code" },
{ "mData": "parent_code"},
{ "mData": "purchase_date" },
{ "mData": "grup" },
{ "mData": "model" },
{ "mData": "location" },
{ "mData": "asset_tag" },
{ "mData": "status" },
{ "mData": "warranty" },
{ "mData": "safety_referensi","defaultContent": "" },
{ "mData": "vendor" },
{ "mData": "price" },
{ "mData": "reason" }
]
});
// then you can delete the refreshTable function entirely.

tabelmass.on('click', function(e)
{
var form = this;
var rows_selected = tabelmass.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_asset')
.val(rowId)
);
});
$('#sid_asset').val(rows_selected.join(","));
$('#id_asset').val(rows_selected.join(","));

});
setInterval (tabelmass.ajax.reload, 10000);
})

$(document).ready( function ()
{
var table = $('#tabel_spare').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/GetSpare",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_Sparepart", "defaultContent": ""},
{ "mData": "asset_name", "defaultContent": ""},
{ "mData": "asset_code", "defaultContent": ""},
{ "mData": "serial", "defaultContent": ""},
{ "mData": "kode_spare_part", "defaultContent": ""},
{ "mData": "nama_spare_part", "defaultContent": ""},
{ "mData": "quantity", "defaultContent": ""}
]
});


});

$(document).ready( function ()
{
$("#dedit").hide();
$("#dgeneral").hide();
$("#dadd").click(function (event)
{
$("#dgeneral").show();
})
$("#drefresh").click(function (event)
{
tabedept.ajax.reload();
})
$("#doverview").click(function (event)
{
$("#dgeneral").hide();
document.getElementById("form_dept").reset();
})
tabedept = $('#tabedept').DataTable({
"columnDefs":[{ "targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/DeptAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_dept", "defaultContent": ""},
{ "mData": "nama_dept", "defaultContent": ""},
{ "mData": "kode_dept", "defaultContent": ""},
]
});
$('#dedit').on('click', function(e)
{
$("#dgeneral").show();
var rows_selected = tabedept.column(0).checkboxes.selected();
var   tabedept1 = $('#tabedept').DataTable().row('.selected').data();

$('#id_dept').val(tabedept1['id_dept']);
$('#nama_dept').val(tabedept1['nama_dept']);
$('#kode_dept').val(tabedept1['kode_dept']);
});
$('#tabedept').on('click', function(e)
{
$("#dedit").show();
});
setInterval (tabedept.ajax.reload, 10000);
})

$(document).ready( function ()
{
var table = $('#tabelwoto').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/WoTake",
"scrollX": "130px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_wo", "defaultContent": ""},
{ "mData": "id_asset.id_asset", "defaultContent": ""},
{ "mData": "id_pm.id_pm", "defaultContent": ""},
{ "mData": "id_dept.id_dept", "defaultContent": ""},
{ "mData": "kode_wo", "defaultContent": ""},
{ "mData": "nama_dept", "defaultContent": ""},
{ "mData": "title", "defaultContent": ""},
{ "mData": "kode_asset", "defaultContent": ""},
{"mData": "lokasi", "defaultContent": ""},
{"mData": "status_pekerjaan", "defaultContent": ""},
{"mData": "prioritas", "defaultContent": ""},
{ "mData": "action", "defaultContent": ""},
{ "mData": "jenis_pekerjaan", "defaultContent": ""},
{ "mData": "pembuatan", "defaultContent": ""},
{ "mData": "downtime", "defaultContent": ""},
{ "mData": "uptime", "defaultContent": ""}
]
});
});

$(document).ready( function ()
{
var table = $('#tabelbwo').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/WoCost",
"scrollX": "600px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_wo", "defaultContent": ""},
{ "mData": "id_asset.id_asset", "defaultContent": ""},
{ "mData": "id_pm.id_pm", "defaultContent": ""},
{ "mData": "id_spare_part.id_spare_part", "defaultContent": ""},
{ "mData": "id_dept.id_dept", "defaultContent": ""},
{ "mData": "kode_wo", "defaultContent": ""},
{ "mData": "nama_dept", "defaultContent": ""},
{ "mData": "title", "defaultContent": ""},
{ "mData": "kode_asset", "defaultContent": ""},
{"mData": "lokasi", "defaultContent": ""},
{"mData": "status_pekerjaan", "defaultContent": ""},
{"mData": "prioritas", "defaultContent": ""},
{ "mData": "action", "defaultContent": ""},
{ "mData": "jenis_pekerjaan", "defaultContent": ""},
{ "mData": "pembuatan", "defaultContent": ""},
{ "mData": "downtime", "defaultContent": ""},
{ "mData": "uptime", "defaultContent": ""},
{ "mData": "quantity_troble","defaultContent": ""},
{ "mData": "mtbf","defaultContent": ""},
{ "mData": "mttr","defaultContent": ""}
]
});
});

$(document).ready( function ()
{
tabelwoend = $('#tabelwoend').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/WoAllEnd",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_wo", "defaultContent": "" ,"visible":false},
{ "mData": "id_asset.id_asset", "defaultContent": "","visible":false },
{ "mData": "id_dept.id_dept", "defaultContent": "","visible":false },
{ "mData": "kode_wo" ,"defaultContent": ""},
{ "mData": "nama_dept","defaultContent": ""},

{ "mData": "title","defaultContent": ""},
{ "mData": "kode_asset","defaultContent": ""},
{"mData": "lokasi","defaultContent": ""},
{"mData": "status_pekerjaan","defaultContent": ""},
{"mData": "prioritas","defaultContent": ""},

{ "mData": "solution","defaultContent": ""},
{ "mData": "jenis_pekerjaan","defaultContent": ""},
{ "mData": "pembuatan","defaultContent": ""},
{ "mData": "uptime","defaultContent": ""},
{ "mData": "downtime","defaultContent": ""},

{ "mData": "quantity_troble","defaultContent": ""},
{ "mData": "batch_no","defaultContent": ""},
{ "mData": "product_name","defaultContent": ""},
{ "mData": "quantity","defaultContent": ""},
{ "mData": "uom","defaultContent": ""},

{ "mData": "mtbf","defaultContent": "","visible":false},
{ "mData": "mttr","defaultContent": "","visible":false},
{ "mData": "work_time","defaultContent": ""},
{ "mData": "cycle_time","defaultContent": ""},
{ "mData": "good_pieces","defaultContent": ""},

{ "mData": "ar","defaultContent": "","visible":false},
{ "mData": "pr","defaultContent": "","visible":false},
{ "mData": "qr","defaultContent": "","visible":false}
]
});
tabelwoend.on('click', function(e)
{
var form = this;
var rows_selected = tabelwoend.column(0).checkboxes.selected();
$('#id_wo').val(rows_selected.join(","));

tabelwoend1 = $('#tabelwoend').DataTable().row('.selected').data();

$('#id_wo_pm').val(tabelwoend1['id_wo']);
$('#wo_code').val(tabelwoend1['kode_wo']);
$('#issue').val(tabelwoend1['title']);
$('#stts').val(tabelwoend1['status_pekerjaan']);

});
});

//$(document).ready( function ()
//{
//var table = $('#tabel_log_fail').DataTable({
//"columnDefs":[{"defaultContent":"-","targets":"_all"}],
//"sAjaxSource": "/WoFail",
//
//"sAjaxDataProp": "",
//"order": [[ 0, "asc" ]],
//"aoColumns": [
//{ "mData": "id_wo", "defaultContent": ""},
//{ "mData": "id_asset.id_asset", "defaultContent": ""},
//{ "mData": "id_pm.id_pm", "defaultContent": ""},
//{ "mData": "id_spare_part.id_spare_part", "defaultContent": ""},
//{ "mData": "id_dept.id_dept", "defaultContent": ""},
//{ "mData": "kode_wo", "defaultContent": ""},
//{ "mData": "nama_dept", "defaultContent": ""},
//{"mData": "title", "defaultContent": ""},
//{ "mData": "kode_asset", "defaultContent": ""},
//{ "mData": "lokasi", "defaultContent": ""},
//{"mData": "status_pekerjaan", "defaultContent": ""},
//{"mData": "prioritas", "defaultContent": ""},
//{ "mData": "action", "defaultContent": ""},
//{ "mData": "jenis_pekerjaan", "defaultContent": ""},
//{ "mData": "pembuatan", "defaultContent": ""},
//{ "mData": "downtime", "defaultContent": ""}
//]
//});
//});

$(document).ready( function ()
{
var table = $('#tabelmodep').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/DeptAll",
"processing": true,
"serverSide": true,
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_dept", "defaultContent": ""},
{ "mData": "nama_dept", "defaultContent": ""},
{ "mData": "kode_dept", "defaultContent": ""},

]
});
});

$(document).ready( function ()
{
var table = $('#tabelmodaswo').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/AssetAll",
"sAjaxDataProp": "",
"processing": true,
"serverSide": true,
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_asset", "defaultContent": ""},
{ "mData": "serial" , "defaultContent": ""},
{ "mData": "nama_asset" , "defaultContent": ""},
{ "mData": "kode_asset" , "defaultContent": ""},
{ "mData": "tgl_beli_asset" , "defaultContent": ""},
{ "mData": "grup", "defaultContent": ""},
{ "mData": "model" , "defaultContent": ""},
{ "mData": "lokasi", "defaultContent": "" }
]
});
});

$(document).ready( function ()
{
var tablebiy = $('#tabelbiy').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/BiayaAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_biaya", "defaultContent": ""},
{ "mData": "grup" , "defaultContent": ""},
{ "mData": "id_wo.id_wo" , "defaultContent": ""},
{ "mData": "kode_wo" , "defaultContent": ""},
{ "mData": "id_header_moveout.id_header_moveout", "defaultContent": "" },
{ "mData": "id_header_moveout.referensi" , "defaultContent": ""},
{ "mData": "jumlah_orang" , "defaultContent": ""},
{ "mData": "biaya", "defaultContent": ""},
{ "mData": "start", "defaultContent": ""},
{ "mData": "kode_spare_part", "defaultContent": ""},
{ "mData": "jumlah", "defaultContent": ""},
{ "mData": "harga", "defaultContent": ""},
{ "mData": "total", "defaultContent": ""},
{ "mData": "deskripsi", "defaultContent": "" }
]
});
$('#referensi').on('click', function ()
{
tablebiy.search( this.value ).draw();
} );

setInterval( function ()
{
tablebiy.ajax.reload();
}, 100 );
});

$(document).ready( function ()
{
var tablebiy = $('#tabelhisbiy').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/BiayaAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_biaya"},
{ "mData": "grup" },
{ "mData": "id_wo.id_wo" },
{ "mData": "kode_wo" },
{ "mData": "id_header_moveout.id_header_moveout" },
{ "mData": "id_header_moveout.referensi" },
{ "mData": "jumlah_orang" },
{ "mData": "biaya"},
{ "mData": "start"},
{ "mData": "kode_spare_part"},
{ "mData": "jumlah"},
{ "mData": "harga"},
{ "mData": "total"},
{ "mData": "deskripsi" }
]
});
// $('#min, #max').keyup( function()
// {
//           tablebiy.search( this.value ).draw();
//        } );
});

$(document).ready( function ()
{
var table = $('#tabelmov').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/MoveoutAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_moveout"},
{ "mData": "id_spare_part.id_spare_part" },
{ "mData": "kode_moveout" },
{ "mData": "kode_spare_part" },
{ "mData": "keterangan" },
{ "mData": "tgl_moveout"},
{ "mData": "jumlah"},
{ "mData": "harga"},
{ "mData": "total"}
]
});
});

//$(document).ready( function ()
//{
//tablex = $('#tabel_log_wo_asset').DataTable({
//"columnDefs":[{"defaultContent":"-","targets":"_all"}],
//"sAjaxSource": "/WoFail",
//"scrollX": "200px",
//"sAjaxDataProp": "",
//"order": [[ 0, "asc" ]],
//"aoColumns": [
//{ "mData": "id_wo"},
//{ "mData": "id_asset.id_asset", "defaultContent": "","defaultContent": "" ,"visible":false},
//{ "mData": "id_dept.id_dept", "defaultContent": "","defaultContent": "" ,"visible":false},
//{ "mData": "kode_wo" ,"defaultContent": ""},
//{ "mData": "nama_dept","defaultContent": ""},
//{ "mData": "title","defaultContent": ""},
//{ "mData": "kode_asset","defaultContent": ""},
//{"mData": "lokasi","defaultContent": ""},
//{"mData": "status_pekerjaan","defaultContent": ""},
//{"mData": "prioritas","defaultContent": ""},
//{ "mData": "solution","defaultContent": ""},
//{ "mData": "jenis_pekerjaan","defaultContent": ""},
//{ "mData": "pembuatan","defaultContent": ""},
//{ "mData": "uptime","defaultContent": ""},
//{ "mData": "downtime","defaultContent": ""},
//{ "mData": "quantity_troble","defaultContent": ""},
//{ "mData": "batch_no","defaultContent": ""},
//{ "mData": "product_name","defaultContent": ""},
//{ "mData": "quantity","defaultContent": ""},
//{ "mData": "uom","defaultContent": ""},
//{ "mData": "mtbf","defaultContent": "","visible":false},
//{ "mData": "mttr","defaultContent": "","visible":false},
//{ "mData": "work_time","defaultContent": ""},
//{ "mData": "cycle_time","defaultContent": ""},
//{ "mData": "good_pieces","defaultContent": ""},
//{ "mData": "ar","defaultContent": "","visible":false},
//{ "mData": "pr","defaultContent": "","visible":false},
//{ "mData": "qr","defaultContent": "","visible":false}
//]
//});
//
//$('#asset_code').on( 'keyup click', function ()
//{
//tablex.search( this.value ).draw();
//} );
//
//
//
//});

$(document).ready( function ()
{
var tablex = $('#tabelhemovAll').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/header_mov_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_header_moveout"},
{ "mData": "referensi"},
{ "mData": "deskripsi"},
{ "mData": "stat_transaction"}
]
});
});

$(document).ready( function ()
{
var tablex = $('#tabelbreakheaderAll').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/Header_Break_Down",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_breakdown_header"},
{ "mData": "tanggal"},
{ "mData": "reference"},
{ "mData": "deskripsi"}


]
});
});

$(document).ready( function ()
{
var tablex = $('#tabelbreakdown').DataTable({

"scrollCollapse": true,
"responsive": true,
"columnDefs":[
{
"defaultContent":"-",
"targets":"_all"
}
],
"sAjaxSource": "/MtbfAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],

"aoColumns":
[
{ "mData": "id_MtbfMttr"},
{ "mData": "id_spare_part.id_spare_part"},
{ "mData": "id_breakdown_header.id_breakdown_header"},
{"mData": "reference"},
{"mData": "tgl"},
{"mData": "kode_asset"},
{"mData": "kode_spare_part"},
{"mData": "uptime"},
{"mData": "down_time"},
{"mData": "quantity_troble"},
{ "mData": "mtbf"},
{ "mData": "mttr"}
]
})
$('#MTreference').on( 'keyup click', function ()
{
tablex.search( this.value ).draw();

});
});

$(document).ready( function ()
{
var tableopen = $('#tableopen').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/header_Open",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_header_moveout"},
{ "mData": "referensi"},
{ "mData": "deskripsi"},
{ "mData": "stat_transaction"}
]
});

});

$(document).ready( function ()
{
var tabelend = $('#tabelend').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/header_Close",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_header_moveout"},
{ "mData": "referensi"},
{ "mData": "deskripsi"},
{ "mData": "stat_transaction"}
]
});

});

$(document).ready( function ()
{
var table = $('#tabelfail').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/failurAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_failur"},
{ "mData": "referensi"},
{ "mData": "id_wo.id_wo"},
{ "mData": "kode_wo"},
{ "mData": "kode_asset"},
{ "mData": "title"},
{ "mData": "efek"},
{ "mData": "penyebab"},
{ "mData": "tindakan"}
]
});

});

$(document).ready( function ()
{
var tablesaf = $('#tabelsafety').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/SafetyAll",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_safety"},
{ "mData": "referensi"},
{ "mData": "keterangan"},
{ "mData": "safety_procedure"},
{ "mData": "alat_safety"}
]
});
tablesaf.on('click', function(e)
{
var form = this;
var rows_selected = tablesaf.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_safety[]')
.val(rowId)
);
});
$('#id_safety').val(rows_selected.join(","));
//document.form_spare.id_safety.value=rows_selected.join(",");

});
});

$(document).ready( function ()
{
var tablev = $('#tabelsafety_spare').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/SafetyAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_safety"},
{ "mData": "referensi"},
{ "mData": "keterangan"},
{ "mData": "safety_procedure"},
{ "mData": "alat_safety"}
]
});

$('#safety_referensi').on( 'keyup click', function ()
{
tablev.search( this.value ).draw();
});

$('#safety_referensi').on( 'click', function ()
{
tablev.search( this.value ).draw();
} );

});

$(document).ready(function()
{
$('#tabelspare tfoot th').each( function () {
var title = $(this).text();
$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
} );

var table = $('#tabelspare').DataTable();

table.columns().every( function () {
var that = this;

$( 'input', this.footer() ).on( 'keyup change', function () {
if ( that.search() !== this.value ) {
that
.search( this.value )
.draw();
}
} );
} );
} );

$(document).ready(function()
{
$('#tabelmodaswo tfoot th').each( function () {
var title = $(this).text();
$(this).html( '<input type="text" placeholder="Search '+title+'" />' );
} );

var table = $('#tabelmodaswo').DataTable();

table.columns().every( function () {
var that = this;

$( 'input', this.footer() ).on( 'keyup change', function () {
if ( that.search() !== this.value ) {
that
.search( this.value )
.draw();
}
} );
} );
} );

$(document).ready( function ()
{
//$.fn.dataTableExt.afnFiltering.push
//(
//    function( oSettings, aData, iDataIndex )
//    {
//    var iMin;
//    var iMax;
//         iMin = document.getElementById('min').value;
//         iMax = document.getElementById('max').value;
//        var iVersion = aData[14];
//
//        if ( iMin == "" && iMax == "" )
//        {
//            return true;
//        }
//        else if ( iMin == "" && iVersion <= iMax )
//        {
//            return true;
//        }
//        else if ( iMin <= iVersion && "" == iMax )
//        {
//            return true;
//        }
//        else if ( iMin <= iVersion && iVersion <= iMax )
//        {
//            return true;
//        }
//        return false;
//
//
//
//    }
//);

});

$(document).ready( function ()
{
Tablelog = $('#tabel_log_wo').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/AuditAllv2",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 'id_aud_wo',"visible":false},
{ "mData": 'id_asset.id_asset',"visible":false},
{ "mData": 'id_pm.id_pm',"visible":false},
{ "mData": 'id_dept.id_dept',"visible":false},
{ "mData": "kode_wo"},
{ "mData": "nama_dept"},
{"mData": "title"},
{ "mData": "kode_asset"},
{ "mData": "lokasi"},
{"mData": "status_pekerjaan"},
{"mData": "prioritas"},
{ "mData": "action"},
{ "mData": "jenis_pekerjaan"},
{ "mData": 'pembuatan'},
{ "mData": "downtime"},
{ "mData": "uptime"},
{ "mData": "quantity_troble","defaultContent": ""},
{ "mData": "batch_no","defaultContent": ""},
{ "mData": "product_name","defaultContent": ""},
{ "mData": "quantity","defaultContent": ""},
{ "mData": "uom","defaultContent": ""},
{ "mData": "mtbf","defaultContent": ""},
{ "mData": "mttr","defaultContent": ""},
{ "mData": "work_time","defaultContent": ""},
{ "mData": "cycle_time","defaultContent": ""},
{ "mData": "good_pieces","defaultContent": ""},
{ "mData": "ar","defaultContent": ""},
{ "mData": "pr","defaultContent": ""},
{ "mData": "qr","defaultContent": ""}
]
});
$(function() {
var start = moment("2020-01-01 12:34:16");
var end = moment("2020-03-03 10:08:07");

function cb(start, end) {
$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
}

$('#reportrange').daterangepicker({
startDate: start,
endDate: end,
ranges: {
'Today': [moment(), moment()],
'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
'Last 7 Days': [moment().subtract(6, 'days'), moment()],
'Last 30 Days': [moment().subtract(29, 'days'), moment()],
'This Month': [moment().startOf('month'), moment().endOf('month')],
'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(start, end);

});
$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
var start = picker.startDate;
var end = picker.endDate;


$.fn.dataTable.ext.search.push(
function(settings, data, dataIndex) {
var min = start;
var max = end;
var startDate = new Date(data[13]);

if (min == null && max == null) {
return true;
}
if (min == null && startDate <= max) {
return true;
}
if (max == null && startDate >= min) {
return true;
}
if (startDate <= max && startDate >= min) {
return true;
}
return false;
}
);
Tablelog.draw();
chrtx();
$.fn.dataTable.ext.search.pop();
});
});

function chrtx()
{
var dataTable = anychart.data.parseHtmlTable('#tabel_log_wo'); //parse data from HTML table
var chart = anychart.bar(); //create chart
chart.xAxis().title("Website");//create name for X axis
chart.yAxis().title("Traffic Per Minute"); //create name for Y axis
chart.data(dataTable); //specify data source
var legend = chart.legend();
legend.enabled(true); //enable legend
chart.container("container"); //reference the container Id
chart.draw(); //initiate drawing the bar chart
//setTimeout( function(){chart.draw()}, 100);
}
function loading2()
{
jQuery.fn.dataTable.Api.register( 'sum()', function ( )
{
return this.flatten().reduce( function ( a, b ) {
if ( typeof a === 'string' ) {
a = a.replace(/[^\d.-]/g, '') * 1;
}
if ( typeof b === 'string' ) {
b = b.replace(/[^\d.-]/g, '') * 1;
}

return a + b;
}, 0 );
} );
}

$(document).ready( function ()
{
tabelhprend = $('#tabelhprend').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/HPR_Post",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_header_pr"},
{ "mData": "req_tanggal"},
{ "mData": "kode_pr"},
{ "mData": "jenis_pr"},
{ "mData": "status"}

]
});

});

$(document).ready( function ()
{
tpropen = $('#tpropen').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/HPR_validate",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_header_pr"},
{ "mData": "req_tanggal"},
{ "mData": "kode_pr"},
{ "mData": "jenis_pr"},
{ "mData": "status"}

]
});

tpropen.on('click', function(e)
{
var form = this;
var rows_selected = tpropen.column(0).checkboxes.selected();
$('#pid_header_pr').val(rows_selected.join(","));
var  dataver = $('#tpropen').DataTable().row('.selected').data();
$('#preq_tanggal').val(dataver['req_tanggal']);
$('#pkode_pr').val(dataver['kode_pr']);
$('#pjenis_pr').val(dataver['jenis_pr']);
$('#pstatus').val(dataver['status']);
});
});


$(document).ready( function ()
{
$("#pmedit").hide();
$("#pmrefresh").click(function (event)
{
tabelprev.ajax.reload();
})
$("#pmoverview").click(function (event)
{
$("#add").show();
$("#pmedit").hide();
$("#pmgeneral").hide();
document.getElementById("form_pm").reset();
})

tabelprev = $('#tabelprev').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PmAll",
"scrollCollapse": true,
"responsive": true,
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{"mData": "id_pm", "defaultContent": ""},
{"mData": 'id_tr_asset.id_tr_asset', "visible":false },
{"mData": "kode_pm", "defaultContent": ""},
{"mData": "kode_asset", "defaultContent": ""},
{ "mData": "deskripsi", "defaultContent": ""},
{ "mData": "man_power", "defaultContent": ""},
{ "mData": "lead_time", "defaultContent": ""},
{ "mData": "frequency", "defaultContent": ""},
{ "mData": "freq_unit", "defaultContent": ""},
{"mData": "next_due_date", "defaultContent": ""},
{"mData": "wo_type", "defaultContent": ""},
{"mData": "location", "defaultContent": ""}
]
});

$("#pmgeneral").hide();

});

$(document).ready( function ()
{
$("#pmadd").click(function (event)
{
$("#pmgeneral").show();
})
$("#pmedit").click(function (event)
{
$("#pmgeneral").show();
var form = this;
var rows_selected = tabelprev.column(0).checkboxes.selected();

$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_pm[]')
.val(rowId)
);
});

$('#id_pm').val(rows_selected.join(","));
$('#jid_pm').val(rows_selected.join(","));
tabelprev1 = $('#tabelprev').DataTable().row('.selected').data();
$('#jkode_pm').val(tabelprev1['kode_pm']);
$('#kode_wo').val(tabelprev1['kode_pm']);
$('#title').val(tabelprev1['deskripsi']);
$('#location').val(tabelprev1['location']);
$('#lokasi').val(tabelprev1['location']);

$('#id_tr_asset').val(tabelprev1['id_tr_asset']['id_tr_asset']);
$('#id_tr_asset').val(tabelprev1['id_tr_asset']['id_tr_asset']);

$('#kode_pm').val(tabelprev1['kode_pm']);
$('#asset_code').val(tabelprev1['kode_asset']);
$('#deskripsi').val(tabelprev1['deskripsi']);
$('#issue').val(tabelprev1['deskripsi']);

$('#man_power').val(tabelprev1['man_power']);
$('#lead_time').val(tabelprev1['lead_time']);
$('#frequency').val(tabelprev1['frequency']);
$('#freq_unit').val(tabelprev1['freq_unit']);
$('#next_due_date').val(tabelprev1['next_due_date']);
$('#wo_type').val(tabelprev1['wo_type']);

})
tabelprev.on('click', function(e)
{
$("#pmedit").show();
});
});

$(document).ready( function ()
{
tabel_calendar = $('#tabel_calendar').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/calendar",
"scrollCollapse": true,
"responsive": true,
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{"mData": "id_jadwal", "defaultContent": ""},
{"mData": "id_pm.id_pm", "defaultContent": "","visible":false},
{"mData": "start", "defaultContent": ""},
{"mData": "end", "defaultContent": ""},
{ "mData": "kode_pm", "defaultContent": ""},
{ "mData": "title", "defaultContent": ""},
{ "mData": "location", "defaultContent": ""},
{ "mData": "status", "defaultContent": ""}
]
});
tabel_calendar.on('click', function(e)
{
var form = this;
var rows_selected = tabel_calendar.column(0).checkboxes.selected();

$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_jadwal[]')
.val(rowId)
);
});

$('#id_jadwal').val(rows_selected.join(","));
$('#id').val(rows_selected.join(","));

tabel_calendar1 = $('#tabel_calendar').DataTable().row('.selected').data();

$('#id_jadwal').val(tabel_calendar1['id_jadwal']);
$('#id_wo_pm').val(tabel_calendar1['id_jadwal']);
$('#jid_pm').val(tabel_calendar1['id_pm']['id_pm']);
$('#start').val(tabel_calendar1['start']);
$('#end').val(tabel_calendar1['end']);
$('#jkode_pm').val(tabel_calendar1['kode_pm']);
$('#wo_code').val(tabel_calendar1['kode_pm']);
$('#title').val(tabel_calendar1['title']);
$('#issue').val(tabel_calendar1['title']);
$('#location').val(tabel_calendar1['location']);
$('#status').val(tabel_calendar1['status']);
$('#stts').val(tabel_calendar1['status']);
});
});

$(document).ready( function ()
{
var tabel_log_calendar = $('#tabel_log_calendar').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/log_calendar",
"scrollCollapse": true,
"responsive": true,
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{"mData": "id_log_jadwal", "defaultContent": ""},
{"mData": "id_pm.id_pm", "defaultContent": ""},
{"mData": "start", "defaultContent": ""},
{"mData": "end", "defaultContent": ""},
{ "mData": "kode_pm", "defaultContent": ""},
{ "mData": "title", "defaultContent": ""},
{ "mData": "status", "defaultContent": ""}
]
});
tabel_log_calendar.on('click', function(e)
{
var form = this;
var rows_selected = tabel_log_calendar.column(0).checkboxes.selected();

$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_jadwal[]')
.val(rowId)
);
});

});
});

$(document).ready( function ()
{
var tablhco = $('#tabelhco').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/header_cst_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_header_cst_op"},
{ "mData": "date" },
{ "mData": "reference" },
{ "mData": "descrip"},
{ "mData": "status" }
]
});
// then you can delete the refreshTable function entirely.

tablhco.on('click', function(e)
{
var form = this;
var rows_selected = tablhco.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_header_cst_op[]')
.val(rowId)
);
});
$('#id_header_cst_op').val(rows_selected.join(","));
});
setInterval (tablhco.ajax.reload, 10000);
});

$(document).ready( function ()
{
var tabelohh = $('#tabelohh').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/OnHandStokAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_OnHandStok"},
{ "mData": "id_asset.id_asset" },
{ "mData": "asset_code" },
{ "mData": "asset_name"},
{ "mData": "begin_balance" },
{ "mData": "transfer" },
{ "mData": "consume" },
{ "mData": "adjustment" },
{ "mData": "end_balance" }
]
});
// then you can delete the refreshTable function entirely.

tabelohh.on('click', function(e)
{
var form = this;
var rows_selected = tabelohh.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_OnHandStok[]')
.val(rowId)
);
});
$('#id_OnHandStok').val(rows_selected.join(","));
});
setInterval (tabelohh.ajax.reload, 10000);
});

$(document).ready( function ()
{
tabel_project_detail = $('#tabel_project_detail').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/project_detail_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_project_detail"},
{ "mData": "id_header_cst_pro.id_header_cst_pro", "defaultContent": "","visible":false },
{ "mData": "id","visible":false },
{ "mData": "date" },
{ "mData": "reference"},
{ "mData": "descrip" },
{ "mData": "code" }
]
});
// then you can delete the refreshTable function entirely.

tabel_project_detail.on('click', function(e)
{
var form = this;
var rows_selected = tabel_project_detail.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_OnHandStok[]')
.val(rowId)
);
});
$('#id_OnHandStok').val(rows_selected.join(","));
});
setInterval (tabel_project_detail.ajax.reload, 10000);//xxxxxxxxxxxx///


});

$(document).ready( function ()
{
tabel_project_material = $('#tabel_project_material').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/project_material_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"footerCallback": function ( row, data, start, end, display )
{
var api = this.api(), data;

// Remove the formatting to get integer data for summation
var intVal = function ( i ) {
return typeof i === 'string' ?
i.replace(/[\$,]/g, '')*1 :
typeof i === 'number' ?
i : 0;
};

// Total over all pages
total = api
.column( 8, { search: 'applied'} )
.data()
.reduce( function (a, b)
{
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 1 ).footer() ).html('Grand Total :'+ total +' ');
},

"aoColumns": [
{  "mData": "id_project_material"},
{ "mData": "id_header_cst_pro.id_header_cst_pro","visible":false,"defaultContent": "" },
{  "mData": "id_inventory.id_inventory","visible":false,"defaultContent": ""},
{ "mData": "date" },
{ "mData": "reference"},
{ "mData": "descrip" ,"visible":false},
{ "mData": "quantity" },
{ "mData": "cost" },
{ "mData": "subtotal_cost" },
{ "mData": "uom" },
{ "mData": "account" },
{ "mData": "material_code","defaultContent": "" },
{ "mData": "material_name" ,"defaultContent": ""}
]



});

setInterval (tabel_project_detail.ajax.reload, 100);
setInterval (tabel_project_material.ajax.reload, 100);


//tabel_project_detail.column( 10 ).data().sum();
});

$(document).ready( function ()
{
$('#treference').on( 'click', function ()
{
tabel_project_material.search( this.value ).draw();
tabel_project_detail.search( this.value ).draw();

tpropen.search( this.value ).draw();
tabelhprend.search( this.value ).draw();
tblpo.search( this.value ).draw();


});

$('#treferences').on( 'click', function ()
{
tpropen.search( this.value ).draw();
tabelhprend.search( this.value ).draw();
tblpo.search( this.value ).draw();
});

$('#treference').on( 'click', function ()
{
tabel_calendar.search( this.value ).draw();
tabelwoend.search( this.value ).draw();
tabelcostdoc.search( this.value ).draw();

tpropen.search( this.value ).draw();
tabelhprend.search( this.value ).draw();
tblpo.search( this.value ).draw();
});

$('#account_code').on( 'dblclick', function ()
{
$("#summary").show();
tabelacc.search( this.value ).draw();
tabelCostbyAccount.search( this.value ).draw();
tabelcostdoc.search( this.value ).draw();
});
});

$(document).ready( function ()
{
tabelpro = $('#tabelpro').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes":
{"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/header_cpro_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{  "mData": "id_header_cst_pro"},
{ "mData": "date"},
{ "mData": "reference"},
{ "mData": "descrip"},
{ "mData": "status"}
]
});
// then you can delete the refreshTable function entirely.

tabelpro.on('click', function(e)
{
var form = this;
var rows_selected = tabelpro.column(0).checkboxes.selected();
$.each(rows_selected, function(index, rowId){
$(form).append(
$('<input>')
.attr('type', 'hidden')
.attr('name', 'id_header_cst_pro[]')
.val(rowId)
);
});
$('#id_header_cst_pro').val(rows_selected.join(","));
$('#mid_header_cst_pro').val(rows_selected.join(","));
$('#lid_header_cst_pro').val(rows_selected.join(","));

tabelpro1 = $('#tabelpro').DataTable().row('.selected').data();

$('#ldate').val(tabelpro1['date']);
$('#lreference').val(tabelpro1['reference']);


});
});

$(document).ready( function ()
{
$("#box_wo").slideUp();
$("#wocancel").click(function (event)
{
document.getElementById("form_work_order").reset();
$("#box_wo").slideUp();
})
$("#woadd").click(function (event)
{
document.getElementById("form_work_order").reset();
$("#box_wo").slideDown();
})
tabelver = $('#tabelver').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/WoIncoming",
"cache": true,
"scrollY": "800px",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [

{ "mData": "id_wo"},
{ "mData": "id_tr_asset.id_tr_asset", "defaultContent": "","visible":false },
{ "mData": "id_dept.id_dept", "defaultContent": "" ,"visible":false},
{ "mData": "kode_wo" ,"defaultContent": ""},
{ "mData": "nama_dept","defaultContent": ""},

{ "mData": "title","defaultContent": ""},
{ "mData": "kode_asset","defaultContent": ""},
{"mData": "lokasi","defaultContent": ""},
{"mData": "status_pekerjaan","defaultContent": ""},
{"mData": "prioritas","defaultContent": ""},

{ "mData": "solution","defaultContent": "","visible":false},
{ "mData": "jenis_pekerjaan","defaultContent": ""},
{ "mData": "pembuatan","defaultContent": ""},
{ "mData": "setup","defaultContent": "","visible":false},
{ "mData": "breakdown","defaultContent": "","visible":false},


{ "mData": "batch_no","defaultContent": ""},
{ "mData": "product_name","defaultContent": ""},
{ "mData": "quantity","defaultContent": "","visible":false},
{ "mData": "uom","defaultContent": ""},

{ "mData": "mtbf","defaultContent": "","visible":false},
{ "mData": "mttr","defaultContent": "","visible":false},
{ "mData": "work_time","defaultContent": "","visible":false},
{ "mData": "cycle_time","defaultContent": "","visible":false},
{ "mData": "good_pieces","defaultContent": "","visible":false},

{ "mData": "start","defaultContent": "","visible":false},
{ "mData": "end","defaultContent": "","visible":false},

{ "mData": "ar","defaultContent": "","visible":false},
{ "mData": "pr","defaultContent": "","visible":false},
{ "mData": "qr","defaultContent": "","visible":false}

]
});

$('#woedit').on('click', function(e)
{
$("#box_wo").slideDown();
var form = this;
var rows_selected = tabelver.column(0).checkboxes.selected();
$('#id_wo').val(rows_selected.join(","));
$('#id').val(rows_selected.join(","));
tabelver1 = $('#tabelver').DataTable().row('.selected').data();
$('#id_tr_asset').val(tabelver1['id_tr_asset']['id_tr_asset']);
$('#id_dept').val(tabelver1['id_dept']['id_dept']);
$('#kode_wo').val(tabelver1['kode_wo']);
$('#codein').val(tabelver1['kode_wo']);
$('#nama_dept').val(tabelver1['nama_dept']);
$('#issue').val(tabelver1['title']);
$('#kode_asset').val(tabelver1['kode_asset']);
$('#lokasi').val(tabelver1['lokasi']);
$('#status_pekerjaan').val(tabelver1['status_pekerjaan']);
$('#prioritas').val(tabelver1['prioritas']);
$('#solution').val(tabelver1['solution']);
$('#jenis_pekerjaan').val(tabelver1['jenis_pekerjaan']);
$('#pembuatan').val(tabelver1['pembuatan']);
$('#setup').val(tabelver1['setup']);
$('#breakdown').val(tabelver1['breakdown']);
$('#quantity_troble').val(tabelver1['quantity_troble']);
$('#batch_no').val(tabelver1['batch_no']);
$('#product_name').val(tabelver1['product_name']);
$('#Quantity').val(tabelver1['quantity']);
$('#uom').val(tabelver1['uom']);
$('#mtbf').val(tabelver1['mtbf']);
$('#mttr').val(tabelver1['mttr']);
$('#work_time').val(tabelver1['work_time']);
$('#cycle_time').val(tabelver1['cycle_time']);
$('#good_pieces').val(tabelver1['good_pieces']);
$('#start').val(tabelver1['start']);
$('#end').val(tabelver1['end']);
$('#ar').val(tabelver1['ar']);
$('#pr').val(tabelver1['pr']);
$('#qr').val(tabelver1['qr']);

});
tabelver.on('click', function(e)
{
$("#box_wo").slideUp();
document.getElementById("form_work_order").reset();
});
});

$(document).ready( function ()
{
tabeldetilmat = $('#tabelmaterial').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/SelectEndJob",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "0", "defaultContent": "" ,"visible":false},
{ "mData": "1", "defaultContent": "" },
{ "mData": "2", "defaultContent": ""},
]
});

});

$(document).ready( function ()
{
tabeldetilmat.on('click', function(e)
{
var form = this;
var rows_selected = tabeldetilmat.column(0).checkboxes.selected();
$('#id_wo').val(rows_selected.join(","));
$('#id').val(rows_selected.join(","));
tabeldetilmat1 = $('#tabelmaterial').DataTable().row('.selected').data();
$('#codein').val(tabeldetilmat1['1']);
});
});

$(document).ready( function ()
{
tabelquery = $('#tabelquery').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/dashboardAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_dashboard"},
{ "mData": "name_querys" ,"defaultContent": ""},
{ "mData": "qvalues","defaultContent": ""}
]
});
tabelquery.on('click', function(e)
{
var form = this;
var rows_selected = tabelquery.column(0).checkboxes.selected();
$('#id_dashboard').val(rows_selected.join(","));

//  tabelquery = $('#tabelquery').DataTable().row('.selected').data();

//$('#id_asset').val(dataver['id_asset']['id_asset']);
//$('#id_dept').val(dataver['id_dept']['id_dept']);
});
});

$(document).ready( function ()
{
$("#ladd").click(function (event)
{
$("#lgeneral").show();
})
$("#ledit").hide();
$("#lgeneral").hide();
$("#ledit").click(function (event)
{
$("#lgeneral").show();
var form = this;
var rows_selected = tabeloc.column(0).checkboxes.selected();
$('#id_location').val(rows_selected.join(","));

tabelc = $('#tabeloc').DataTable().row('.selected').data();

$('#code_location').val(tabelc['code_location']);
$('#location').val(tabelc['code_location']);
$('#name').val(tabelc['name']);
})
$("#loverview").click(function (event)
{
document.getElementById("form_location").reset();
$("#ladd").show();
$("#ledit").hide();
$("#lgeneral").hide();
})
tabeloc = $('#tabeloc').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/LocationAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_location","defaultContent": ""},
{ "mData": "code_location" ,"defaultContent": ""},
{ "mData": "name","defaultContent": ""}
]
});
tabeloc.on('click', function(e)
{
$("#ledit").show();
$("#ladd").hide();
});

});

$(document).ready( function ()
{
tabelacc = $('#tabelacc').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/AccountRest/AccountAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_account","defaultContent": ""},
{ "mData": "kode" ,"defaultContent": ""},
{ "mData": "keterangan","defaultContent": ""},

]
});
$("#acgeneral").hide();
$("#accedit").click(function (event)
{
$("#acgeneral").show();
var form = this;
var rows_selected = tabelacc.column(0).checkboxes.selected();
$('#id_location').val(rows_selected.join(","));

tabelacc1 = $('#tabelacc').DataTable().row('.selected').data();

$('#kode').val(tabelacc1['kode']);
$('#account').val(tabelacc1['kode']);
$('#account_code').val(tabelacc1['kode']);
$('#keterangan').val(tabelacc1['keterangan']);
})
tabelacc.on('click', function(e)
{
$("#accedit").show();
});
$("#accrefresh").click(function (event)
{
tabelacc.ajax.reload();
})
$("#acoverview").click(function (event)
{
$("#acgeneral").hide();
document.getElementById("form_Account").reset();
})

$("#accadd").click(function (event)
{
$("#acgeneral").show();
document.getElementById("form_Account").reset();
})
});

$("#kenadd").click(function (event)
{
$("#kengeneral").show();
document.getElementById("form_kendaraan").reset();
})

$(document).ready( function ()
{
tabelCostbyAccount = $('#tabelCostbyAccount').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/AccountRest/sumCostbyAccount",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "0" ,"defaultContent": ""},
{ "mData": "1","defaultContent": ""},

]
});
//tabelacc.on('click', function(e)
//{
//var form = this;
//var rows_selected = tabelacc.column(0).checkboxes.selected();
//$('#id_location').val(rows_selected.join(","));
//
//   tabelacc1 = $('#tabelacc').DataTable().row('.selected').data();
//
//$('#kode').val(tabelacc1['1']);
//$('#account').val(tabelacc1['1']);
//$('#keterangan').val(tabelacc1['2']);
//
//});
});


$(document).ready( function ()
{
tabelv = $('#tabelv').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/VendorAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_vendor"},
{ "mData": "vendor_ref", "defaultContent": "" },
{ "mData": "vendor_name", "defaultContent": ""},
{ "mData": "vendor_address" ,"defaultContent": ""},
{ "mData": "contact_person","defaultContent": ""},
{ "mData": "phone","defaultContent": ""},
{ "mData": "note","defaultContent": ""}
]
});
$("#t2").hide();
$("#t1").click(function (event)
{
document.getElementById("form_vendor").reset();
$("#t2").hide();
});
$("#vedit").click(function (event)
{
$("#t2").show();
var form = this;
var rows_selected = tabelv.column(0).checkboxes.selected();
$('#id_vendor').val(rows_selected.join(","));
//$('#id').val(rows_selected.join(","));
datav = $('#tabelv').DataTable().row('.selected').data();

$('#vendor_ref').val(datav['vendor_ref']);
$('#pr_item').val(datav['vendor_ref']);
$('#vendor_name').val(datav['vendor_name']);
$('#pr_deskripsi').val(datav['vendor_name']);
$('#vendor_address').val(datav['vendor_address']);
$('#contact_person').val(datav['contact_person']);
$('#phone').val(datav['phone']);
$('#note').val(datav['note']);

$('#id_vendor').val(datav['id_vendor']);

});
$("#vadd").click(function (event)
{
$("#t2").show();
});
tabelv.on('click', function(e)
{
document.getElementById("form_suku_cadang").reset();
});
});



$(document).ready( function ()
{
tabelInventory = $('#tabelInventory').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/inventoryAll",
"sAjaxDataProp": "",
"scrollY": "800px",
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_inventory","defaultContent":"","visible":false},
{ "mData": "id_Items.id_Items","defaultContent":"","visible":false},
{ "mData": "kd_inventaris"},
{ "mData": "nma"},
{ "mData": "jns" },
{ "mData": "stok_awal"},
{ "mData": "transfer"},
{ "mData": "pemakaian"},
{ "mData": "adjustment"},
{ "mData": "stok_akhir"},
{ "mData": "uom"},
{ "mData": "hrga" }
]
});
setInterval (tabelInventory.ajax.reload, 1000);
});

$(document).ready( function ()
{
tabelInventory.on('click', function(e)
{
var form = this;
var rows_selected = tabelInventory.column(0).checkboxes.selected();
$('#id_inventory').val(rows_selected.join(","));
$('#id_inventaris').val(rows_selected.join(","));
tabelInventory1 = $('#tabelInventory').DataTable().row('.selected').data();

$('#pr_item').val(tabelInventory1['kd_inventaris']);
$('#Material_code').val(tabelInventory1['kd_inventaris']);
$('#kode_Items').val(tabelInventory1['kd_inventaris']);
$('#kode_inventory').val(tabelInventory1['kd_inventaris']);
$('#kd_inventaris').val(tabelInventory1['kd_inventaris']);


$('#Material_name').val(tabelInventory1['nama']);
$('#deskripsi').val(tabelInventory1['nama']);
$('#pr_deskripsi').val(tabelInventory1['nama']);
$('#nama').val(tabelInventory1['nama']);


$('#jenis').val(tabelInventory1['jenis']);
$('#uom').val(tabelInventory1['uom']);


$('#cost').val(tabelInventory1['harga_beli']);
$('#harga').val(tabelInventory1['harga_beli']);

$('#harga_jual').val(tabelInventory1['harga_jual']);
$('#stok_awal').val(tabelInventory1['stok_awal']);


$('#id_inv_org').val(tabelInventory1['id_inventory']);
$('#id_item').val(tabelInventory1['id_inventory']);
$('#id_Items').val(tabelInventory1['id_inventory']);

$('#item').val(tabelInventory1['kode_inventory']);




});
});

$(document).ready( function ()
{
tabelpekerja = $('#tabelpekerja').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/PekerjaAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_pekerja","defaultContent":""},
{ "mData": "id_plant", "defaultContent": "" ,"visible":false},
{ "mData": "nama_lengkap","defaultContent":""},
{ "mData": "nama_panggilan","defaultContent":""},
{ "mData": "alamat" ,"defaultContent":""},
{ "mData": "status_pernikahan","defaultContent":"" },
{ "mData": "tgl_lahir","defaultContent":"" },
{ "mData": "tgl_masuk_kerja","defaultContent":""},
{ "mData": "jabatan","defaultContent":""},
{ "mData": "code_jabatan","defaultContent":""},
{ "mData": "stat_pegawai","defaultContent":""},
{ "mData": "code_plant","defaultContent":""},
{ "mData": "status","defaultContent":""}

]
});
tabelpekerja.on('click', function(e)
{
$("#pedit").show();
});
$("#pgeneral").hide();
$("#pedit").click(function (event)
{
$("#pgeneral").show();
var form = this;
var rows_selected = tabelpekerja.column(0).checkboxes.selected();
$('#id_pekerja').val(rows_selected.join(","));
tabelpekerja1 = $('#tabelpekerja').DataTable().row('.selected').data();

$('#id_plant').val(tabelpekerja1['id_plant']);
$('#nama_lengkap').val(tabelpekerja1['nama_lengkap']);
$('#nama_panggilan').val(tabelpekerja1['nama_panggilan']);
$('#Alamat').val(tabelpekerja1['alamat']);
$('#Status_pernikahan').val(tabelpekerja1['Status_pernikahan']);
$('#tgl_lahir').val(tabelpekerja1['tgl_lahir']);
$('#tgl_masuk_kerja').val(tabelpekerja1['tgl_masuk_kerja']);
$('#jabatan').val(tabelpekerja1['jabatan']);
$('#code_jabatan').val(tabelpekerja1['code_jabatan']);
$('#stat_pegawai').val(tabelpekerja1['stat_pegawai']);
$('#code_plant').val(tabelpekerja1['code_plant']);
$('#status').val(tabelpekerja1['status']);

$('#id_inv_org').val(tabelpekerja1['id_pekerja']);
$('#item').val(tabelpekerja1['nama_lengkap']);

})
$("#prefresh").click(function (event)
{
tabelpekerja.ajax.reload();
})
$("#poverview").click(function (event)
{
$("#pgeneral").hide();
document.getElementById("form_pekerja").reset();

})
$("#padd").click(function (event)
{
$("#pgeneral").show();
document.getElementById("form_pekerja").reset();

})
});

$(document).ready( function ()
{
tabelplt = $('#tabelplt').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/PlantAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_plant","defaultContent": "","defaultContent": ""},
{ "mData": "code_plant" ,"defaultContent": ""},
{ "mData": "name_plant","defaultContent": ""}
]
});
tabelplt.on('click', function(e)
{
});
$("#pltgeneral").hide();
$("#pltedit").click(function (event)
{
$("#pltgeneral").show();

var form = this;
var rows_selected = tabelplt.column(0).checkboxes.selected();
$('#id_plant').val(rows_selected.join(","));

tabelplt1 = $('#tabelplt').DataTable().row('.selected').data();

$('#code_plant').val(tabelplt1['code_plant']);
$('#name_plant').val(tabelplt1['name_plant']);

})
$("#pltrefresh").click(function (event)
{
tabelplt.ajax.reload();
})
$("#pltoverview").click(function (event)
{
$("#pltgeneral").hide();
document.getElementById("form_plant").reset();

})
$("#pltadd").click(function (event)
{
$("#pltgeneral").show();
document.getElementById("form_plant").reset();

})
});

$(document).ready( function ()
{
tabel_pekerja = $('#tabel_pekerja').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/project_labour_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_project_labour","defaultContent": "","defaultContent": "" ,"visible":false},
{ "mData": "id_header_cst_pro" ,"defaultContent": "","visible":false},
{ "mData": "id_pekerja" ,"defaultContent": "","visible":false},
{ "mData": "date","defaultContent": ""},
{ "mData": "reference","defaultContent": ""},
{ "mData": "nama_lengkap","defaultContent": ""},
]
});
tabel_pekerja.on('click', function(e)
{
var form = this;
var rows_selected = tabel_pekerja.column(0).checkboxes.selected();
$('#id_plant').val(rows_selected.join(","));

tabel_pekerja1 = $('#tabel_pekerja').DataTable().row('.selected').data();

$('#code_plant').val(tabelplt1['code_plant']);
$('#code_plant').val(tabelplt1['code_plant']);
$('#keterangan').val(tabelplt1['keterangan']);

});
});

$(document).ready( function ()
{
var tabel_labour = $('#tabel_labour').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/project_labour_All",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_project_labour","defaultContent": "","defaultContent": "" ,"visible":false},
{ "mData": "id_header_cst_pro" ,"defaultContent": "","visible":false},
{ "mData": "id_pekerja" ,"defaultContent": "","visible":false},
{ "mData": "date","defaultContent": ""},
{ "mData": "reference","defaultContent": ""},
{ "mData": "nama_lengkap","defaultContent": ""},
]
});
//tabel_pekerja.on('click', function(e)
//{
//var form = this;
//var rows_selected = tabel_pekerja.column(0).checkboxes.selected();
//$('#id_plant').val(rows_selected.join(","));
//
//   tabel_pekerja1 = $('#tabel_pekerja').DataTable().row('.selected').data();
//
//$('#code_plant').val(tabelplt1['code_plant']);
//$('#code_plant').val(tabelplt1['code_plant']);
//$('#keterangan').val(tabelplt1['keterangan']);
//
//});
});

$(document).ready( function ()
{
$("#cdedit").hide();
$("#cdcancel").hide();
$("#cdcancel").click(function (event)
{
document.getElementById("form_cost_document").reset();
})
$("#cdrefresh").click(function (event)
{
tabelcostdoc.ajax.reload();
})
$("#cdedit").click(function (event)
{
var form = this;
var rows_selected = tabelcostdoc.column(0).checkboxes.selected();
$('#id_cost_doc').val(rows_selected.join(","));

tabelcostdoc1 = $('#tabelcostdoc').DataTable().row('.selected').data();

$('#id_cost_doc').val(tabelcostdoc1['id_cost_doc']);
$('#id_wo_pm').val(tabelcostdoc1['id_wo_pm']);
$('#id_inv_org').val(tabelcostdoc1['id_inv_org']);
$('#wo_code').val(tabelcostdoc1['kode']);
$('#issue').val(tabelcostdoc1['issue']);
$('#pembuatan').val(tabelcostdoc1['pembuatan']);
$('#account').val(tabelcostdoc1['account']);
$('#status').val(tabelcostdoc1['status']);
$('#cost_doc_type').val(tabelcostdoc1['cost_doc_type']);
$('#item').val(tabelcostdoc1['item']);
$('#quantity').val(tabelcostdoc1['quantity']);
$('#cost').val(tabelcostdoc1['cost']);

$('#total').val(tabelcostdoc1['total']);

})
tabelcostdoc = $('#tabelcostdoc').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/CostDocAll",
"sAjaxDataProp": "",
"footerCallback": function ( row, data, start, end, display )
{
var api = this.api(), data;
// Remove the formatting to get integer data for summation
var intVal = function ( i ) {
return typeof i === 'string' ?
i.replace(/[\$,]/g, '')*1 :
typeof i === 'number' ?
i : 0;
};

// Total over all pages ,13 is colounm who sum

total = api
.column( 12, { search: 'applied'} )
.data()
.reduce( function (a, b)
{
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 1 ).footer() ).html('Grand Total : '+ total +' ');
},
"order": [[ 0, "asc" ]],
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_cost_doc", "defaultContent": ""},
{ "mData": "id_wo_pm", "defaultContent": "","visible":false},
{ "mData": "id_inv_org", "defaultContent": "","visible":false},
{ "mData": "kode", "defaultContent": ""},
{ "mData": "issue", "defaultContent": ""},
{ "mData": "pembuatan", "defaultContent": ""},
{ "mData": "account", "defaultContent": ""},
{"mData": "status", "defaultContent": ""},
{ "mData": "cost_doc_type", "defaultContent": ""},
{ "mData": "item", "defaultContent": ""},
{"mData": "quantity", "defaultContent": ""},
{"mData": "cost", "defaultContent": ""},
{"mData": "total", "defaultContent": ""}
]
});
tabelcostdoc.on('click', function(e)
{
$("#cdedit").show();
$("#cdcancel").show();
});

});

$(document).ready( function ()
{
var tabel_users = $('#tabel_users').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/UserAll",

"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"scrollX": "200px",
"aoColumns": [
{ "mData": "id", "defaultContent": "","visible":false},
{ "mData": "email", "defaultContent": ""},
{ "mData": "password", "defaultContent": ""},
{ "mData": "name", "defaultContent": ""},
{ "mData": "lastName", "defaultContent": ""},
{ "mData": "active", "defaultContent": ""},
{ "mData": "role", "defaultContent": ""},
{"mData": "link", "defaultContent": ""}
]
});
setInterval (tabel_users.ajax.reload, 1000);

});

$(document).ready( function ()
{
tblpo = $('#tblpo').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/PR_All",
"sAjaxDataProp": "",
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_pr_req", "defaultContent": ""},
{ "mData": "id_header_pr.id_header_pr", "defaultContent": "","visible":false},
{ "mData": "id_item", "defaultContent": "","visible":false},
{ "mData": "req_tanggal", "defaultContent": ""},
{ "mData": "kode_pr", "defaultContent": ""},
{ "mData": "jenis_pr", "defaultContent": ""},
{ "mData": "status", "defaultContent": ""},
{ "mData": "item", "defaultContent": ""},
{"mData": "deskripsi", "defaultContent": ""},
{"mData": "qty", "defaultContent": ""},
{"mData": "satuan", "defaultContent": ""},
{"mData": "required_date", "defaultContent": ""},
{"mData": "note", "defaultContent": ""}
]
});
setInterval (tblpo.ajax.reload, 500000);
});

$(document).ready( function ()
{
tblpo.on('click', function(e)
{
var form = this;
var rows_selected = tblpo.column(0).checkboxes.selected();
$('#id_pr_req').val(rows_selected.join(","));
$('#poid_pr_req').val(rows_selected.join(","));

tblpo1 = $('#tblpo').DataTable().row('.selected').data();
$('#pid_header_pr').val(tblpo1['id_header_pr'] ['id_header_pr']);
$('#poid_header_pr').val(tblpo1['id_header_pr'] ['id_header_pr']);

$('#id_item').val(tblpo1['id_item']);
$('#preq_tanggal').val(tblpo1['req_tanggal']);
$('#pkode_pr').val(tblpo1['kode_pr']);

$('#pjenis_pr').val(tblpo1['jenis_pr']);
$('#pojenis_po').val(tblpo1['jenis_pr']);

$('#pstatus').val(tblpo1['status']);

$('#pr_item').val(tblpo1['item']);
$('#poitem').val(tblpo1['item']);

$('#podeskripsi').val(tblpo1['deskripsi']);
$('#pr_deskripsi').val(tblpo1['deskripsi']);

$('#pr_qty').val(tblpo1['qty']);
$('#poqty').val(tblpo1['qty']);

$('#pr_satuan').val(tblpo1['satuan']);
$('#posatuan').val(tblpo1['satuan']);

$('#pr_required_date').val(tblpo1['required_date']);
$('#pr_note').val(tblpo1['note']);
});
});


$(document).ready( function ()
{
tabel_sum_cost_by_date = $('#tabel_sum_cost_by_date').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/CostByDate",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2}
]
});
$(function() {
var start = moment("2020-01-01 12:34:16");
var end = moment("2020-03-03 10:08:07");

function cb(start, end) {
$('#range span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
}

$('#range').daterangepicker({
startDate: start,
endDate: end,
ranges: {
'Today': [moment(), moment()],
'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
'Last 7 Days': [moment().subtract(6, 'days'), moment()],
'Last 30 Days': [moment().subtract(29, 'days'), moment()],
'This Month': [moment().startOf('month'), moment().endOf('month')],
'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(start, end);

});
$('#range').on('apply.daterangepicker', function(ev, picker) {
var start = picker.startDate;
var end = picker.endDate;


$.fn.dataTable.ext.search.push(
function(settings, data, dataIndex) {
var min = start;
var max = end;
var startDate = new Date(data[0]);

if (min == null && max == null) {
return true;
}
if (min == null && startDate <= max) {
return true;
}
if (max == null && startDate >= min) {
return true;
}
if (startDate <= max && startDate >= min) {
return true;
}
return false;
}
);
tabel_sum_cost_by_date.draw();
chrt_cost();
$.fn.dataTable.ext.search.pop();
});
function chrt_cost()
{
var dt = anychart.data.parseHtmlTable('#tabel_sum_cost_by_date'); //parse data from HTML table
var chart = anychart.bar(); //create chart
chart.xAxis().title("Date");//create name for X axis
chart.yAxis().title("Downtime Per Minute"); //create name for Y axis
chart.data(dt); //specify data source
var legend = chart.legend();
legend.enabled(true); //enable legend
chart.container("container_dt"); //reference the container Id
chart.draw(); //initiate drawing the bar chart
//setTimeout( function(){chart.draw()}, 100);
setTimeout(function()
{
//  $( "#container_dt" ).remove();
document.getElementById("container_dt").remove();
}, 10000);
}



});

$(document).ready( function ()
{
tabel_aud_cost_by_date = $('#tabel_aud_cost_by_date').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/CostDocAudAll",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_cost_doc_aud", "defaultContent": "","visible":false},
{ "mData": "id_cost_doc", "defaultContent": "","visible":false},
{ "mData": "id_wo_pm", "defaultContent": "","visible":false},
{ "mData": "id_inv_org", "defaultContent": "","visible":false},
{ "mData": "kode", "defaultContent": ""},
{ "mData": "issue", "defaultContent": ""},
{ "mData": "pembuatan", "defaultContent": ""},
{ "mData": "account", "defaultContent": ""},
{"mData": "status", "defaultContent": ""},
{ "mData": "cost_doc_type", "defaultContent": ""},
{ "mData": "item", "defaultContent": ""},
{"mData": "quantity", "defaultContent": ""},
{"mData": "cost", "defaultContent": ""},
{"mData": "total", "defaultContent": ""}
]
});
});

$(document).ready( function ()
{
tabel_log_down = $('#tabel_log_down').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"sAjaxSource": "/sumDT",
"scrollX": "1",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": 0},
{ "mData": 1}

]
});

$(function() {
var start = moment("2020-01-01 12:34:16");
var end = moment("2020-03-03 10:08:07");

function cb(start, end) {
$('#drange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
}

$('#drange').daterangepicker({
startDate: start,
endDate: end,
ranges: {
'Today': [moment(), moment()],
'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
'Last 7 Days': [moment().subtract(6, 'days'), moment()],
'Last 30 Days': [moment().subtract(29, 'days'), moment()],
'This Month': [moment().startOf('month'), moment().endOf('month')],
'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(start, end);

});
$('#drange').on('apply.daterangepicker', function(ev, picker)
{
var start = picker.startDate;
var end = picker.endDate;

$.fn.dataTable.ext.search.push(
function(settings, data, dataIndex)
{
var min = start;
var max = end;
var startDate = new Date(data[0]);

if (min == null && max == null) {
return true;
}
if (min == null && startDate <= max) {
return true;
}
if (max == null && startDate >= min) {
return true;
}
if (startDate <= max && startDate >= min) {
return true;
}
return false;
}
);
tabel_log_down.draw();
chrt_log_down();
$.fn.dataTable.ext.search.pop();
});
function chrt_log_down()
{
var chart = anychart.column();
chart.xAxis().title("pembuatan");//create name for X axis
chart.yAxis().title("downtime");
var tableData = anychart.data.parseHtmlTable("#tabel_log_down");
chart.data(tableData);
chart.legend(true);
chart.container("container").draw();
}
});




$(document).ready( function ()
{
var tblpurord = $('#tblpurord').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/PO_All",
 "paging":   false,
        "ordering": false,
        "info":     false,
"sAjaxDataProp": "",
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_purchase_order", "defaultContent": ""},
{ "mData": "id_pr_req.id_pr_req", "defaultContent": ""},
{ "mData": "id_header_pr.id_header_pr", "defaultContent": ""},
{ "mData": "no_po", "defaultContent": ""},
{ "mData": "jenis_po", "defaultContent": ""},
{ "mData": "po_date", "defaultContent": ""},
{ "mData": "deskripsi", "defaultContent": ""},
{ "mData": "qty", "defaultContent": ""},
{"mData": "satuan", "defaultContent": ""},
{"mData": "qty", "defaultContent": ""},
{"mData": "harga", "defaultContent": ""},
{"mData": "tax", "defaultContent": ""},
{"mData": "sub_total", "defaultContent": ""}
]
});
setInterval (tblpurord.ajax.reload, 10000);
});

$(document).ready( function ()
{
var tblpurord_print = $('#tblpurord_print').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/PO_All",
"sAjaxDataProp": "",
"paging":   false,
        "info":     false,
        "filter":false,
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_purchase_order", "defaultContent": "","visible":false},
{ "mData": "id_pr_req.id_pr_req", "defaultContent": "","visible":false},
{ "mData": "id_header_pr.id_header_pr", "defaultContent": "","visible":false},
{ "mData": "no_po", "defaultContent": ""},
{ "mData": "jenis_po", "defaultContent": ""},
{ "mData": "po_date", "defaultContent": ""},
{ "mData": "deskripsi", "defaultContent": ""},
{ "mData": "qty", "defaultContent": ""},
{"mData": "satuan", "defaultContent": ""},
{"mData": "qty", "defaultContent": ""},
{"mData": "harga", "defaultContent": ""},
{"mData": "tax", "defaultContent": ""},
{"mData": "sub_total", "defaultContent": ""}
]
});
//setInterval (tblpurord.ajax.reload, 10000);
});


$(document).ready( function ()
{
tabel_Items = $('#tabel_Items').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/ItemsAll",
"sAjaxDataProp": "",
"scrollY": "800px",
"scrollX": "200px",
"aoColumns": [
{ "mData": "id_Items", "defaultContent": ""},
{ "mData": "id_vendor.id_vendor", "defaultContent": "","visible":false},
{ "mData": "kode_Items", "defaultContent": ""},
{ "mData": "serial", "defaultContent": ""},
{ "mData": "nama_Items", "defaultContent": ""},
{ "mData": "model", "defaultContent": ""},
{ "mData": "jenis", "defaultContent": ""},
{ "mData": "uom", "defaultContent": ""},
{"mData": "vendor_name", "defaultContent": ""},
{"mData": "purchase_date", "defaultContent": ""},
{"mData": "harga", "defaultContent": ""}
]
});
//setInterval (tabel_Items.ajax.reload, 10000);

tabel_Items.on('click', function(e)
{
document.getElementById("form_items").reset();
$("#igeneral").slideUp();
});

$("#igeneral").hide();
$("#iedit").click(function (event)
{

//$("#igeneral").show();
$("#igeneral").slideDown();
var form = this;
var rows_selected = tabel_Items.column(0).checkboxes.selected();
var tabel_Items1 = $('#tabel_Items').DataTable().row('.selected').data();

$('#id_Items').val(rows_selected.join(","));
$('#id_inv_org').val(rows_selected.join(","));

$('#inv_id_items').val(tabel_Items1['id_Items']);
$('#stok_kode_inventory').val(tabel_Items1['kode_Items']);
$('#kode_inventory').val(tabel_Items1['kode_Items']);
$('#item').val(tabel_Items1['kode_Items']);
$('#kd_inventaris').val(tabel_Items1['kode_Items']);
$('#kode_Items').val(tabel_Items1['kode_Items']);
$('#nama').val(tabel_Items1['nama_Items']);
$('#nma').val(tabel_Items1['nama_Items']);

$('#id_vendor').val(tabel_Items1['id_vendor']['id_vendor']);

$('#kode_Items').val(tabel_Items1['kode_Items']);
$('#kode_spare_part').val(tabel_Items1['kode_Items']);

$('#serial1').val(tabel_Items1['serial']);
$('#serial').val(tabel_Items1['serial']);

$('#nama_Items').val(tabel_Items1['nama_Items']);
$('#nama_spare_part').val(tabel_Items1['nama_Items']);
$('#nama').val(tabel_Items1['nama_Items']);

$('#model').val(tabel_Items1['model']);

$('#jns').val(tabel_Items1['jenis']);
$('#jenis').val(tabel_Items1['jenis']);
$('#jenis').val(tabel_Items1['jenis']);

$('#uom').val(tabel_Items1['uom']);
$('#vendor_name').val(tabel_Items1['vendor_name']);
$('#purchase_date').val(tabel_Items1['purchase_date']);
$('#harga').val(tabel_Items1['harga']);
$('#cost').val(tabel_Items1['harga']);
})
tabelacc.on('click', function(e)
{

$("#iedit").show();
});
$("#irefresh").click(function (event)
{
tabel_Items.ajax.reload();
})
$("#acoverview").click(function (event)
{
$("#acgeneral").hide();
document.getElementById("form_Account").reset();

})
$("#iadd").click(function (event)
{
$("#igeneral").show();
document.getElementById("form_items").reset();

})

});


$(document).ready( function ()
{
tabel_header_bom = $('#tabel_header_bom').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/h_bom_Rest/h_bom_All",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_header_bom"},
{ "mData": "kode_bom" },
{ "mData": "create_date" },
{ "mData": "kode_formula" },
{ "mData": "quantity" },
{ "mData": "note"}

]
});


$('#1').change(function() {
table.columns(0).visible(!$(this).is(':checked'))
});

$('#2').change(function() {
table.columns(1).visible(!$(this).is(':checked'))
})
$('#3').change(function() {
table.columns(2).visible(!$(this).is(':checked'))
})
$('#4').change(function() {
table.columns(3).visible(!$(this).is(':checked'))
})
$('#5').change(function() {
table.columns(4).visible(!$(this).is(':checked'))
})
$('#6').change(function() {
table.columns(5).visible(!$(this).is(':checked'))
})
$('#7').change(function() {
table.columns(6).visible(!$(this).is(':checked'))
})
$('#8').change(function() {
table.columns(7).visible(!$(this).is(':checked'))
})
$('#9').change(function() {
table.columns(8).visible(!$(this).is(':checked'))
})
$('#10').change(function() {
table.columns(9).visible(!$(this).is(':checked'))
})
$('#11').change(function() {
table.columns(10).visible(!$(this).is(':checked'))
})
$('#kode_wo').on( 'click', function ()
{
table.search( this.value ).draw();
} );
});


$(document).ready( function ()
{


tabel_formula = $('#tabel_formula').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/Api/FormulaAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_formula"},
{ "mData": "id_inventory.id_inventory" , "defaultContent": "","visible":false},
{ "mData": "kode_formula" },
{ "mData": "version"},
{ "mData": "formula_name"},
{ "mData": "kode_Items"},
{ "mData": "qty"},
{ "mData": "price"},
{ "mData": "amount"},
{ "mData": "uom"}
]
});


$('#1').change(function() {
table.columns(0).visible(!$(this).is(':checked'))
});

$('#2').change(function() {
table.columns(1).visible(!$(this).is(':checked'))
})
$('#3').change(function() {
table.columns(2).visible(!$(this).is(':checked'))
})
$('#4').change(function() {
table.columns(3).visible(!$(this).is(':checked'))
})
$('#5').change(function() {
table.columns(4).visible(!$(this).is(':checked'))
})
$('#6').change(function() {
table.columns(5).visible(!$(this).is(':checked'))
})
$('#7').change(function() {
table.columns(6).visible(!$(this).is(':checked'))
})
$('#8').change(function() {
table.columns(7).visible(!$(this).is(':checked'))
})
$('#9').change(function() {
table.columns(8).visible(!$(this).is(':checked'))
})
$('#10').change(function() {
table.columns(9).visible(!$(this).is(':checked'))
})
$('#11').change(function() {
table.columns(10).visible(!$(this).is(':checked'))
})
$('#kode_wo').on( 'click', function ()
{
table.search( this.value ).draw();
} );
});


$(document).ready( function ()
{
var tabel_bom = $('#tabel_bom').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/h_bom_Rest/bomAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData":"7"},
{ "mData":"1"},
{ "mData":"3" },
{ "mData":"4"},
{ "mData":"5"},
{ "mData":"6"},
{ "mData":"8"},
{ "mData":"9"},
{ "mData":"2"},
{ "mData":"0"}
]
});


$('#1').change(function() {
table.columns(0).visible(!$(this).is(':checked'))
});

$('#2').change(function() {
table.columns(1).visible(!$(this).is(':checked'))
})
$('#3').change(function() {
table.columns(2).visible(!$(this).is(':checked'))
})
$('#4').change(function() {
table.columns(3).visible(!$(this).is(':checked'))
})
$('#5').change(function() {
table.columns(4).visible(!$(this).is(':checked'))
})
$('#6').change(function() {
table.columns(5).visible(!$(this).is(':checked'))
})
$('#7').change(function() {
table.columns(6).visible(!$(this).is(':checked'))
})
$('#8').change(function() {
table.columns(7).visible(!$(this).is(':checked'))
})
$('#9').change(function() {
table.columns(8).visible(!$(this).is(':checked'))
})
$('#10').change(function() {
table.columns(9).visible(!$(this).is(':checked'))
})
$('#11').change(function() {
table.columns(10).visible(!$(this).is(':checked'))
})
$('#kode_wo').on( 'click', function ()
{
table.search( this.value ).draw();
} );
});



$(document).ready( function ()
{
tabel_overview = $('#tabel_overview').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"ajax": "/overview",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [

{ "mData": "0"},
{ "mData": "1" },
{ "mData": "2"},
{ "mData": "3" }
]
});

});


$(document).ready( function ()
{
$("#tab_spare_active").hide();
$('#asset_code1').on( 'dblclick', function ()
{
var a = $('#asset_code1').val();
if(a.length === 0 )
{
$("#tab_spare_active").hide();
tabelass.search(this.value).draw();
  return false;
}
if(a.length !== 0 )
{
$("#tab_spare_active").show();
tabelass.search(this.value).draw();
tabel_suku_cadang.search( this.value ).draw();
tabel_Tr_asset.search( this.value ).draw();
}
});

tabel_Tr_asset = $('#tabel_Tr_asset').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"sAjaxSource": "/AssetActivationAll",
"scrollX": "200px",
"scrollY": "400px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [

{ "mData": "id_tr_asset" },
{ "mData": "id_asset.id_asset" , "defaultContent": "","visible":false},
{ "mData": "asset_name" },
{ "mData": "serial" },
{ "mData": "asset_code" },
{ "mData": "parent_code" },
{ "mData": "location" },
{ "mData": "asset_tag" },
{ "mData": "safety_referensi" },
{ "mData": "status" },
{ "mData": "installation_date"},
{ "mData": "aseet_usage" },
{ "mData": "reason" }
]
});

$("#tredit").click(function (event)
{

var rows_selected = tabelass.column(0).checkboxes.selected();
var  tabel_Tr_asset1 = $('#tabel_Tr_asset').DataTable().row('.selected').data();
$('#id_tr_asset').val(tabel_Tr_asset1['id_tr_asset']);

$('#id_asset').val(tabel_Tr_asset1['id_tr_asset']);
$('#asset_code').val(tabel_Tr_asset1['asset_code']);
$('#asset_code1').val(tabel_Tr_asset1['asset_code']);
$('#ast_code').val(tabel_Tr_asset1['asset_code']);
$('#asset_name').val(tabel_Tr_asset1['asset_name']);
$('#asset_name1').val(tabel_Tr_asset1['asset_name']);
$('#ast_name').val(tabel_Tr_asset1['asset_name']);
$('#serial').val(tabel_Tr_asset1['serial']);
$('#serial1').val(tabel_Tr_asset1['serial']);
$('#srl').val(tabel_Tr_asset1['serial']);
$('#asset_tag').val(tabel_Tr_asset1['asset_tag']);
$('#parent_code').val(tabel_Tr_asset1['parent_code']);
$('#aseet_usage').val(tabel_Tr_asset1['aseet_usage']);
$('#reason').val(tabel_Tr_asset1['reason']);

$('#lokasi').val(tabel_Tr_asset1['location']);
$('#location').val(tabel_Tr_asset1['location']);

});
$("#trrefresh").click(function (event)
{
tabel_Tr_asset.ajax.reload();
});


});


$(document).ready( function ()
{
tabel_issue = $('#tabel_issue').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/Issue",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "0","defaultContent": ""},
{ "mData": "1" ,"defaultContent": ""},
{ "mData": "2","defaultContent": ""}
]
});
setInterval (tabel_issue.ajax.reload, 10000);


$("#cedit").click(function (event)
{
tabel_issue1 = $('#tabel_issue').DataTable().row('.selected').data();
$('#wo_code').val(tabel_issue1['0']);
$('#treference').val(tabel_issue1['0']);
$('#issue').val(tabel_issue1['1']);

});
});


$(document).ready( function ()
{
tabel_issue_costing = $('#tabel_issue_costing').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/IssueCosting",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "0","defaultContent": ""},
{ "mData": "1" ,"defaultContent": ""},
{ "mData": "2","defaultContent": ""}
]
});
setInterval (tabel_issue_costing.ajax.reload, 10000);


});

$(document).ready( function ()
{
$("#onedit").hide();
$("#oncancel").hide();
$("#onedit").click(function (event)
{
tabel_Onhand1 = $('#tabel_Onhand').DataTable().row('.selected').data();
$('#id_onhand').val(tabel_Onhand1['id_onhand']);
$('#id_inv_org').val(tabel_Onhand1['id_onhand']);
$('#kode_inventory').val(tabel_Onhand1['kode_inventory']);
$('#kode_Items').val(tabel_Onhand1['kode_inventory']);
$('#nama').val(tabel_Onhand1['nama']);
$('#item').val(tabel_Onhand1['kode_inventory']);
$('#cost').val(tabel_Onhand1['harga']);
$('#price').val(tabel_Onhand1['harga']);
$('#UOM').val(tabel_Onhand1['uom']);
$('#kode_suku_cadang').val(tabel_Onhand1['kode_inventory']);
$('#nama_suku_cadang').val(tabel_Onhand1['nama']);
})
$("#onrefresh").click(function (event)
{
tabel_Onhand.ajax.reload();
})
$("#oncancel").click(function (event)
{
document.getElementById("form_onhand").reset();
})
tabel_Onhand = $('#tabel_Onhand').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxSource": "/OnhandAll",
"sAjaxDataProp": "",
"scrollY": "800px",
"scrollX": "200px",
"aoColumns": [
{ "mData": 0},
{ "mData": 1},
{ "mData": 2},
{ "mData": 3},
{ "mData": 4},
{ "mData": 5},
{ "mData": 6},
{ "mData": 7}
]
});
tabel_Onhand.on('click', function(e)
{
$("#onedit").show();
});
});





$(document).ready( function ()
{
tabelhistorycostdoc = $('#tabelhistorycostdoc').DataTable({
"columnDefs":[{"defaultContent":"-","targets":"_all"}],
"select": {"style": "multi"},
"sAjaxSource": "/Cbd",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"scrollX": "200px",
"aoColumns": [
{ "mData": 0},
{ "mData": 1}
]
});
$(function() {
var start = moment("2020-01-01 12:34:16");
var end = moment("2020-03-03 10:08:07");

function cb(start, end) {
$('#cost_range span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
}

$('#cost_range').daterangepicker({
startDate: start,
endDate: end,
ranges: {
'Today': [moment(), moment()],
'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
'Last 7 Days': [moment().subtract(6, 'days'), moment()],
'Last 30 Days': [moment().subtract(29, 'days'), moment()],
'This Month': [moment().startOf('month'), moment().endOf('month')],
'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
}, cb);

cb(start, end);

});
$('#cost_range').on('apply.daterangepicker', function(ev, picker)
{
var start = picker.startDate;
var end = picker.endDate;

$.fn.dataTable.ext.search.push(
function(settings, data, dataIndex)
{
var min = start;
var max = end;
var startDate = new Date(data[0]);

if (min == null && max == null) {
return true;
}
if (min == null && startDate <= max) {
return true;
}
if (max == null && startDate >= min) {
return true;
}
if (startDate <= max && startDate >= min) {
return true;
}
return false;
}
);
tabelhistorycostdoc.draw();
chrt_cost();
chart_pie();
$.fn.dataTable.ext.search.pop();
});
function chrt_cost()
{
var chart = anychart.area();
var labels1 = chart.xAxis().labels();
var labels2 = chart.yAxis().labels();
labels1.enabled(true);
labels2.enabled(true);
//chart.xAxis().title("pembuatan");//create name for X axis
//chart.yAxis().title("downtime");
var tableData = anychart.data.parseHtmlTable("#tabelhistorycostdoc");
chart.data(tableData);
chart.legend(true);
chart.container("dashboard_cost").draw();


}
function chart_pie()
{
anychart.data.loadJsonFile('http://localhost:1111/Cbd', function (data)
{
var chart = anychart.pie(data);
chart.title('Pivot Biaya perbulan');
chart.container('dashboard_cost');
chart.draw();
});
}
});



$(document).ready(function(){
// DataTable
var dataTable = $('#tabel_Onhand_inventory').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxDataProp": "",
"footerCallback": function ( row, data, start, end, display )
{
var api = this.api(), data;
// Remove the formatting to get integer data for summation
var intVal = function ( i )
{
return typeof i === 'string' ?
i.replace(/[\$,]/g, '')*1 :
typeof i === 'number' ?
i : 0;
};

// Total over all pages ,13 is colounm who sum

total = api.column( 7, { search: 'applied'}).data().reduce( function (a, b)
{
return intVal(a) + intVal(b);
},
0);

// Update footer
$(api.column(1).footer()).html('Grand Total : '+ total +' ');
},
"scrollY": "800px",
"scrollX": "200px",
"serverSide": true,
"processing": true,
"ajax": {
"url": "/OnhandAllv2",
"dataSrc": "",
"type": "POST",
"data": function(d){
d.start_date = $('#start_date').val();
d.end_date = $('#end_date').val();
}
}
,
"aoColumns": [
{ "mData":  "idstok_card" ,"defaultContent": ""},
{ "mData":   "date_transaction", "defaultContent": "","visible":false},
{ "mData":  "kode_inventory", "defaultContent": ""},
{ "mData":  "harga", "defaultContent": ""},
{ "mData":   "stok_awal" ,"defaultContent": ""},
{ "mData":   "transfer","defaultContent": "" },
{ "mData":   "consume","defaultContent": "" },
{ "mData":   "adjustment","defaultContent": "" },
{ "mData":   "stok_akhir","defaultContent": "" },
{ "mData":  "note","defaultContent": ""}
]
});
$("#ohadd").click(function (event)
{
$("#form_journal").show();
$("#form_journal").reset();
});
$("#ohedit").click(function (event)
{

});
$("#ohedit").click(function (event)
{
var form = this;
var rows_selected = dataTable.column(0).checkboxes.selected();
$('#id_journal').val(rows_selected.join(","));

var tabel_Onhand_inventory1 = $('#tabel_Onhand_inventory').DataTable().row('.selected').data();

$('#idstok_card').val(tabel_Onhand_inventory1['idstok_card']);
$('#date_transaction').val(tabel_Onhand_inventory1['date_transaction']);
$('#kode_inventory').val(tabel_Onhand_inventory1['kode_inventory']);
$('#kode_suku_cadang').val(tabel_Onhand_inventory1['kode_inventory']);

$('#item').val(tabel_Onhand_inventory1['kode_inventory']);
$('#harga').val(tabel_Onhand_inventory1['harga']);
$('#cost').val(tabel_Onhand_inventory1['harga']);
$('#stok_awal').val(tabel_Onhand_inventory1['stok_awal']);
$('#transfer').val(tabel_Onhand_inventory1['transfer']);
$('#consume').val(tabel_Onhand_inventory1['consume']);
$('#adjustment').val(tabel_Onhand_inventory1['adjustment']);
$('#stok_akhir').val(tabel_Onhand_inventory1['stok_akhir']);
$('#note').val(tabel_Onhand_inventory1['note']);
});
// Search button
$('#btn_search').click(function(event){
dataTable.draw();
event.preventDefault();
});
});

$(document).ready(function(){
// DataTable
var dataTable = $('#tabel_stock_card').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": 0,"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[1, "asc"]],
"sAjaxDataProp": "",
"footerCallback": function ( row, data, start, end, display )
{
var api = this.api(), data;
// Remove the formatting to get integer data for summation
var intVal = function ( i ) {
return typeof i === 'string' ?
i.replace(/[\$,]/g, '')*1 :
typeof i === 'number' ?
i : 0;
};

// Total over all pages ,13 is colounm who sum

total = api
.column( 7, { search: 'applied'} )
.data()
.reduce( function (a, b)
{
return intVal(a) + intVal(b);
}, 0 );

// Update footer
$( api.column( 1 ).footer() ).html('Grand Total : '+ total +' ');
},
"scrollY": "800px",
"scrollX": "200px",
"serverSide": true,
"processing": true,
"ajax": {
"url": "/StockCard",
"dataSrc": "",
"type": "POST",
"data": function(d){
d.start_date = $('#start_date').val();
d.end_date = $('#end_date').val();
d.kode_inventory = $('#kode_inventory').val();
}
}
,
"aoColumns": [
{ "mData":  "idstok_card" ,"defaultContent": ""},
{ "mData":   "date_transaction", "defaultContent": ""},
{ "mData":  "kode_inventory", "defaultContent": ""},
{ "mData":   "stok_awal" ,"defaultContent": ""},
{ "mData":   "transfer","defaultContent": "" },
{ "mData":   "consume","defaultContent": "" },
{ "mData":   "adjustment","defaultContent": "" },
{ "mData":   "stok_akhir","defaultContent": "" },
{ "mData":  "note","defaultContent": ""}
]
});


// Search button
$('#btn_filter').click(function(event){
dataTable.draw();
event.preventDefault();
});

});





$(document).ready( function ()
{
//kode();
$("#div_journal_transaction").hide();
$("#form_journal").hide();
$("#form_stok_card").hide();
tabel_journal = $('#tabel_journal').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/JournalAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_journal","defaultContent": "","defaultContent": "" },
{ "mData": "journal_date" ,"defaultContent": ""},
{ "mData": "journal_code" ,"defaultContent": ""}

]
});
$("#jredit").click(function (event)
{
$("#form_stok_card").show();
var form = this;
var rows_selected = tabel_journal.column(0).checkboxes.selected();
$('#id_journal').val(rows_selected.join(","));

tabel_journal1 = $('#tabel_journal').DataTable().row('.selected').data();

$('#id_journal').val(tabel_journal1['id_journal']);
$('#journal_date').val(tabel_journal1['journal_date']);
$('#journal_code').val(tabel_journal1['journal_code']);

$('#stok_journal_date').val(tabel_journal1['journal_date']);
$('#stok_journal_code').val(tabel_journal1['journal_code']);
});
$("#form_stok_card").click(function (event)
{
$("#overview").hide();
});
$("#jradd").click(function (event)
{
$("#form_journal").show();
$("#form_journal").reset();
});
//$('#jurnal_code').on('dblclick', function ()
$('#jurnal_code').on('dblclick', function ()
{
tabel_journal.search( this.value ).draw();
$("#div_journal_transaction").show();
tabel_journal_transaction.search( this.value ).draw();
} );
function kode()
{
now = new Date();
randomNum = '';
randomNum += Math.round(Math.random() * 9);
randomNum += Math.round(Math.random() * 9);
randomNum += now.getTime().toString().slice(-3);
document.getElementById("jjournal_code").value =  'JINV'+randomNum;
}

});


$(document).ready( function ()
{
tabel_journal_transaction = $('#tabel_journal_transaction').DataTable({
"columnDefs":[{ "orderable": false,"className": "select-checkbox","targets": [0],"checkboxes": {"selectRow": true}}],
"select": {"style": "multi"},
"order": [[0, "asc"]],
"sAjaxSource": "/JournalTransactionAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"aoColumns": [
{ "mData": "id_journal_transaction","defaultContent": "","defaultContent": "" },
{ "mData": "journal_code" ,"defaultContent": ""},
{ "mData": "idstok_card" ,"defaultContent": ""},
{ "mData": "date_transaction" ,"defaultContent": ""},
{ "mData": "kode_inventory" ,"defaultContent": ""},
{ "mData": "stok_awal" ,"defaultContent": ""},
{ "mData": "transfer" ,"defaultContent": ""},
{ "mData": "consume" ,"defaultContent": ""},
{ "mData": "adjustment" ,"defaultContent": ""},
{ "mData": "stok_akhir" ,"defaultContent": ""},
{ "mData": "note" ,"defaultContent": ""}
]
});
$("#jredit").click(function (event)
{
var form = this;
var rows_selected = tabel_journal.column(0).checkboxes.selected();
$('#id_journal').val(rows_selected.join(","));

tabel_journal1 = $('#tabel_journal').DataTable().row('.selected').data();

$('#id_journal').val(tabel_journal1['id_journal']);
$('#journal_date').val(tabel_journal1['journal_date']);
$('#journal_code').val(tabel_journal1['journal_code']);

$('#stok_journal_date').val(tabel_journal1['journal_date']);
$('#stok_journal_code').val(tabel_journal1['journal_code']);
});
$("#jradd").click(function (event)
{
$("#form_journal").show();
$("#form_journal").reset();
});
});
