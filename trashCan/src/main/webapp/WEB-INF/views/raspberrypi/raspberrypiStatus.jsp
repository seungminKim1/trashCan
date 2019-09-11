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
	<script type="text/javascript">
		function doSubmit() {
			if (form_raspberrypi.status.value == "") {
				alert("상태값을 입력해주세요");
				form_raspberrypi.status.focus();
				return false;
			} else if (form_raspberrypi.status.value == "0") {
				return true;
			} else if (form_raspberrypi.status.value == "1") {
				return true;
			} else if (form_raspberrypi.status.value != "0" || form_raspberrypi.status.value != "1") {
				alert("0, 1 중에서 입력해주세요");
				form_raspberrypi.status.focus();
				return false;
			}
			
			return true
		}
	</script>
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<c:set var="raspberrypi" value="${raspberrypi}"></c:set>
				<div class="content">
					<div class="raspberrypiContainer">
						<form name="form_raspberrypi" action="<c:url value='/raspberrypi/update.do'/>" method="post" onsubmit="return doSubmit();">
							<table class="raspberrypiManagementTable" border="1">
								<tr>
									<td><strong>라즈베리파이IP</strong></td>
									<td><strong>장소</strong></td>
									<td><strong>디테일</strong></td>
									<td><strong>층</strong></td>
									<td><strong>남/여</strong></td>
									<td><strong>상태 값</strong></td>
									<td><strong>0 = 사용x<br>1 = 사용o</strong>
								</tr>
								<tr>
									<td>${raspberrypi.raspberrypiIp}</td>
									<td>${raspberrypi.placeName}</td>
									<td>${raspberrypi.detailName}</td>
									<td>${raspberrypi.floorName}</td>
									<td>${raspberrypi.genderName}</td>
									<td><input type="text" name="status" id="status" value="${raspberrypi.raspberrypiStatus}"></td>
									<td><input type="submit" value="변경"> <input type="reset" value="취소" onclick="history.back()"></td>
								</tr>
							</table>
							<input type="hidden" name="ip" id="ip" value="${raspberrypi.raspberrypiIp}">
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
</html>