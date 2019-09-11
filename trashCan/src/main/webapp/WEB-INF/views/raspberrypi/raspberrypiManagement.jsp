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
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="raspberrypiContainer">
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
							<c:forEach var="raspberrypi" items="${raspberrypi}" varStatus="status">
							<tr>
								<td>${raspberrypi.raspberrypiIp}</td>
								<td>${raspberrypi.placeName}</td>
								<td>${raspberrypi.detailName}</td>
								<td>${raspberrypi.floorName}</td>
								<td>${raspberrypi.genderName}</td>
								<td>${raspberrypi.raspberrypiStatus}</td>
								<td><a href="<c:url value='/raspberrypi/infomation.do?ip=${raspberrypi.raspberrypiIp}'/>">변경</a></td>
							</tr>
							</c:forEach>
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
</html>