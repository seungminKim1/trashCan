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
						<label>월</label>
						<select name="month" id="month">
							<option value="dump">--선택--</option>
							<c:forEach var="month" items="${month}" varStatus="status">	
								<option value="${month.month}">${month.month}월</option>
							</c:forEach>
						</select>
						<label>일</label>
						<select name="day" id="day">
							<option value="dump">--선택--</option>
						</select>
						<br>
						<label>장소</label>
						<select id="place" name="place">
							<option value="dump">--선택--</option>
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
							<c:set var="dayMax" value="${dayMax.max}" />
							<c:forEach var="dayView" items="${dayView}" varStatus="status">	
								<fmt:parseNumber var="statisticsPercent" value="${dayView.statisticsUseNum / dayMax * 100}" integerOnly="true"/>
									<c:choose>
										<c:when test="${statisticsPercent > 75}">
											<div class="charts charts--vertical">
												<div class="charts__chart chart--p${statisticsPercent} chart--grey" style="color:white;">
													${dayView.statisticsUseNum}회
				  								</div>
				  								<div style="font-size: 12px;">
				  									${dayView.placeName}
				  								</div>
				  							</div>
				  						</c:when>
				  						<c:when test="${statisticsPercent <= 75 && statisticsPercent > 50}">
											<div class="charts charts--vertical">
												<div class="charts__chart chart--p${statisticsPercent} chart--blue" style="color:white;">
													${dayView.statisticsUseNum}회
				  								</div>
				  								<div style="font-size: 12px;">
				  									${dayView.placeName}
				  								</div>
				  							</div>
				  						</c:when>
				  						<c:when test="${statisticsPercent <= 50 && statisticsPercent > 25}">
											<div class="charts charts--vertical">
												<div class="charts__chart chart--p${statisticsPercent} chart--green" style="color:white;">
													${dayView.statisticsUseNum}회
				  								</div>
				  								<div style="font-size: 12px;">
				  									${dayView.placeName}
				  								</div>
				  							</div>
				  						</c:when>
					  					<c:otherwise>
											<div class="charts charts--vertical">
												<div class="charts__chart chart--p${statisticsPercent} chart--yellow" style="color:white;">
													${dayView.statisticsUseNum}회
				  								</div>
				  								<div style="font-size: 12px;">
				  									${dayView.placeName}
				  								</div>
				  							</div>
										</c:otherwise>
									</c:choose>
							</c:forEach>
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

<script type="text/javascript" src="<c:url value="/resources/javascript/statistics/statisticsDay.js"/>"></script>
</html>