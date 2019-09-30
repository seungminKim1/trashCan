<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/main.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/main/loginForm.css"/>">
	<link rel="stylesheet" href="<c:url value="https://fonts.googleapis.com/css?family=Baloo&display=swap"/>">
	<link rel="stylesheet" href="<c:url value="//cdn.rawgit.com/hiun/NanumSquare/master/nanumsquare.css"/>">
</head>
<body>
	<c:choose>
		<c:when test="${admin == null}">
			<div class="wrapper">
				<%@ include file="/WEB-INF/views/include/include-header.jsp"%>
				<div class="content">
					<div class="loginForm">
						<h3>관리자 로그인</h3>
						<form name="loginform" action="/adminLogin.do" method="post">
							<div>
								<input type="text" name="adminId" id="adminId" placeholder="아이디" />
							</div>
							<div>
								<input type="password" name="adminPassword" id="adminPassword" placeholder="비밀번호" />
							</div>
							<div>
								<input type="button" class="submit" onclick="javascript:loginform.submit()" value="로그인">
							</div>
						</form>
					</div>
				</div>
			</div>
		</c:when>
		<c:otherwise>
			<script type="text/javascript">
				window.location.href="<c:url value='/main/main.do'/>"	
			</script>
		</c:otherwise>
	</c:choose>
</body>
</html>