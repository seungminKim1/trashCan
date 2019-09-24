<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/css/main/main.css"/>">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/resources/css/raspberrypi/raspberrypiManagement.css"/>">
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
					<form action="cleanerInsert.do" method="post">
						<p>
							아이디:<input type="text" id="cleanerId" name="cleanerId">
						</p>
						<p>
							패스워드:<input type="password" id="cleanerPassword"
								name="cleanerPassword">
						</p>
						<p>
							이름:<input type="text" id="cleanerName" name="cleanerName">
						</p>
						<p>
							번호:<input type="text" id="cleanerPhone" name="cleanerPhone">
						</p>
						<input type="submit" value="제출">
					</form>
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