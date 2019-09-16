<%@ page language="java" contentType="text/html; charset=UTF-8"
 pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	 <table border="1">
	<c:forEach items="${cleaner}" var="cleaner">
	 <tr>
	  <tr>
	  	<th>아이디</th>
	  	<th>비밀번호</th>
	  	<th>이름</th>
	  	<th>연락처</th>
	  	<th>상태</th>
	  </tr>
	  
	  <tr>
		<td>${cleaner.cleanerId}</td>
		<td>${cleaner.cleanerPassword }</td>
		<td>${cleaner.cleanerName}</td>
		<td>${cleaner.cleanerPhone}</td>
		<td>${cleaner.cleanerStatus}</td>
		<td><a href="cleanerDelete.do?id=${cleaner.cleanerId}">강제탈퇴</a></td>
	 </tr>
	 
	 
	</tr>
	</c:forEach>
	 </table>
</body>
</html>