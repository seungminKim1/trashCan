<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/raspberrypi/raspberrypiRegisterForm.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
	<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-3.3.1.min.js"/>"></script>
	<script type="text/javascript">
		function check() {
			  if (form_raspberrypi.raspberrypiIP.value == "") {
			    alert("라즈베리파이 IP를 입력해 주세요.");
			    form_raspberrypi.raspberrypiIP.focus();
			    return false;
			  } else if ($("#place option:selected").text() == "--선택--") {
			    alert("장소를 선택해 주세요.");
			    form_raspberrypi.place.focus();
			    return false;
			  } else if ($("#detail option:selected").text() == "--선택--") {
			  	alert("디테일을 선택해 주세요.");
				form_raspberrypi.detail.focus();
				return false;
			  } else if ($("#floor option:selected").text() == "--선택--") {
				alert("층을 선택해 주세요.");
				form_raspberrypi.floor.focus();
				return false;
			  } else if ($("#gender option:selected").text() == "--선택--") {
			    alert("남/여를 선택해 주세요.");
			    form_raspberrypi.gender.focus();
			    return false;
			  }
			  form_raspberrypi.submit();
		}
	</script>
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="raspberrypiForm">
						<h3>라즈베리파이 등록</h3>
						<form name="form_raspberrypi" action="<c:url value='/raspberrypi/Insert.do'/>" method="post"> 
							<table>
								<tr>
									<td>
										<label>장소</label>
										<select id="place" name="place">
											<option>--선택--</option>
											<c:forEach var="place" items="${place}" varStatus="status">	
												<option value="${place.placeSeq}">${place.placeName}</option>
											</c:forEach>
										</select>
										<label>세부장소</label>
										<select name="detail" id="detail">
										</select>
										<label>층</label>
										<select name="floor" id="floor">
											<option>--선택--</option>
											<c:forEach var="floor" items="${floor}" varStatus="status">	
												<option value="${floor.floorSeq}">${floor.floorName}</option>
											</c:forEach>
										</select>
										<label>남/여</label>
										<select name="gender" id="gender">	
											<option>--선택--</option>
											<c:forEach var="gender" items="${gender}" varStatus="status">	
												<option value="${gender.genderNum}">${gender.genderName}</option>
											</c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<td>라즈베리파이 IP <input type="text" name="raspberrypiIP"></td>
								</tr>
								<tr>
									<td>
										<input type="button" class="submit" value="등록" onclick="javascript:check()">
									</td>
								</tr>
							</table>
						</form>
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
	$(function() {
		$('#place').change( function(){
			if ($("#place option:selected").text() == "--선택--") {
				$("#detail").find('option').remove();
				$("#detail").append("<option>" + "--선택--" + "</option>");
			} else {
				var fkPlaceSeq = $("#place option:selected").val();
				
				$.ajax({
					url : 'detailList.do',
					data : {fkPlaceSeq:fkPlaceSeq},
				    type : 'post',
				    dataType: 'json',
					success : function(data){
					if (data.length > 0) {
						$("#detail").find('option').remove();
							 
						for (i = 0; i < data.length; i++) {
							$("#detail").append("<option value =" + data[i].detailSeq + ">" + data[i].detailName + "</option>")
						}
					} else {
						$("#detail").find('option').remove();
						$("#detail").append("<option>" + "--선택--" + "</option>");
					}
					console.log(data.length);
				    },error:function(request,status,error){
				    	alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
				   	}
				});
			}
		});
	});
</script>
</html>