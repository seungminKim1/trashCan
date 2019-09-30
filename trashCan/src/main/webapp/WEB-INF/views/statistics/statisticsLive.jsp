<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/raspberrypi/raspberrypiManagement.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
	<link rel="stylesheet" href="<c:url value="https://cdn.rawgit.com/theus/chart.css/v1.0.0/dist/chart.css"/>">
	<script type="text/javascript" src="<c:url value="/resources/jquery/jquery-3.3.1.min.js"/>"></script>
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="raspberrypiContainer">
						<h3>실시간 통계</h3>
						<label>장소</label>
						<select id="place" name="place">
							<option value="dump">--선택--</option>
							<c:forEach var="place" items="${place}" varStatus="status">	
								<option value="${place.placeSeq}">${place.placeName}</option>
							</c:forEach>
						</select>
						<label>세부장소</label>
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
						<div id="graphDiv" style="margin-top: 50px;">
						</div>
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

<script type="text/javascript" src="<c:url value="/resources/javascript/statistics/statisticsLive.js"/>"></script>
</html>