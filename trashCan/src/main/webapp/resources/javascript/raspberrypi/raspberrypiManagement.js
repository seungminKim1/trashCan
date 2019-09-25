/**
 * raspberrypiManagement.js
 */

// selcet Box detail 제어 
$(function() {
	$('#place').change( function(){
		if ($("#place option:selected").text() == "--선택--") {
			$("#detail").find('option').remove();
			$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
		} else {
			var fkPlaceSeq = $("#place option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiPlace.do',
				data : {fkPlaceSeq:fkPlaceSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
			
			$.ajax({
				url : 'managementDetail.do',
				data : {fkPlaceSeq:fkPlaceSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					$("#detail").find('option').remove();
					$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					$("#floor").find('option').remove();
					$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					$("#gender").find('option').remove();
					$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					for (i = 0; i < data.length; i++) {
						$("#detail").append("<option value =" + data[i].detailSeq + ">" + data[i].detailName + "</option>")
					}
				} else {
					$("#detail").find('option').remove();
					$("#detail").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
				}
				console.log(data.length);
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		}
	});
});

// selcet Box floor 제어
$(function() {
	$('#detail').change( function(){
		if ($("#detail option:selected").text() == "--선택--") {
			$("#floor").find('option').remove();
			$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var fkPlaceSeq = $("#place option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiPlace.do',
				data : {fkPlaceSeq:fkPlaceSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		} else {
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiDetail.do',
				data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
			
			$.ajax({
				url : 'managementFloor.do',
				data : {fkDetailSeq:fkDetailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					$("#floor").find('option').remove();
					$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					$("#gender").find('option').remove();
					$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					for (i = 0; i < data.length; i++) {
						$("#floor").append("<option value =" + data[i].floorSeq + ">" + data[i].floorName + "</option>")
					}
				} else {
					$("#floor").find('option').remove();
					$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					$("#gender").find('option').remove()
					$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
				}
				console.log(data.length);
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		}
	});
});

// selcet Box gender 제어 
$(function() {
	$('#floor').change( function(){
		if ($("#floor option:selected").text() == "--선택--") {
			$("#gender").find('option').remove();
			$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
			
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiDetail.do',
				data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		} else {
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			var fkFloorSeq = $("#floor option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiFloor.do',
				data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq, fkFloorSeq:fkFloorSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
			
			$.ajax({
				url : 'managementGender.do',
				data : {fkFloorSeq:fkFloorSeq, fkDetailSeq:fkDetailSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
					$("#gender").find('option').remove();
					$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					if (data.length > 0) {
						for (i = 0; i < data.length; i++) {
							$("#gender").append("<option value =" + data[i].genderNum + ">" + data[i].genderName + "</option>")
						}
					} else {
						$("#gender").find('option').remove();
						$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
					}
					console.log(data.length);
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		}
	});
});

//selcet Box All 제어 
$(function() {
	$('#gender').change( function(){
		if ($("#gender option:selected").text() == "--선택--") {
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			var fkFloorSeq = $("#floor option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPiFloor.do',
				data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq, fkFloorSeq:fkFloorSeq},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		} else {
			
			var fkFloorSeq = $("#floor option:selected").val();
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			var fkGenderNum = $("#gender option:selected").val();
			$("#raspberrypiManagementTable tr").remove();
			
			$.ajax({
				url : 'managementPi.do',
				data : {fkFloorSeq:fkFloorSeq, fkDetailSeq:fkDetailSeq, fkPlaceSeq:fkPlaceSeq, fkGenderNum:fkGenderNum},
			    type : 'post',
			    dataType: 'json',
				success : function(data){
				if (data.length > 0) {
					var menu = "";
					
					menu += "<tr>";
					menu += "<td><strong>라즈베리파이IP</strong></td>";
					menu += "<td><strong>장소</strong></td>";
					menu += "<td><strong>디테일</strong></td>";
					menu += "<td><strong>층</strong></td>";
					menu += "<td><strong>남/여</strong></td>";
					menu += "<td><strong>상태 값</strong></td>";
					menu += "<td><strong>0 = 사용x<br>1 = 사용o</strong></td>";
					menu += "</tr>";
					$("#raspberrypiManagementTable").append(menu);
					
					for (i = 0; i < data.length; i++) {
						var contents ="";
						console.log(data[i].raspberrypiIp);
						contents += "<tr>";
						contents += "<td>" + data[i].raspberrypiIp + "</td>";
						contents += "<td>" + data[i].placeName + "</td>";
						contents += "<td>" + data[i].detailName + "</td>";
						contents += "<td>" + data[i].floorName + "</td>";
						contents += "<td>" + data[i].genderName + "</td>";
						contents += "<td>" + data[i].raspberrypiStatus + "</td>";
						contents += "<td><a href='infomation.do?ip=" + data[i].raspberrypiIp + "'>변경</a></td>";
						contents += "</tr>";
						$("#raspberrypiManagementTable").append(contents);
					}
				} else {
				}
			    },error:function(request,status,error){
			    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
		}
	});
});