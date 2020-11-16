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

var prev_selected;

function feature_toggler(e){
	console.log("feature_toggler")
	let this_id = $(this).attr("id")
	if (prev_selected == this_id){
		$('#' + this_id + '_div').addClass("hidden")
		prev_selected = undefined;
		return
	}
	if (prev_selected == undefined){
		prev_selected = this_id
		$('#' + this_id + '_div').removeClass("hidden")
		return
	}
	$('#' + prev_selected + '_div').addClass("hidden")
	$('#' + this_id + '_div').removeClass("hidden")
	prev_selected = this_id
	return

}

$('#trees').on("click", toggler)
$('#water').on("click", toggler)
$('#roads').on("click", toggler)
$('#paths').on("click", toggler)
$('#structures').on("click", toggler)
$('#solarization').on("click", toggler)



let features_ids = ["shed", "path", "windbreak", "orchard", "riparian", "keyhole", "grasses", "invasive", "long_term"]

features_ids.forEach(function(d){
	$("#" + d).on("click", feature_toggler);
})

}

wrapper()