	/**
 * statisticsLive.js
 */

//SelectBox Detail 
$(function() {
	$('#place').change(function() {
		var placeSeq = $("#place option:selected").val()
		
		$("#detail").find('option').remove();
		$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#floor").find('option').remove();
		$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		if ($("#place option:selected").text() == "--선택--") {
			$("#graphDiv > *").remove();
		} else {
			$("#graphDiv > *").remove();
			$.ajax({
				url : 'liveSelectDetail.do',
				data : {placeSeq:placeSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {					
						for (i = 0; i < data.length; i++) {
							$("#detail").append("<option value =" + data[i].detailSeq + ">" + data[i].detailName + "</option>")
						}
					}
			    }
			});	
		}
	});
});

//SelectBox Floor 
$(function() {
	$('#detail').change(function() {
		var placeSeq = $("#place option:selected").val()
		var detailSeq = $("#detail option:selected").val()
		
		$("#floor").find('option').remove();
		$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		if ($("#detail option:selected").text() == "--선택--") {
			$("#graphDiv > *").remove();
		} else {
			$("#graphDiv > *").remove();
			$.ajax({
				url : 'liveSelectFloor.do',
				data : {placeSeq:placeSeq, detailSeq:detailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {					
						for (i = 0; i < data.length; i++) {
							$("#floor").append("<option value =" + data[i].floorSeq + ">" + data[i].floorName + "</option>")
						}
					}
			    }
			});	
		}
	});
});

//SelectBox Gender 
$(function() {
	$('#floor').change(function() {
		var placeSeq = $("#place option:selected").val()
		var detailSeq = $("#detail option:selected").val()
		var floorSeq = $("#floor option:selected").val()
		
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		if ($("#floor option:selected").text() == "--선택--") {
			$("#graphDiv > *").remove();
		} else {
			$("#graphDiv > *").remove();
			$.ajax({
				url : 'liveSelectGender.do',
				data : {placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {					
						for (i = 0; i < data.length; i++) {
							$("#gender").append("<option value =" + data[i].genderNum + ">" + data[i].genderName + "</option>")
						}
					}
			    }
			});	
		}
	});
});

// SelectBox All
$(function() {
	$('#gender').change(function() {
		var placeSeq = $("#place option:selected").val()
		var detailSeq = $("#detail option:selected").val()
		var floorSeq = $("#floor option:selected").val()
		var genderNum = $("#gender option:selected").val()
		
		if ($("#gender option:selected").text() == "--선택--") {
			$("#graphDiv > *").remove();
		} else {
			$("#graphDiv > *").remove();
			$.ajax({
				url : 'liveSelectAll.do',
				data : {placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq, genderNum:genderNum},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {					
						for (i = 0; i < data.length; i++) {
							
							var contents = "";
							var trashAmount = Math.floor(data[i].trashAmount);
							
							if (trashAmount > 90) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p100 chart--red chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>100%</span>"
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (trashAmount > 90 && trashAmount <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p75 chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>90% ↓</span>"
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (trashAmount > 75 && trashAmount <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p50 chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>75% ↓</span>"
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (trashAmount > 20 && trashAmount <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p30 chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>50% ↓</span>"
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}  else {	
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p10 chart--hover chart--xl' style='color:white;'>";
								contents += "<span class='charts__text'>10% ↓</span>"
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					}
			    }
			});	
		}
	});
});