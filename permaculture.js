'use strict'

function wrapper(){


function toggler(e){
  console.log("HI THERE")
  let this_id = $(this).attr("id")
  if ($(this).prop("checked") == true){
    $('#' + this_id + '-layer').removeClass("hidden")
  }
  else{
    $('#' + this_id + '-layer').addClass("hidden")
  }
}

$('#trees').on("click", toggler)
$('#water').on("click", toggler)
$('#roads').on("click", toggler)
$('#paths').on("click", toggler)
$('#structures').on("click", toggler)

}

wrapper()