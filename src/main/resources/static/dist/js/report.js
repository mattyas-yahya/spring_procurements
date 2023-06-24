
$(document).ready( function ()
{
var table = $('#tabelrass').DataTable({
"sAjaxSource": "/AssetAll",
"scrollX": "200px",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_asset"},
{ "mData": "serial" },
{ "mData": "nama_asset" },
{ "mData": "kode_asset",
"render": function (data, type, full, meta)
{
 return '<a href=/Detail_Spare/'+data+'>'+data+'</a>';
}
},
{ "mData": "tgl_beli_asset" },
{ "mData": "grup"},
{ "mData": "model" },
{ "mData": "lokasi" },
{ "mData": "asset_tag" },
{ "mData": "harga_beli" },
{ "mData": "garansi" }
]
});
});





//buat table PM
$(document).ready( function ()
{
var table = $('#tabelrpm').DataTable({
"sAjaxSource": "/PmAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_pm"},
{ "mData": "id_asset.id_asset"},
{ "mData": "kode_asset"},
{ "mData": "deskripsi"}
]
});
});

$(document).ready( function ()
{
var table = $('#tabelrspare').DataTable({
"sAjaxSource": "/GetSpare",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_spare_part"},
{ "mData": "id_asset.id_asset"},
{ "mData": "kode_spare_part"
,
"render": function (data, type, full, meta)
{
 return '<a href=/Detail_Spare/'+data+'>'+data+'</a>';
}
},
{ "mData": "kode_asset"},
{ "mData": "nama_spare_part"},
{ "mData": "vendor"},
{ "mData": "tgl_beli_spare"},
{ "mData": "harga_beli"},
{ "mData": "garansi"},
{ "mData": "serial"},
{ "mData": "consume"},
{ "mData": "stok"},
{ "mData": "end_balance"}
]
});
});

$(document).ready( function ()
{
var table = $('#taberdept').DataTable({
"sAjaxSource": "/DeptAll",
"sAjaxDataProp": "",
"order": [[ 0, "asc" ]],
"aoColumns": [
{ "mData": "id_dept"},
{ "mData": "nama_dept"},
{ "mData": "kode_dept"},

]
});
});

