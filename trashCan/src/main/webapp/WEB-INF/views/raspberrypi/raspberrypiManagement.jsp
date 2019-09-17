<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/raspberrypi/raspberrypiManagement.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
	<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-3.3.1.min.js"/>"></script>
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="raspberrypiContainer">
						<label>장소</label>
						<select id="place" name="place">
							<option value="dump">--선택--</option>
							<c:forEach var="place" items="${place}" varStatus="status">	
								<option value="${place.placeSeq}">${place.placeName}</option>
							</c:forEach>
						</select>
						<label>디테일</label>
						<select name="detail" id="detail">
							<option value="dump">--선택--</option>
						</select>
						<label>층</label>
						<select name="floor" id="floor">
							<option value="dump">--선택--</option>
						</select>
						<label>남/여</label>
						<select name="gender" id="gender">
							<option value="dump">--선택--</option>
						</select>
						<input type="button" id="selectPi" name="selectPi" value="조회">
						
						<table class="raspberrypiManagementTable" border="1" id="raspberrypiManagementTable">
						</table>
					</div>
				</div>
			</div>
		</c:when>
		<c:otherwise>
			<script type="text/javascript">
				window.location.href="<c:url value='/'/>"	
			</script>
		</c:otherwise>
	</c:choose>
</body>

<script type="text/javascript">
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
						$("#gender").find('option').remove()
						$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
						$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
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
			} else {
				var fkDetailSeq = $("#detail option:selected").val();
				
				$.ajax({
					url : 'managementFloor.do',
					data : {fkDetailSeq:fkDetailSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#floor").find('option').remove();
						$("#gender").find('option').remove()
						$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
						$("#floor").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
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
			} else {
				var fkFloorSeq = $("#floor option:selected").val();
				var fkDetailSeq = $("#detail option:selected").val();
				
				$.ajax({
					url : 'managementGender.do',
					data : {fkFloorSeq:fkFloorSeq, fkDetailSeq:fkDetailSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#gender").find('option').remove();
						$("#gender").append("<option value=" + "dump" + ">" + "--선택--" + "</option>");
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
	
	// 조회버튼 클릭
	$(function() {
		$('#selectPi').click( function(){
			var fkFloorSeq = $("#floor option:selected").val();
			var fkDetailSeq = $("#detail option:selected").val();
			var fkPlaceSeq = $("#place option:selected").val();
			var fkGenderNum = $("#gender option:selected").val();
			
			if (fkPlaceSeq == "dump") {
			    alert("장소를 선택해 주세요.");
			    $("#place").focus();
			    return false;
			} 
			// place만 선택 후 클릭 
			else if (fkDetailSeq == "dump" && fkFloorSeq == "dump" && fkGenderNum == "dump") {
				$.ajax({
					url : 'managementPiPlace.do',
					data : {fkPlaceSeq:fkPlaceSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#raspberrypiManagementTable tr").remove();
						$("#raspberrypiManagementTable td").remove();
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
			// place, detail 선택 후 클릭 
			else if (fkFloorSeq == "dump" && fkGenderNum == "dump") {
				$.ajax({
					url : 'managementPiDetail.do',
					data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#raspberrypiManagementTable tr").remove();
						$("#raspberrypiManagementTable td").remove();
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
			// place, detail, floor 선택 후 클릭
			else if (fkGenderNum == "dump") {
				$.ajax({
					url : 'managementPiFloor.do',
					data : {fkPlaceSeq:fkPlaceSeq, fkDetailSeq:fkDetailSeq, fkFloorSeq:fkFloorSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#raspberrypiManagementTable tr").remove();
						$("#raspberrypiManagementTable td").remove();
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
			// 전체 선택 후 클릭 
			else {
				$.ajax({
					url : 'managementPi.do',
					data : {fkFloorSeq:fkFloorSeq, fkDetailSeq:fkDetailSeq, fkPlaceSeq:fkPlaceSeq, fkGenderNum:fkGenderNum},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#raspberrypiManagementTable tr").remove();
						$("#raspberrypiManagementTable td").remove();
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
</script>
</html>