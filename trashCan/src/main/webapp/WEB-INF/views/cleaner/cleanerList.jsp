<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/css/main/main.css"/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/css/cleaner/cleanerList.css"/>">
<link rel="stylesheet"
	href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
<link rel="stylesheet"
	href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
</head>
<body>
	<c:choose>
		<c:when test="${admin != null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="cleanerContainer">
						<h3>사용자 관리</h3>
						<table class="cleanerManagementTable">
							<thead>
									<tr>
										<td>아이디</td>
										<td>비밀번호</td>
										<td>이름</td>
										<td>연락처</td>
										<td>상태</td>
										<td></td>
									</tr>
							</thead>
							<tbody>
								<c:forEach items="${cleaner}" var="cleaner">
									<tr>
										<td>${cleaner.cleanerId}</td>
										<td>${cleaner.cleanerPassword }</td>
										<td>${cleaner.cleanerName}</td>
										<td>${cleaner.cleanerPhone}</td>
										<td>${cleaner.cleanerStatus}</td>
										<td><a href="cleanerDelete.do?id=${cleaner.cleanerId}">강제탈퇴</a></td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</c:when>
		<c:otherwise>
			<script type="text/javascript">
				window.location.href = "<c:url value='/'/>"
			</script>
		</c:otherwise>
	</c:choose>
</body>
</html>