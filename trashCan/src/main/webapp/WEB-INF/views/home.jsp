<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
	<table>
        <thead>
            <tr>
                <th>아이디</th>
                <th>비밀번호</th>
            </tr>
        </thead>
        <tbody>
	        <tr>
	            <td>${adminVO.adminId}</td>
	            <td>${adminVO.adminPassword}</td>
	        </tr>
        </tbody>
    </table>
</body>
</html>
