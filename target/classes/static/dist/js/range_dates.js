$(function()
{
var oTable = $('#tabel_log_wo').DataTable({
    "oLanguage": {
      "sSearch": "Filter Data"
    },
    "iDisplayLength": -1,
    "sPaginationType": "full_numbers",

  });

$('#datepicker_from').on( 'keyup click', function ()
  {
    minDateFilter = new Date(this.value).getTime();
    oTable.fnDraw();
  });

$('#datepicker_to').on( 'keyup click', function ()
 {
    maxDateFilter = new Date(this.value).getTime();
    oTable.fnDraw();
  });

});

// Date range filter
minDateFilter = "";
maxDateFilter = "";

$.fn.dataTableExt.afnFiltering.push(
  function(oSettings, aData, iDataIndex) {
    if (typeof aData._date == 'undefined') {
      aData._date = new Date(aData[0]).getTime();
    }

    if (minDateFilter && !isNaN(minDateFilter)) {
      if (aData._date < minDateFilter) {
        return false;
      }
    }

    if (maxDateFilter && !isNaN(maxDateFilter)) {
      if (aData._date > maxDateFilter) {
        return false;
      }
    }

    return true;
  }
);