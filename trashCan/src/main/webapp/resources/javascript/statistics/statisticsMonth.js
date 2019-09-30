/**
 * statisticsMonth.js
 */

$(function() {
	$('#month').change(function() {
		$("#place").find('option').remove();
		$("#place").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#detail").find('option').remove();
		$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#floor").find('option').remove();
		$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		var month = $("#month option:selected").val();
		
		if ($("#month option:selected").text() == "--선택--") {
			$.ajax({
				url : 'monthSelectMonth.do',
				data : {},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl'  style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		} else {
			$.ajax({
				url : 'monthSelectPlace.do',
				data : {month:month},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							$("#place").append("<option value =" + data[i].placeSeq + ">" + data[i].placeName + "</option>")
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		}
	});
});

// selcetBox Detail
$(function() {
	$('#place').change(function(){
		$("#detail").find('option').remove();
		$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#floor").find('option').remove();
		$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		var month = $("#month option:selected").val();
		var placeSeq = $("#place option:selected").val();
		
		if ($("#place option:selected").text() == "--선택--") {
			$.ajax({
				url : 'monthSelectPlace.do',
				data : {month:month},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		} else {
			$.ajax({
				url : 'monthSelectDetail.do',
				data : {month:month, placeSeq:placeSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							$("#detail").append("<option value =" + data[i].detailSeq + ">" + data[i].detailName + "</option>")
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		}
	});
});

// selcetBox Floor
$(function() {
	$('#detail').change(function(){
		$("#floor").find('option').remove();
		$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		var month = $("#month option:selected").val();
		var placeSeq = $("#place option:selected").val();
		var detailSeq = $("#detail option:selected").val();
		
		if ($("#detail option:selected").text() == "--선택--") {
			$.ajax({
				url : 'monthSelectDetail.do',
				data : {month:month, placeSeq:placeSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		} else {
			$.ajax({
				url : 'monthSelectFloor.do',
				data : {month:month, placeSeq:placeSeq, detailSeq:detailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							$("#floor").append("<option value =" + data[i].floorSeq + ">" + data[i].floorName + "</option>")
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		}
	});
});

// selcetBox Gender
$(function() {
	$('#floor').change(function(){
		$("#gender").find('option').remove();
		$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		
		var month = $("#month option:selected").val();
		var placeSeq = $("#place option:selected").val();
		var detailSeq = $("#detail option:selected").val();
		var floorSeq = $("#floor option:selected").val();
		
		if ($("#floor option:selected").text() == "--선택--") {
			$.ajax({
				url : 'monthSelectFloor.do',
				data : {month:month, placeSeq:placeSeq, detailSeq:detailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		} else {
			$.ajax({
				url : 'monthSelectGender.do',
				data : {month:month, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							$("#gender").append("<option value =" + data[i].genderNum + ">" + data[i].genderName + "</option>")
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		}
	});
});

// selcetBox All
$(function() {
	$('#gender').change(function(){
		var month = $("#month option:selected").val();
		var placeSeq = $("#place option:selected").val();
		var detailSeq = $("#detail option:selected").val();
		var floorSeq = $("#floor option:selected").val();
		var genderNum = $("#gender option:selected").val();
		
		if ($("#gender option:selected").text() == "--선택--") {
			$.ajax({
				url : 'monthSelectGender.do',
				data : {month:month, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		} else {
			$.ajax({
				url : 'monthSelectAll.do',
				data : {month:month, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq, genderNum:genderNum},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var max;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow chart--hover chart--xl' style='color:white; margin:0 15px;'>";
								contents += "<span class='charts__text'>" + data[i].statisticsUseNum + "회</span>";
								contents += "</div>";
								contents += "<div style='font-size: 12px; margin:0 15px'>";
								contents += "IP : " + data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							}
						}
					} else {
						$("#graphDiv > *").remove();
					}
			    }
			});	   
		}
	});
});