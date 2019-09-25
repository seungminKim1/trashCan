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
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="raspberrypiContainer">
						<div style="margin-bottom: 100px;">
							<c:set var="dayDate" value="${dayMax.date}" />
							${dayDate} 쓰레기통 비운 횟수 
						</div>
						<div id="graphDiv">
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
</html>