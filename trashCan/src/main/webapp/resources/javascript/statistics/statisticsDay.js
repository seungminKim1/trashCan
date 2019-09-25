/**
 * statisticsDay.js
 */

$(function() {
	$('#month').change(function() {
		if ($("#month option:selected").text() == "--선택--") {
			$("#day").find('option').remove();
			$("#day").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#place").find('option').remove();
			$("#place").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			$.ajax({
				url : 'daySelectMonth.do',
				data : {},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var placeMax;
						
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			var month = $("#month option:selected").val()
			
			$.ajax({
				url : 'daySelectDay.do',
				data : {month:month},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {					
						for (i = 0; i < data.length; i++) {
							$("#day").append("<option value =" + data[i].day + ">" + data[i].day + "일" + "</option>")
						}
					}
			    }
			});	
		}
	});
});

// SelectBox Place
$(function() {
	$('#day').change(function(){
		if ($("#day option:selected").text() == "--선택--") {
			$("#place").find('option').remove();
			$("#place").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			$.ajax({
				url : 'daySelectMonth.do',
				data : {},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var placeMax;
						
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			$("#place").find('option').remove();
			$("#place").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
				
			$.ajax({
				url : 'daySelectPlace.do',
				data : {month:month, day:day},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var placeMax;
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
		if ($("#place option:selected").text() == "--선택--") {
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			
			$.ajax({
				url : 'daySelectPlace.do',
				data : {month:month, day:day},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					if (data.length >= 1) {
						var placeMax;
						$("#graphDiv > *").remove();
						
						for (i = 0; i < data.length; i++) {
							max = data[i].max;
						}
						for (i = 0; i < data.length -1; i++) {
							
							var percent = Math.floor(data[i].statisticsUseNum / max * 100);
							var contents = "";
							
							if (percent > 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].placeName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");

			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
				
			$.ajax({
				url : 'daySelectDetail.do',
				data : {month:month, day:day, placeSeq:placeSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
		if ($("#detail option:selected").text() == "--선택--") {
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			
			$.ajax({
				url : 'daySelectDetail.do',
				data : {month:month, day:day, placeSeq:placeSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].detailName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			var detailSeq = $("#detail option:selected").val()
				
			$.ajax({
				url : 'daySelectFloor.do',
				data : {month:month, day:day, placeSeq:placeSeq, detailSeq:detailSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
		if ($("#floor option:selected").text() == "--선택--") {
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			var detailSeq = $("#detail option:selected").val()
				
			$.ajax({
				url : 'daySelectFloor.do',
				data : {month:month, day:day, placeSeq:placeSeq, detailSeq:detailSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].floorName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			var detailSeq = $("#detail option:selected").val()
			var floorSeq = $("#floor option:selected").val()
				
			$.ajax({
				url : 'daySelectGender.do',
				data : {month:month, day:day, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
		if ($("#gender option:selected").text() == "--선택--") {
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			var detailSeq = $("#detail option:selected").val()
			var floorSeq = $("#floor option:selected").val()
			
			$.ajax({
				url : 'daySelectGender.do',
				data : {month:month, day:day, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].genderName;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
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
			var month = $("#month option:selected").val()
			var day = $("#day option:selected").val()
			var placeSeq = $("#place option:selected").val()
			var detailSeq = $("#detail option:selected").val()
			var floorSeq = $("#floor option:selected").val()
			var genderNum = $("#gender option:selected").val()
			
			$.ajax({
				url : 'daySelectAll.do',
				data : {month:month, day:day, placeSeq:placeSeq, detailSeq:detailSeq, floorSeq:floorSeq, genderNum:genderNum},
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
								contents += "<div class='charts__chart chart--p" + percent + " chart--grey' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 50 && percent <= 75) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--blue' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else if (percent > 25 && percent <= 50) {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--green' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].raspberrypiIp;
								contents += "</div>";
								contents += "</div>";
								
								$("#graphDiv").append(contents);
							} else {
								contents += "<div class='charts charts--vertical'>";
								contents += "<div class='charts__chart chart--p" + percent + " chart--yellow' style='color:white;'>";
								contents += data[i].statisticsUseNum + "회";
								contents += "</div>";
								contents += "<div style='font-size: 12px;'>";
								contents += data[i].raspberrypiIp;
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